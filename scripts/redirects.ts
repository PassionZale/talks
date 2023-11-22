import fs from "node:fs/promises";
import { dirname, resolve } from "node:path";
import process from "node:process";
import fg from "fast-glob";

const packageFiles = (
  await fg("*/src/package.json", {
    onlyFiles: true,
  })
).sort();

const bases = (
  await Promise.all(
    packageFiles.map(async (file) => {
      const talkRoot = dirname(dirname(file));
      const json = JSON.parse(await fs.readFile(file, "utf-8"));
      const pdfFile = (
        await fg("*.pdf", {
          cwd: resolve(process.cwd(), talkRoot),
          onlyFiles: true,
        })
      )[0];

      const command = json.scripts?.build;

      if (!command) return;

      const base = command.match(/ --base (.*?)\s/)?.[1];

      if (!base) return;

      return {
        dir: talkRoot,
        base,
        pdfFile,
      };
    })
  )
).filter(Boolean);

interface RedirectItem {
  source: string;
  destination: string;
  statusCode: number;
}

const redirects = bases.flatMap(({ base, pdfFile, dir }) => {
  const parts: RedirectItem[] = [];

  if (pdfFile) {
    parts.push({
      source: `${base}pdf`,
      destination: `https://github.com/passionzale/talks/blob/main/${dir}/${pdfFile}?raw=true`,
      statusCode: 302,
    });

    parts.push({
      source: `/${dir}/pdf`,
      destination: `https://github.com/passionzale/talks/blob/main/${dir}/${pdfFile}?raw=true`,
      statusCode: 302,
    });
  }

  parts.push({
    source: `${base}src`,
    destination: `https://github.com/passionzale/talks/tree/main/${dir}`,
    statusCode: 302,
  });

  parts.push({
    source: `${dir}`,
    destination: `https://talks.lovchun.com${base}`,
    statusCode: 301,
  });

  parts.push({
    source: `${base}(.*)`,
    destination: `${base}index.html`,
    statusCode: 200,
  });

  return parts;
});

const content = {
  github: {
    enabled: false,
  },
  buildCommand: "pnpm run build",
  outputDirectory: "dist",
  redirects: [
    ...redirects,
    ...[
      {
        source: "/",
        destination: "https://github.com/passionzale/talks",
        statusCode: 302,
      },
    ],
  ],
};

await fs.writeFile("vercel.json", JSON.stringify(content, null, 2), "utf-8");
