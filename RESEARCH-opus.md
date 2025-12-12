# ClaudeKit Engineer: Comprehensive Research Analysis

**Research Date**: 2025-12-02  
**Version**: 2.0.0  
**Researcher**: Claude Opus 4.5 (Automated)

---

## Mục lục

| # | Phần | Mô tả |
|---|------|-------|
| 1 | [Tổng quan](#1-tổng-quan) | Giới thiệu và Quick Start |
| 2 | [Kiến trúc hệ thống](#2-kiến-trúc-hệ-thống) | Layers, patterns, communication |
| 3 | [Hệ thống Agents](#3-hệ-thống-agents) | 16+ agents chuyên biệt |
| 4 | [Hệ thống Commands](#4-hệ-thống-commands) | 50+ slash commands |
| 5 | [Hệ thống Skills](#5-hệ-thống-skills) | 30+ skill modules |
| 6 | [Hooks & Performance](#6-hooks--performance) | Optimization hooks |
| 7 | [Model Context Protocol](#7-model-context-protocol-mcp) | MCP integration |
| 8 | [OpenCode CLI](#8-opencode-cli-integration) | Alternative CLI |
| 9 | [Hướng dẫn sử dụng](#9-hướng-dẫn-sử-dụng) | Best practices |
| 10 | [Đánh giá & Kết luận](#10-đánh-giá--kết-luận) | Strengths, limitations |
| 11 | [Đánh Giá Chất Lượng Prompts](#đánh-giá-chất-lượng-prompts) | Prompt engineering analysis |
| 12 | [Prompt Xuất Sắc Nhất](#prompt-xuất-sắc-nhất-debugging-skill) | Debugging skill deep dive |

---

## Changelog

| Version | Date | Changes |
|---------|------|---------|
| 1.0.0 | 2025-12-02 | Initial research |
| 1.1.0 | 2025-12-02 | Agent analysis, skills deep dive |
| 1.2.0 | 2025-12-02 | Progressive Disclosure, new agents/skills |
| 2.0.0 | 2025-12-02 | Complete restructure, improved organization |

---

# PHẦN I: TỔNG QUAN

## 1. Tổng quan

### 1.1. ClaudeKit Engineer là gì?

ClaudeKit Engineer là một **boilerplate framework** toàn diện cho việc phát triển phần mềm với AI-powered coding agents. Framework này cung cấp:

| Thành phần | Số lượng | Mô tả |
|------------|----------|-------|
| Agents | 16+ | AI agents chuyên biệt cộng tác qua file-based protocol |
| Commands | 50+ | Slash commands trigger agent workflows |
| Skills | 30+ | Knowledge packages với Progressive Disclosure |
| Hooks | 4+ | Performance optimization hooks |

### 1.2. Target Users

- Solo developers
- Small teams (2-10 người)
- Open source maintainers
- Startups

### 1.3. Key Benefits

1. **Tăng tốc phát triển 10x**: Delegate planning, testing, review cho AI
2. **Chất lượng code cao hơn**: Code review tự động, test coverage
3. **Documentation luôn up-to-date**: Sync với code changes
4. **Git workflow chuyên nghiệp**: Conventional commits, clean history

### 1.4. Quick Start

```bash
# 1. Install ClaudeKit CLI
npm install -g claudekit-cli

# 2. Create new project
ck new --dir my-project --kit engineer

# 3. Or add to existing project
cd /path/to/project
ck update --kit engineer

# 4. Start development
claude
```

### 1.5. Cấu trúc thư mục

```
claudekit-engineer/
├── .claude/                    # Claude Code configuration
│   ├── agents/                 # 16 agent definitions
│   ├── commands/               # 50+ command definitions
│   ├── skills/                 # 30+ skill modules
│   ├── hooks/                  # Performance hooks
│   ├── workflows/              # Development workflows
│   └── settings.json           # Configuration
├── .opencode/                  # OpenCode CLI alternative
│   ├── agent/                  # Agent definitions
│   └── command/                # Command mappings
├── docs/                       # Project documentation
├── guide/                      # User guides
│   ├── COMMANDS.md
│   └── SKILLS.md
└── CLAUDE.md                   # Global instructions
```

---

# PHẦN II: KIẾN TRÚC

## 2. Kiến trúc hệ thống

### 2.1. Triết lý thiết kế

Framework tuân theo 3 nguyên tắc cốt lõi:

| Nguyên tắc | Ý nghĩa |
|------------|---------|
| **YAGNI** | You Aren't Gonna Need It - Không over-engineer |
| **KISS** | Keep It Simple, Stupid - Ưu tiên simple solutions |
| **DRY** | Don't Repeat Yourself - Eliminate duplication |

### 2.2. Architectural Patterns

**Primary Pattern**: Microservices-inspired Agent Architecture

**Secondary Patterns**:
- Command Pattern (slash commands)
- Observer Pattern (agent communication)
- Strategy Pattern (workflow selection)
- Template Method Pattern (agent workflows)

### 2.3. System Layers

```
┌─────────────────────────────────────────────────┐
│              CLI Interface                       │
│         (Claude Code / OpenCode)                 │
├─────────────────────────────────────────────────┤
│              Command Layer                       │
│      (Parser, Router, Argument Handler)          │
├─────────────────────────────────────────────────┤
│               Agent Layer                        │
│   (Planner, Researcher, Tester, Reviewer...)     │
├─────────────────────────────────────────────────┤
│              Workflow Layer                      │
│      (Sequential, Parallel, Fan-Out)             │
├─────────────────────────────────────────────────┤
│               Skills Layer                       │
│     (Knowledge modules, MCP integrations)        │
├─────────────────────────────────────────────────┤
│            Integration Layer                     │
│        (Hooks, MCP, GitHub, Discord)             │
├─────────────────────────────────────────────────┤
│                Data Layer                        │
│      (File system, Reports, Git repository)      │
└─────────────────────────────────────────────────┘
```

### 2.4. Agent Communication Protocol

**Communication Medium**: File system (markdown files)

**Report Location**: `./plans/<plan-name>/reports/`

**Naming Convention**: `YYMMDD-from-[source]-to-[dest]-[task]-report.md`

**Communication Patterns**:

| Pattern | Mô tả | Use Case |
|---------|-------|----------|
| Request-Response | A requests → B responds | Direct queries |
| Broadcast | A publishes → Multiple consumers | Status updates |
| Chain | A → B → C | Sequential workflows |
| Fan-Out | A spawns B, C, D | Parallel research |
| Fan-In | Collect from parallel agents | Synthesis |

### 2.5. Workflow Patterns

#### Sequential Chaining
```
Planning → Implementation → Testing → Review → Deploy
```
*Use when*: Tasks có dependencies

#### Parallel Execution
```
            ┌─→ Researcher (Auth) ─┐
Planner ────┼─→ Researcher (DB) ───┼─→ Planner (Synthesize)
            └─→ Researcher (UI) ───┘
```
*Use when*: Tasks độc lập, cần explore multiple approaches

#### Query Fan-Out
```
Main Agent → Planner → [Multiple Researchers] → Planner → Main Agent
```
*Use when*: Research-heavy tasks

---

# PHẦN III: AGENTS

## 3. Hệ thống Agents

### 3.1. Agent Categories

#### Planning Agents
| Agent | Model | Purpose |
|-------|-------|---------|
| `planner` | claude-sonnet-4 | Technical planning, architecture design |
| `researcher` | haiku | Technology research, best practices |
| `brainstormer` | claude-sonnet-4 | Solution ideation, evaluation |

#### Implementation Agents
| Agent | Model | Purpose |
|-------|-------|---------|
| `scout` | haiku | Parallel codebase exploration (internal) |
| `scout-external` | haiku | Orchestrate external tools (Gemini, OpenCode) |
| `ui-ux-designer` | claude-sonnet-4 | Design creation, 3D/immersive UIs |
| `database-admin` | claude-sonnet-4 | Database operations |
| `copywriter` | claude-sonnet-4 | Creative content writing |

#### Quality Assurance Agents
| Agent | Model | Purpose |
|-------|-------|---------|
| `code-reviewer` | claude-sonnet-4 | Code quality assessment |
| `tester` | claude-sonnet-4 | Test creation & execution |
| `debugger` | claude-sonnet-4 | Issue analysis, root cause finding |

#### Documentation & Operations
| Agent | Model | Purpose |
|-------|-------|---------|
| `docs-manager` | gemini-2.5-flash | Documentation maintenance |
| `git-manager` | grok-code | Version control operations |
| `project-manager` | claude-sonnet-4 | Progress tracking |
| `journal-writer` | claude-sonnet-4 | Development journaling |

#### MCP & Integration
| Agent | Model | Purpose |
|-------|-------|---------|
| `mcp-manager` | haiku | MCP server integration, tool execution |

### 3.2. Agent Definition Structure

```yaml
---
name: agent-name
description: When to use this agent with examples
mode: subagent | all
model: anthropic/claude-sonnet-4-20250514
temperature: 0.1
tools: [list of allowed tools]
---

# Agent Name

## Your Skills
- Skill references

## Role Responsibilities
- Core tasks

## Workflow Process
1. Step 1
2. Step 2

## Output Requirements
- Format specifications
```

### 3.3. Model Selection Strategy

| Model | Use Case | Characteristics |
|-------|----------|-----------------|
| Claude Sonnet 4 | Most agents | Fast, efficient, good reasoning |
| Claude Opus 4 | Complex planning | Advanced reasoning, higher cost |
| Gemini 2.5 Flash | Documentation | Cost-effective, fast |
| Grok Code | Git operations | Specialized for version control |
| Haiku | Fast search | Cheapest, fastest |

### 3.4. New Agents Deep Dive

#### MCP Manager Agent

**Role**: MCP integration specialist - execute tasks using MCP tools while keeping main context clean.

**Execution Strategy** (Priority Order):
1. **Gemini CLI** (primary): `gemini -y -m gemini-2.5-flash -p "<task>"`
2. **Direct Scripts** (fallback): `npx tsx scripts/cli.ts call-tool`
3. **Report Failure**: If both fail, report error to main agent

**Workflow**:
```
Main Agent delegates MCP task
       ↓
Check Gemini CLI availability
       ↓
Execute (Gemini or Script fallback)
       ↓
Report: status, output, artifacts, errors
```

#### Scout External Agent

**Role**: Elite Codebase Scout - orchestrate external agentic tools for parallel search.

**Key Constraint**: Does NOT search directly. Orchestrates OTHER tools:
- `gemini -y -p "[prompt]" --model gemini-2.5-flash`
- `opencode run "[prompt]" --model opencode/grok-code`

**Scale Selection**:
- SCALE ≤ 3: Use only Gemini agents
- SCALE > 3: Use both Gemini and OpenCode agents

---

# PHẦN IV: COMMANDS

## 4. Hệ thống Commands

### 4.1. Command Categories Overview

| Category | Commands | Purpose |
|----------|----------|---------|
| Core Development | 8 | Feature development workflow |
| Planning | 4 | Research & planning |
| Fix & Debug | 7 | Bug fixing, debugging |
| Design & Content | 10 | UI/UX, copywriting |
| Documentation | 3 | Docs management |
| Git Operations | 3 | Version control |
| Integration | 2 | Third-party services |

### 4.2. Core Development Commands

| Command | Description |
|---------|-------------|
| `/plan` | Research & create implementation plan |
| `/cook` | Full implementation workflow |
| `/test` | Run test suite |
| `/ask` | Technical consultation |
| `/bootstrap` | Initialize new project |
| `/brainstorm` | Solution ideation |
| `/scout` | Parallel codebase search |
| `/watzup` | Session summary |

### 4.3. Planning Commands

| Command | Description |
|---------|-------------|
| `/plan:two` | Create plan with 2+ approaches, pros/cons |
| `/plan:ci` | Analyze GitHub Actions, provide fix plan |
| `/plan:cro` | Plan conversion rate optimization |
| `/plan:fast` | Quick planning |
| `/plan:hard` | Complex problem planning |

### 4.4. Fix & Debug Commands

| Command | Description |
|---------|-------------|
| `/fix:fast` | Quick bug fixes |
| `/fix:hard` | Complex problems |
| `/fix:ci` | GitHub Actions debugging |
| `/fix:test` | Test failures |
| `/fix:types` | TypeScript errors |
| `/fix:logs` | Log analysis |
| `/fix:layout` | UI/layout issues |

### 4.5. Design & Content Commands

| Command | Description |
|---------|-------------|
| `/design:fast` | Quick design |
| `/design:good` | Award-winning quality |
| `/design:3d` | Three.js immersive |
| `/design:screenshot` | Design from image |
| `/design:video` | Design from video |
| `/design:describe` | Describe design without implementing |
| `/content:fast` | Quick copywriting |
| `/content:good` | High-quality content with research |
| `/content:enhance` | Enhance existing copy |
| `/content:cro` | Conversion rate optimized copy |

### 4.6. Documentation Commands

| Command | Description |
|---------|-------------|
| `/docs:init` | Initial documentation |
| `/docs:update` | Update all docs |
| `/docs:summarize` | Codebase summary |

### 4.7. Git Commands

| Command | Description |
|---------|-------------|
| `/git:cm` | Stage & commit |
| `/git:cp` | Commit & push |
| `/git:pr` | Create pull request |

### 4.8. Integration Commands

| Command | Description |
|---------|-------------|
| `/integrate:polar` | Polar.sh payment integration |
| `/integrate:sepay` | SePay Vietnam payment integration |

### 4.9. Typical Command Workflow: `/cook`

```
1. User: /cook "add user authentication"
2. Planner: Create implementation plan
3. Researchers (parallel): Explore auth solutions
4. Planner: Synthesize, create detailed plan
5. Main Agent: Implement code
6. Main Agent: Run type checking/compilation
7. Tester: Write and run tests
8. (If fail): Debugger analyzes → loop to step 5
9. Code Reviewer: Review implementation
10. Docs Manager: Update documentation
11. Git Manager: Commit with conventional message
```

### 4.10. Command Definition Structure

```yaml
---
description: What this command does
argument-hint: [optional-args]
---

Command instructions here.
Use $ARGUMENTS for all arguments.
Use $1, $2, etc. for specific positions.
```

---

# PHẦN V: SKILLS

## 5. Hệ thống Skills

### 5.1. Skills là gì?

Skills là **folders of instructions, scripts, resources** mà Claude loads dynamically để improve performance on specialized tasks.

> "Skills function like onboarding guides, allowing users to create composable capabilities without needing to design custom agents for each scenario." — Anthropic

### 5.2. Skill Architecture

```
.claude/skills/
└── [skill-name]/
    ├── SKILL.md              # Main skill definition (<100 lines)
    ├── references/           # Supporting documentation (<100 lines each)
    │   ├── api-ref.md
    │   └── examples.md
    ├── scripts/              # Utility scripts (optional)
    │   └── process.js
    └── assets/               # Templates, images, fonts
```

### 5.3. Progressive Disclosure Principle (CRITICAL)

Skills use **three-level loading system** to manage context efficiently:

| Level | Content | Token Usage |
|-------|---------|-------------|
| 1. Metadata | `name` + `description` in YAML | ~100 words (always loaded) |
| 2. SKILL.md body | When skill triggers | <5k words |
| 3. Bundled resources | As needed by Claude | Unlimited* |

*Scripts can be executed without reading into context window.

**File Size Rules**:
- `SKILL.md`: **< 100 lines** (use references/ for details)
- Referenced markdown files: **< 100 lines each** (split if larger)
- Scripts: No limit, but must work correctly

**Why Progressive Disclosure?**
Better **context engineering**: Claude loads only relevant files, không đọc toàn bộ SKILL.md dài. Descriptions trong metadata phải concise nhưng chứa đủ use cases để skills được activate automatically.

### 5.4. Skill Categories

#### AI & Multimodal
| Skill | Description |
|-------|-------------|
| `ai-multimodal` | Image gen, vision, audio, video analysis |
| `sequential-thinking` | Structured problem-solving |

#### Development Frameworks
| Skill | Description |
|-------|-------------|
| `better-auth` | Authentication for TypeScript |
| `nextjs` | Next.js patterns |
| `shadcn-ui` | UI components |
| `tailwindcss` | Utility CSS |

#### Infrastructure & DevOps
| Skill | Description |
|-------|-------------|
| `docker` | Containerization |
| `cloudflare` | Workers, R2, D1 |
| `gcloud` | Google Cloud SDK |
| `devops` | Combined infrastructure skills |

#### Databases
| Skill | Description |
|-------|-------------|
| `mongodb` | Document DB |
| `postgresql-psql` | SQL operations |
| `databases` | Combined database skills |

#### Media Processing
| Skill | Description |
|-------|-------------|
| `imagemagick` | Image manipulation |
| `ffmpeg` | Video/audio processing |
| `media-processing` | Combined media skills |

#### MCP & Tools
| Skill | Description |
|-------|-------------|
| `mcp-builder` | Build MCP servers |
| `mcp-management` | Manage MCP connections |
| `repomix` | Pack repos for AI |
| `docs-seeker` | Search technical docs |

### 5.5. New Skills (v1.2.0)

#### Design & Aesthetics

**aesthetic** - 4-stage design approach:
1. **BEAUTIFUL**: Understanding Aesthetics - Study designs, identify patterns
2. **RIGHT**: Ensuring Functionality - Design systems, accessibility
3. **SATISFYING**: Micro-Interactions - Animations, timing, easing
4. **PEAK**: Storytelling Through Design - Narrative elements, parallax

*Workflows*: Capture & Analyze Inspiration, Generate & Iterate Design Images

**threejs** - 3D web experiences with WebGL/WebGPU:
- 16 reference files covering all aspects
- Progressive learning path: Level 1 (basics) → Level 5 (specialized)
- Topics: getting-started, loaders, textures, cameras, lights, animations, math, interaction, postprocessing, controls, materials, performance, node-materials, physics-vr, specialized-loaders, webgpu

#### Mobile Development

**mobile-development** - Cross-platform and native:
- Frameworks: React Native, Flutter, Swift/SwiftUI, Kotlin/Compose
- 10 Commandments of Mobile Development
- Performance budgets: <2s launch, <100MB memory, 60 FPS
- Decision matrix: When to use React Native vs Flutter vs Native
- Platform guidelines: iOS HIG, Material Design 3

#### Skill Creation

**skill-creator** - Guide for creating effective skills:
- 6-step process: Understand → Plan → Initialize → Edit → Package → Iterate
- Scripts: `init_skill.py`, `package_skill.py`
- Best practices for progressive disclosure

### 5.6. Skill Loading Mechanism

Skills được **automatically invoked** khi Claude detects relevant context:
- Dynamic loading based on task
- Progressive disclosure (only load details when needed)
- Composable (multiple skills can stack)

---

# PHẦN VI: HOOKS & PERFORMANCE

## 6. Hooks & Performance

### 6.1. Hook Types

| Hook | Trigger | Purpose |
|------|---------|---------|
| `PreToolUse` | Before tool execution | Block/modify commands |
| `PostToolUse` | After tool execution | Analyze results, suggest improvements |

### 6.2. Scout Block Hook

**Purpose**: Block access to heavy directories (node_modules, __pycache__, .git/, dist/, build/) để improve AI agent performance.

**Architecture**:
```
scout-block.js (Node.js dispatcher)
       │
       ├─→ scout-block.sh (Unix/Linux/macOS/WSL)
       └─→ scout-block.ps1 (Windows)
```

**Exit Codes**:
- `0`: Command allowed
- `2`: Command blocked or error

### 6.3. Modularization Hook

**Purpose**: Analyze files modified via Write/Edit tools, suggest modularization for files > 200 LOC.

**Features**:
- Non-blocking (always exits 0)
- Threshold: 200 LOC per file
- Suggests: Kebab-case naming, logical separation, self-documenting names
- Debug mode: `MODULARIZATION_HOOK_DEBUG=true`

**Output Example**:
```
📊 File user-service.ts has 350 LOC (threshold: 200).
Consider modularization:
- Analyze logical separation boundaries
- Use kebab-case naming (e.g., user-authentication-service.ts)
- Ensure file names are self-documenting for LLM tools
```

### 6.4. Full Settings Configuration

```json
{
  "includeCoAuthoredBy": false,
  "statusLine": {
    "type": "command",
    "command": "node .claude/statusline.js",
    "padding": 0
  },
  "hooks": {
    "PreToolUse": [{
      "matcher": "Bash",
      "hooks": [{
        "type": "command",
        "command": "node \"$CLAUDE_PROJECT_DIR\"/.claude/hooks/scout-block.js"
      }]
    }],
    "PostToolUse": [{
      "matcher": "Write|Edit",
      "hooks": [{
        "type": "command",
        "command": "node \"$CLAUDE_PROJECT_DIR\"/.claude/hooks/modularization-hook.js"
      }]
    }]
  }
}
```

### 6.5. Notification Hooks

| Hook | Purpose |
|------|---------|
| `discord_notify.sh` | Discord webhook notifications |
| `telegram_notify.sh` | Telegram bot notifications |
| `send-discord.sh` | Release notifications |

### 6.6. Statusline

Custom Claude Code statusline showing:
- 📁 Current directory
- 🌿 Git branch
- 🤖 Model name
- ⌛ Session time remaining
- 💵 Cost tracking
- 📊 Token usage

---

# PHẦN VII: MCP

## 7. Model Context Protocol (MCP)

### 7.1. MCP là gì?

MCP (Model Context Protocol) là **open standard** by Anthropic để connect AI agents to external systems.

> "Acts like a USB-C port for AI, standardizing connections and enabling capabilities like accessing Google Calendar, generating web apps from designs, and connecting chatbots to databases."

### 7.2. Key Features

| Feature | Description |
|---------|-------------|
| Dynamic Tool Discovery | Runtime discovery vs static APIs |
| Structured Invocation | Standardized method for communication |
| Multi-turn Interaction | Conversational interactions with context |
| Security | OAuth 2.1, centralized permissions |

### 7.3. MCP Configuration

**Location**: `.claude/.mcp.json`

```json
{
  "mcpServers": {
    "context7": {
      "command": "npx",
      "args": ["-y", "@upstash/context7-mcp", "--api-key", "KEY"]
    },
    "human": {
      "command": "npx",
      "args": ["@goonnguyen/human-mcp@latest"],
      "env": { "GOOGLE_GEMINI_API_KEY": "KEY" }
    },
    "chrome-devtools": {
      "command": "npx",
      "args": ["-y", "chrome-devtools-mcp@latest"]
    }
  }
}
```

### 7.4. Available MCP Integrations

| Server | Purpose |
|--------|---------|
| `context7` | Read latest documentation |
| `human-mcp` | Human-in-the-loop interactions |
| `chrome-devtools` | Browser automation |
| `sequential-thinking` | Structured problem-solving |

---

# PHẦN VIII: OPENCODE CLI

## 8. OpenCode CLI Integration

### 8.1. Overview

ClaudeKit supports **OpenCode CLI** as alternative to Claude Code.

### 8.2. Directory Structure

```
.opencode/
├── agent/              # 14 agent definitions
│   ├── planner.md
│   ├── researcher.md
│   ├── tester.md
│   ├── debugger.md
│   ├── code-reviewer.md
│   ├── docs-manager.md
│   ├── git-manager.md
│   └── project-manager.md
└── command/            # Command mappings
```

### 8.3. Comparison

| Aspect | Claude Code | OpenCode |
|--------|-------------|----------|
| Provider | Anthropic | OpenCode AI |
| Models | Claude family | Multiple (Grok, etc.) |
| Configuration | `.claude/` | `.opencode/` |
| MCP Support | Native | Via integration |

### 8.4. Usage

```bash
# OpenCode CLI
opencode run "[prompt]" --model opencode/grok-code

# Claude Code
claude "prompt"
```

---

# PHẦN IX: HƯỚNG DẪN SỬ DỤNG

## 9. Hướng dẫn sử dụng

### 9.1. Common Workflows

#### Feature Development
```bash
/plan "implement user authentication"   # Research & plan
/cook "implement user auth as planned"  # Implement
/fix:test                               # Fix test failures
/docs:update                            # Update docs
/git:cp                                 # Commit & push
```

#### Bug Fixing
```bash
/debug "slow API responses"             # Analyze issue
/plan "optimize API response times"     # Plan fix
/fix:hard "API optimization"            # Implement
/test                                   # Verify
```

#### Design Work
```bash
/design:screenshot "./mockup.png"       # Design from reference
/design:3d "interactive product showcase" # 3D immersive
/design:fast "pricing table with 3 tiers" # Quick design
```

### 9.2. Best Practices

| Practice | Description |
|----------|-------------|
| Be Specific | Provide clear, detailed descriptions |
| Use Visuals | Include screenshots/videos for design tasks |
| Review Plans | Always review before implementation |
| Test Early | Use `/test` frequently |
| Update Docs | Run `/docs:update` after significant changes |

### 9.3. API Key Setup (Gemini Skills)

Priority order:
1. Environment variable: `GEMINI_API_KEY`
2. Project root `.env`
3. `.claude/.env`
4. `.claude/skills/.env`
5. Individual skill `.env`

### 9.4. Code Standards

#### File Size Rule
- **Hard limit**: 500 lines per file
- **Recommended**: < 200 lines per file

#### Naming Conventions

| Type | Convention | Example |
|------|------------|---------|
| Variables/Functions | camelCase | `getUserById` |
| Classes | PascalCase | `UserService` |
| Constants | UPPER_SNAKE_CASE | `MAX_RETRY_COUNT` |
| Files (general) | kebab-case | `user-service.js` |
| React Components | PascalCase | `UserProfile.jsx` |
| Directories | kebab-case | `api-clients/` |

#### Git Commit Types

| Type | Description | Version Bump |
|------|-------------|--------------|
| `feat` | New feature | Minor |
| `fix` | Bug fix | Patch |
| `docs` | Documentation | Patch |
| `refactor` | Code refactoring | Patch |
| `test` | Test changes | Patch |
| `ci` | CI/CD changes | Patch |
| `perf` | Performance | Patch |

---

# PHẦN X: ĐÁNH GIÁ & KẾT LUẬN

## 10. Đánh giá & Kết luận

### 10.1. Strengths

| Điểm mạnh | Mô tả |
|-----------|-------|
| Comprehensive Agent Ecosystem | 16+ agents với clear responsibilities |
| Rich Command Library | 50+ commands covering entire SDLC |
| Extensible Skills | 30+ skills, easy to create custom ones |
| Cross-Platform | Windows, macOS, Linux support |
| Performance Hooks | Scout-block improves response time |
| Auto Documentation | Docs stay in sync with code |
| Professional Git | Conventional commits, clean history |
| Open Source | Customizable, community-driven |

### 10.2. Limitations

| Hạn chế | Mô tả |
|---------|-------|
| Learning Curve | Many concepts (agents, commands, skills, MCP) |
| Token Cost | Multi-agent workflows consume more tokens |
| Claude Dependency | Primary AI platform is Claude |
| File I/O Overhead | File-based communication has latency |
| Context Window | Large projects may hit token limits |

### 10.3. Comparison with Alternatives

| Feature | ClaudeKit | Cursor | GitHub Copilot |
|---------|-----------|--------|----------------|
| Multi-agent | ✅ | ❌ | ❌ |
| CLI-based | ✅ | IDE | IDE |
| Customizable | High | Medium | Low |
| Open Source | ✅ | ❌ | ❌ |
| Skills System | ✅ | ❌ | ❌ |
| Auto Docs | ✅ | ❌ | ❌ |

### 10.4. Future Directions

#### Phase 2 (Current)
- Additional skills (GCP, AWS, Azure)
- UI/UX improvements
- Performance optimization

#### Phase 3 (Planned)
- Visual workflow builder
- Custom agent creator UI
- Team collaboration features
- Analytics dashboard

#### Phase 4 (Future)
- Self-hosted deployment
- Advanced security
- Enterprise support

### 10.5. Unresolved Questions

1. **Multi-user Scenarios**: How to handle concurrent agent usage?
2. **Agent Persistence**: Should agents maintain state beyond file system?
3. **Distributed Execution**: Architecture for agents across multiple machines?
4. **Performance Metrics**: What are acceptable latency thresholds?
5. **Cost Optimization**: Strategies to reduce token consumption?

---

## ClaudeKit Ecosystem

### Related Projects

| Project | Description | Link |
|---------|-------------|------|
| **claudekit** | ClaudeKit website | claudekit.cc |
| **claudekit-cli** | CLI tool for setup | github.com/mrgoonie/claudekit-cli |
| **claudekit-docs** | Public documentation | docs.claudekit.cc |
| **claudekit-marketing** | Marketing assets | - |

---

## References

### Official Documentation
- [Claude Code Documentation](https://docs.anthropic.com/en/docs/agents-and-tools/claude-code/overview)
- [Claude Code Best Practices](https://www.anthropic.com/engineering/claude-code-best-practices)
- [Agent Skills Introduction](https://www.anthropic.com/engineering/equipping-agents-for-the-real-world-with-agent-skills)
- [Model Context Protocol](https://docs.anthropic.com/en/docs/agents-and-tools/mcp)

### ClaudeKit Resources
- [ClaudeKit Website](https://claudekit.cc/)
- [ClaudeKit Docs](https://docs.claudekit.cc)
- [GitHub Repository](https://github.com/claudekit/claudekit-engineer)

### Related Projects
- [Anthropic Skills Repository](https://github.com/anthropics/skills)
- [OpenCode CLI](https://opencode.ai/)
- [Repomix](https://github.com/yamadashy/repomix)

---

## Đánh Giá Chất Lượng Prompts

### Bản chất của repo

Repo này **95% là Markdown prompts**, 5% config/hooks. Không có code thực sự - chỉ là **prompt engineering framework** để hướng dẫn AI coding agents làm việc đúng cách.

| Thư mục | Bản chất |
|---------|----------|
| `agents/*.md` | Role prompts ("You are an expert...") |
| `commands/*.md` | Task prompts ("Delegate to planner...") |
| `skills/*.md` | Knowledge prompts (domain expertise) |
| `workflows/*.md` | Process prompts (quy trình làm việc) |

### Kỹ thuật prompt engineering được sử dụng

| Kỹ thuật | Ví dụ |
|----------|-------|
| **Few-shot examples trong description** | Planner agent có 3 examples với context + commentary |
| **Mental models cụ thể** | "5 Whys", "80/20 Rule", "Second-Order Thinking" |
| **Red flags pattern** | Debugging skill liệt kê các dấu hiệu cần dừng lại |
| **Dispatch tables** | Problem-solving có bảng "symptom → technique" |
| **Layered references** | SKILL.md ngắn, chi tiết trong `references/` |
| **Counter-rationalization** | Bảng "Excuse vs Reality" |
| **Meta-prompts** | Dạy AI nhận biết khi chính nó đang sai |

### Điểm mạnh

- Prompts được viết bởi người có **kinh nghiệm thực tế** với AI coding
- Có **negative patterns** (Red Flags) - dạy AI nhận biết khi mình sai
- **Evidence-based** - có số liệu impact thực tế
- **Human feedback signals** - dạy AI đọc frustration của user

### Điểm yếu

- Một số prompts dài, có nội dung overlap
- Thiếu negative examples ("đừng làm thế này")
- Chưa có versioning rõ ràng cho từng prompt

### Đánh giá tổng thể: **8/10**

---

## Prompt Xuất Sắc Nhất: Debugging Skill

**Path:** `.claude/skills/debugging/`

```
debugging/
├── SKILL.md                    # Main prompt
├── references/
│   ├── systematic-debugging.md # 4-phase framework
│   ├── root-cause-tracing.md   # Backward tracing
│   ├── defense-in-depth.md     # Multi-layer validation
│   └── verification.md         # Iron law verification
└── scripts/
    └── find-polluter.test.md   # Test pollution bisect
```

### Tại sao xuất sắc:

**1. Meta-prompt - Dạy AI tự nhận biết khi mình sai:**
```
Red Flags - STOP if thinking:
- "Quick fix for now, investigate later"
- "Just try changing X and see if it works"
- "Should work now" / "Seems fixed"

ALL mean: STOP. Return to Phase 1.
```

**2. Human Partner Signals - Feedback loop từ user:**
```
Signals You're Doing It Wrong:
- "Is that not happening?" → Assumed without verifying
- "Stop guessing" → Proposing fixes without understanding
- "We're stuck?" (frustrated) → Approach isn't working
```

**3. Iron Law Verification:**
```
NO COMPLETION CLAIMS WITHOUT FRESH VERIFICATION EVIDENCE

| Claim | Requires | Not Sufficient |
|-------|----------|----------------|
| Tests pass | Output: 0 failures | "should pass" |
| Bug fixed | Test symptom: passes | "Code changed" |
```

**4. Counter-rationalization table:**
```
| Excuse | Reality |
|--------|---------|
| "Issue is simple" | Simple issues have root causes too |
| "Emergency, no time" | Systematic is FASTER |
| "One more fix attempt" | 3+ failures = architectural problem |
```

**5. Real-world impact numbers:**
```
- Systematic: 15-30 minutes to fix
- Random fixes: 2-3 hours of thrashing
- First-time fix rate: 95% vs 40%
```

### Kết luận về Debugging Skill

Prompt này **không chỉ dạy AI làm gì**, mà dạy AI:
- Nhận biết khi mình đang sai approach
- Đọc signals frustration từ user
- Tự kiểm soát impulse "quick fix"
- Không được tự tin mù quáng

**Đây là prompt engineering ở level cao** - tác giả hiểu rõ failure modes của AI và thiết kế prompt để counter chúng.

---

## 5 Điểm Ấn Tượng Nhất

### 1. 🎯 Progressive Disclosure - Context Engineering Xuất Sắc

Nguyên tắc thiết kế skills với 3-level loading system là một giải pháp **brilliant** cho vấn đề token efficiency. Thay vì load toàn bộ documentation, Claude chỉ load metadata (100 words) → SKILL.md (<5k words) → references (as needed). Điều này cho phép framework scale với 30+ skills mà không overwhelm context window.

### 2. 🤖 Multi-Agent Orchestration - File-Based Communication

Việc agents giao tiếp qua markdown files trong `plans/<plan-name>/reports/` là một thiết kế **elegant và practical**:
- Human-readable, version-controllable
- Auditable (có thể review lại decision history)
- Không cần complex infrastructure
- Fresh context prevents conversation degradation

### 3. ⚡ Scout-External Agent - Meta-Agent Pattern

`scout-external` agent KHÔNG tự search, mà orchestrate OTHER agentic tools (Gemini, OpenCode) để search parallel. Đây là một **meta-agent pattern** cho phép leverage multiple AI providers cùng lúc, tối đa hóa coverage và speed.

### 4. 🎨 Aesthetic Skill - 4-Stage Design Framework

Framework BEAUTIFUL → RIGHT → SATISFYING → PEAK là một cách tiếp cận **systematic** cho design:
- Beautiful: Aesthetic standards từ humans, không AI
- Right: Functionality & accessibility
- Satisfying: Micro-interactions với timing chính xác
- Peak: Storytelling qua design

Điều này giải quyết vấn đề "AI lacks aesthetic sense" bằng cách structured analysis.

### 5. 🔧 Hooks System - Non-Blocking Performance Optimization

Hệ thống hooks với PreToolUse (scout-block) và PostToolUse (modularization) là **non-blocking** nhưng highly effective:
- Scout-block ngăn AI access node_modules, .git (improve performance)
- Modularization hook gợi ý refactor khi file > 200 LOC
- Tất cả exit 0 → không block workflow

---

## Tóm Tắt Tổng Quan

### ClaudeKit Engineer là gì?

ClaudeKit Engineer là một **boilerplate framework** toàn diện biến Claude Code thành một **AI development team** với 16+ specialized agents, 50+ slash commands, và 30+ skill modules. Framework này implement các architectural patterns (Microservices-inspired Agent Architecture, Command Pattern, Observer Pattern) để enable multi-agent collaboration thông qua file-based communication protocol.

### Core Value Proposition

| Aspect | Value |
|--------|-------|
| **Development Speed** | 10x acceleration thông qua delegation |
| **Code Quality** | Automated review, testing, documentation |
| **Scalability** | Progressive Disclosure cho token efficiency |
| **Flexibility** | Dual CLI support (Claude Code + OpenCode) |
| **Extensibility** | Easy to add custom agents, commands, skills |

### Key Innovations

1. **Progressive Disclosure Principle**: 3-level loading system cho skills
2. **File-Based Agent Communication**: Simple, auditable, version-controllable
3. **Meta-Agent Pattern**: Agents orchestrate other agents/tools
4. **4-Stage Design Framework**: Systematic approach to aesthetic design
5. **Non-Blocking Hooks**: Performance optimization without workflow disruption

### Practical Impact

Framework này enable developers to:
- Delegate planning, testing, review, documentation cho AI
- Maintain consistent code quality và documentation
- Scale development without proportionally increasing manual effort
- Leverage multiple AI providers (Claude, Gemini, Grok) simultaneously

### Who Should Use This?

- **Solo developers** muốn productivity của một team
- **Small teams** cần consistent workflows và quality
- **Open source maintainers** cần automated documentation
- **Startups** cần ship fast với quality code

---

**Last Updated**: 2025-12-02  
**Version**: 2.0.0  
**Research Status**: Complete & Comprehensive  
**Total Content**: Architecture, 16+ Agents, 50+ Commands, 30+ Skills, Workflows, MCP, Hooks, OpenCode CLI  
**Next Review**: Upon significant repo updates or new ClaudeKit version
