---
theme: default
layout: full
title: Claude Code Best Tips
colorSchema: dark
drawings:
  persist: false
transition: slide-left
mdc: true
---

# Claude Code

## 基础知识

- 快速开始
- 快捷键
- 斜杠命令

---

# 1. 在根目录启动 claude

启动 `claude` 时, 在你项目的根目录运行, Claude Code 可以看到整个项目的结构, 会工作的更好.

<!--
现在我打开慧小燃的项目 wukong-ai,

你需要在正在工作的项目的根目录中运行 claude, 这基本上就是你开始的方式.

初始根目录就是 claude 将上下文打包到第一个 token 的地方.
-->

---

# 2. 立即运行 /init

创建 `CLAUDE.md`, 它是 Claude Code 的长期记忆.

<!--
这样做的好处是, Claude 会查看你的代码库并进行分析, 然后创建一个初始的记忆.
-->

---

# 3. CLAUDE.md 层级结构

全局记忆 `~/.claude/CLAUDE.md`, 项目记忆 `./CLAUDE.md`, 其他规则 `./.claude/rules/**/*.md`

<!--
我们进入 `/memory`, 可以看到有两个记忆, 全局的和项目的.

它们的存在就是让你知道 Claude Code 当前操作的核心规则是什么.
-->

---

# 4. 保持 CLAUDE.md 的简洁

上下文越臃肿, AI 就越不可能完全按照你想要的方式去做.

<!--
我们来看一下它们长什么样,

它们非常小, 我认为一般 300 行是一个不错的大小.

更大也可以, 但要记住, 每次增加初始上下文时, 会使用更多的 token,

上下文越臃肿, AI 就越不可能完全按照你想要的方式去做.
-->

---

# 5. CLAUDE.md 的结构

What: 技术栈, Domain: 每部分是干什么的, Validation: 测试和类型检查.

<!--
我们来看一下 yos-web 这个项目, 它是慧帮手 PC 端.

里面包含了项目命令的说明, 类型验证, 技术栈, 目录结构, 路由的声明, 配置中心, 重要的组件, 请求调用方式, 路径别名, 开发中常见的规则等等.
-->

---

# 6. SHIFT + TAB 切换模式

Normal(普通模式) AUTO-Accept(自动接受模式) Plan Mode(计划模式).

<!--
接下来, 我将介绍一些我常用的快捷键.

第一个就是 SHIFT TAB 切换模式, 总共有三种模式: normal auto-accept plan mode.

每次开发新功能, 我都会从 plan mode 开始, 几乎 80% 的时候我使用这个模式和 AI 对齐方向, 然后才开始实施.
-->

---

# 7. ESC 中断

如果你觉得 AI 走偏了, 立即打断它, 不要等到它犯错再去纠正.

<!--
譬如说现在我让它随便做点什么, 例如: 告诉我 agents 模块是干什么的.

现在在 Plan Mode, 你会看到它正在思考, 并调用工具在做一些事情,

这个时候你可以观察它是否偏离轨道, 如果是, 就按 ESC, 它就会中断.

很多人可能会害怕中断它, 中断之后你可以说 '继续' 或者按 '上' 重新回到刚才的事情,

或者在计划设计的早期纠正它的方向.

claude code 里面有一套很完善的排队机制, 你可以一直给它发送消息, 它会智能的按照队列去处理.
-->

---

# 8. 双击 ESC 清空输入框

双击 ESC 可以清空整个输入框的提示词.

<!--
如果你复制一大段文本, 或者输入了一大段文本, 想立即清空, 而不是一个个的删除, 可以双击 ESC
-->

---

# 9. 双击 ESC 触发 rewind

如果输入框是空的, 双击 ESC 会触发 `/rewind`, rewind code 或者 rewind conversation, 或者全部 rewind.

---

# 10. 图片识别

提供图片路径或者拖拽图片, 并增加额外的上下文让 claude 知道你主要关注什么.

<!--
~~用 11.png 做个简单示例~~

如果你是前端, 并且在还原 UI 稿, 这一步可能会经常用到.

当然还有更多的快捷键, 你可以输入 /help 里面有一大堆的命令, 今天介绍的这些, 是我每天用到的.

