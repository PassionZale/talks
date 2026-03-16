# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a monorepo for presentation slides, built with [Slidev](https://sli.dev). Each talk is organized in a date-named directory (`YYYY-MM-DD`) and contains its own Slidev project.

## Project Structure

```
talks/
├── YYYY-MM-DD/           # Individual talk directory
│   ├── src/              # Slidev project root
│   │   ├── slides.md     # Main slide content
│   │   ├── components/   # Vue components
│   │   ├── pages/        # Custom pages
│   │   ├── public/       # Static assets
│   │   └── package.json  # Talk-specific scripts
│   └── *.pdf             # Exported PDF
├── scripts/
│   ├── picker.ts        # Interactive talk selector
│   └── redirects.ts     # Generate vercel.json redirects
├── templates/           # Talk templates
└── dist/                # Build output directory
```

## Common Commands

### Development
- `pnpm run dev` - Interactive picker to select and start a talk's dev server
- `pnpm -F <talk-dir>/src run dev` - Start dev server for specific talk

### Building
- `pnpm run build` - Build all talks to `dist/`
- `pnpm -F <talk-dir>/src run build` - Build specific talk
- `pnpm -F <talk-dir>/src run export` - Export talk to PDF

### Code Quality
- `pnpm run lint` - Run ESLint with auto-fix

### Deployment
- `pnpm run redirects` - Regenerate `vercel.json` redirects from talk configs
- `pnpm run release` - Deploy to Vercel production

## Adding a New Talk

1. Create a new directory: `YYYY-MM-DD/`
2. Copy structure from an existing talk or use templates
3. Create `src/package.json` with build script containing `--base` path (e.g., `--base /2025/my-talk/`)
4. Update `vercel.json` redirects by running `pnpm run redirects`

## Slidev Notes

- Slides are authored in Markdown (`slides.md`)
- Vue components can be used in `components/`
- Custom layouts in `pages/`
- Global styles in `style.css`
- Uses `@antfu/eslint-config` for linting (ignores `.md` files)