12.png (这个比较耗时, 可以不处理)
-->

---

# 11. /clear

一旦你准备开始新功能或者完成了旧的任务, 使用 `/clear` 清除上下文.

<!--
接下来, 会介绍一些斜杠命令. clear 通常用于清除上下文, 可以在你不用关闭当前窗口的情况下重新创建一个新的会话.
-->

---

# 12. /context

使用 `/context` 可视化展示当前会话的上下文使用情况.

<!--
如果你觉得 AI 做的很不顺利 , 或者响应变慢了, 可以通过这个命令查看上下文的使用情况.

你也可以检查那些工具占用太多, 你可以移除它, 或者在特定的目录中禁用.
-->

---

# 13. /compact

使用 `/compact` 手动压缩上下文, 或者在 `~/.claude.json` 中设置 `autoCompactEnabled: true` 自动压缩上下文.

<!--
当你和 AI 探讨了很久, 上下文占比很高时, 使用 /compact 可以手动压缩上下文.

AI 会对当前的上下文进行总结.

对于我的项目, 我通常会禁用自动压缩, 使用手动压缩.

压缩的时候也可以增加额外的指令, 让 AI 尤其关注哪方面的上下文.
-->

---

# 14. /resume

使用 `/resume` 回到会话, 恢复上下文.

---

# 15. /rename

使用 `/rename` 自定义会话名称, 快速找到会话.

---

# 15. /mcp

使用 `/mcp` 查看 MCP Server 的状态.

<!--
这是我常用的一些 mcp server...

MCP 会占用上下文, 除非真的全局都需要使用, 否则按照项目启用它们.

MCP 可以很方便的帮助我们链接第三方应用, 但是使用的时候真的需要非常小心,

因为它们经常会导致上下文被快速增大,

例如 tapd 的 mcp server, 如果我让 AI: 查询 '乔神保' 在 '20260420' 迭代中的需求

你会发现为了完成这个上下文增加了很多.
-->

---

# 16. /help

使用 `/help` 展示所有的命令.

<!--
还有一些命令我没有说到, 例如:

- ! 可以进入 bash 模式
- @ 可以引用文件或者目录
-->

---

# Claude Code

## 高级技巧

- 下载与更新
- 绕过登录
- 结合插件
- Explore `~/.claude`
- Update `CLAUDE.md`
- Self-imporving
- Agent Security

---

# 17. 下载与更新

使用 `npm` 管理 Claude Code.

```shell
# 设置镜像
npm config set registry https://registry.npmmirror.com -g

# 安装
npm install -g @anthropic-ai/claude-code

# 安装指定版本(常用于回退版本)
# claude-code 更新频率极快, 新版有 bug 就立即回滚
npm install -g @anthropic-ai/claude-code@2.1.51

# 更新 - npm
npm install -g @anthropic-ai/claude-code@latest

# 更新 - claude
claude update
```

<!--
从 [2.1.15](https://github.com/anthropics/claude-code/blob/main/CHANGELOG.md#2115) 开始, claude code 废弃了 npm 的安装方式.

官方推荐使用 [native install](https://code.claude.com/docs/en/getting-started#install-claude-code).

由于网络的原因 native install 几乎无法完成.
-->

---

# 18. 绕过登录

Claude Code 运行时会检查是否完成登录引导.

在 `~/.claude.json` 中手动增加:

```json
{
  // 是否已完成首次启动的引导流程，true 表示不再展示欢迎向导
  "hasCompletedOnboarding": true,
  // 上次完成引导时的版本号，版本升级后可能触发新的引导提示
  "lastOnboardingVersion": "1.0.59",
  // 已显示订阅提示的次数，用于控制提示频率，避免反复打扰
  "subscriptionNoticeCount": 0,
  // 当前账户是否有有效订阅
  "hasAvailableSubscription": false,
  // 当可用 token 用量降到该阈值以下时触发警告，0 表示禁用此警告
  "fallbackAvailableWarningThreshold": 0
}
```

---

# 19. 结合插件

Vscode, JetBrains IDEs 均包含.

<!--
拿 vscode 举例, 插件提供了两种启动方式: Open in Sidebar 和 Open in Terminal.

Open in Sidebar 提供了一个类似 GUI 风格的界面, 我使用的非常少.

Open in Terminal 和你在其他终端直接运行是一样的.

如果在 vscode 之外的终端运行 claude,

可以使用 /ide 连接 vscode, 一旦连接成功, 你的终端会和 vscode 的光标联动.

方便发送选择代码块和文件.
-->

---

# 20. Explore `~/.claude`

会话, 配置, 工具等, 所有的一切都在 `~/.claude`.

<!--
接下来, 我们来一起探索 ~/.claude.

- settings.json [secret 如何创建](https://bigmodel.cn/usercenter/proj-mgmt/apikeys)
- 配置 statusline
- projects [可视化会话](https://wukong-fed.zrhsh.com/claude-code-timeline) , 可以用来调试你的 commands 或者 skills
- alias settings
-->

---

# 21. Update `CLAUDE.md`

当你纠正错误后, 让模型总结并更新 `CLAUDE.md`

<!--
我们在平时的使用中, 经常会纠正 AI 的错误, 每当它犯错我们就可以让 AI 自行总结记录并更新 CLAUDE.md.

参考 `commands/claude-rule-update.md`, 这是一个非常简单的指令.
-->

---

# 22. Self-improving

Learning from sessions, Self-improving from reflections.

```shell
每次会话结束
    ↓ /diary
  结构化日记文件 (~/.claude/memory/diary/YYYY-MM-DD-session-N.md)
  · 任务摘要 / 完成工作 / 设计决策
  · 用户偏好 / 代码风格 / PR 反馈
  · 遇到的问题和解决方案

    ↓ /reflect (定期，默认分析最近 10 条未处理日记)
  模式识别与评估
  · 频率过滤：出现 1 次 → 忽略，2 次 → 候选，3+ 次 → 高置信写入
  · 规则分级：Global (~/.claude/CLAUDE.md) vs Project-Specific (项目/CLAUDE.md)
  · Violation Detection：发现已有规则被违反 → 强化而非新增（加 ZERO TOLERANCE、上移优先级）
  · 去重：processed.log 记录已处理日记，避免重复分析

    ↓ 自动写入
  CLAUDE.md 更新
  · ~/.claude/CLAUDE.md        ← 跨项目通用规则
  · [project]/CLAUDE.md        ← 项目专属规则
  · processed.log 追加记录
```

<!--
我使用两个 slash command: diary.md 和 reflect.md

每次会话结束后，/diary 让 Claude 回顾这次对话发生了什么——做了哪些事、踩了哪些坑、你纠正了它哪些行为——然后把这些记录成一篇结构化的日记存起来。

积累了一定日记之后，/reflect 会跨会话地去读这些日记，找出反复出现的规律：比如你三次纠正它的提交信息格式、五次要求用 TypeScript strict mode。找到这些规律之后，它会直接把稳定的习惯和规则写进 CLAUDE.md——这是 Claude 每次启动都会自动加载的配置文件，相当于把学到的东西固化成"长期记忆"。

基于 hooks 更高阶, 打开 settings-exp.json, 这个我还在调试.
-->

---

# 23. Agent Security

AI 没有"数据"和"指令"的本质区分——凡是进入上下文窗口的文字, 都可能被当作指令执行.

| 攻击类型                         | 原理                                                                |
| -------------------------------- | ------------------------------------------------------------------- |
| **提示注入（Prompt Injection）** | 恶意文本伪装成内容，被 Agent 当作指令执行                           |
| **供应链攻击**                   | npm 包名拼写相似（typosquat）、外部链接被篡改、社区技能隐藏延迟载荷 |
| **凭证窃取**                     | 读取 `.env`、SSH key、API token，通过 hook 静默外传                 |
| **横向移动**                     | Agent 有 SSH key → 渗透进生产服务器；有多账号 → 攻陷所有渠道        |
| **MCP 工具投毒（"Rug Pull"）**   | 你批准了某工具后，工具描述被悄悄篡改，指令对用户不可见但 LLM 能读取 |
| **记忆投毒**                     | 恶意片段分多次写入 Agent 记忆文件，重启后拼合成有效攻击载荷         |
