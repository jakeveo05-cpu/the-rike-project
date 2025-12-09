# TEAM OPERATIONS & SOP - THE RIKE

## Overview
Quy trình vận hành chuẩn cho team 3 người: Strategist, Architect, Creator.

---

## 1. TEAM STRUCTURE

```
┌─────────────────────────────────────────────────────────────┐
│                     THE RIKE TEAM                            │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│    ┌─────────────┐                                          │
│    │ STRATEGIST  │ ← CEO/Leader - "Bộ Não"                  │
│    │   (Rosie)   │                                          │
│    └──────┬──────┘                                          │
│           │                                                  │
│     ┌─────┴─────┐                                           │
│     │           │                                           │
│ ┌───┴───┐   ┌───┴───┐                                       │
│ │ARCHITECT│   │CREATOR │                                     │
│ │  Tech   │   │Content │                                     │
│ └─────────┘   └────────┘                                     │
│ "Khung Xương"  "Trái Tim"                                    │
└─────────────────────────────────────────────────────────────┘
```

---

## 2. ROLE RESPONSIBILITIES

### STRATEGIST (CEO/Leader)

**Primary Focus**: Sales, Client Relations, Strategy

| Responsibility | Tasks | Tools |
|---------------|-------|-------|
| **Sales** | Lead qualification, Discovery calls, Proposals, Closing | Calendly, Loom |
| **Client Management** | Onboarding, Check-ins, Renewals, Escalations | Notion, Slack |
| **Strategy** | Service positioning, Pricing, Market research | Perplexity, ChatGPT |
| **Team Leadership** | Weekly planning, Task assignment, Performance review | ClickUp |
| **Reporting** | Monthly client reports, Business metrics | Google Sheets |

**KPIs**:
- Leads converted: X/month
- Client retention: >90%
- MRR growth: +X%/month

---

### ARCHITECT (Tech/Ops)

**Primary Focus**: Automation, Tools, Data

| Responsibility | Tasks | Tools |
|---------------|-------|-------|
| **Automation Setup** | CRM config, Workflow design, Integration | GoHighLevel, n8n, Make |
| **Technical Delivery** | Automation builds, API connections, Testing | Zapier, Webhooks |
| **Data & Analytics** | Tracking setup, Dashboard creation, Reporting | GA4, Looker Studio |
| **Tool Management** | Tech stack maintenance, Troubleshooting | All tools |
| **Documentation** | Technical SOPs, Client handoff docs | Notion |

**KPIs**:
- Setup completion: <7 days
- Automation uptime: >99%
- Technical issues resolved: <24h

---

### CREATOR (Content)

**Primary Focus**: Content Production, Creative

| Responsibility | Tasks | Tools |
|---------------|-------|-------|
| **Content Strategy** | Content calendars, Topic research | Perplexity, Ahrefs |
| **Scriptwriting** | AI scripts, Hooks, CTAs | Claude, ChatGPT |
| **Video Production** | Editing, Captions, Thumbnails | CapCut, Canva |
| **SEO Content** | Blog posts, GEO optimization | Vibecode, Surfer |
| **Quality Control** | Review, Humanize AI content | Grammarly |

**KPIs**:
- Videos delivered: X/week
- Content on-time: >95%
- Revision rate: <20%

---

## 3. WEEKLY WORKFLOW

### Monday: Planning & Reporting

| Time | Activity | Owner | Output |
|------|----------|-------|--------|
| 9:00 | Review last week's KPIs | Strategist | Status update |
| 10:00 | Client reports sent | All | Reports delivered |
| 11:00 | Team sync meeting (30 min) | All | Week priorities set |
| PM | Client check-in calls | Strategist | Meeting notes |

### Tuesday: Content Batching

| Time | Activity | Owner | Output |
|------|----------|-------|--------|
| AM | Content planning for all clients | Creator | Content calendar |
| PM | AI script generation (batch) | Creator | Scripts draft |
| PM | Script review & humanize | Creator | Final scripts |

### Wednesday: Automation & Tech

| Time | Activity | Owner | Output |
|------|----------|-------|--------|
| AM | New client setups | Architect | Systems configured |
| PM | Automation optimization | Architect | Improvements deployed |
| PM | Technical support | Architect | Issues resolved |

### Thursday: Deep Work / Projects

| Time | Activity | Owner | Output |
|------|----------|-------|--------|
| All day | Focus on major deliverables | All | Projects advanced |
| - | New proposals | Strategist | Proposals sent |
| - | Complex automations | Architect | Builds completed |
| - | Video editing | Creator | Videos delivered |

### Friday: Review & Seeding

| Time | Activity | Owner | Output |
|------|----------|-------|--------|
| AM | QA all deliverables | All | Quality checked |
| AM | Content scheduling | Creator | Content queued |
| PM | Week review | All | Lessons documented |
| PM | Plan next week priorities | Strategist | Next week ready |

---

## 4. COMMUNICATION PROTOCOLS

### Internal Communication

| Channel | Use For | Response Time |
|---------|---------|---------------|
| **Slack #general** | Announcements, updates | Check 3x/day |
| **Slack #clients** | Client-specific discussions | <4 hours |
| **Slack #urgent** | Critical issues only | <1 hour |
| **ClickUp comments** | Task-specific updates | <24 hours |
| **Weekly sync** | Planning, blockers, wins | Monday 11am |

### Client Communication

| Channel | Use For | Response Time |
|---------|---------|---------------|
| **Email** | Formal communication, reports | <24 hours |
| **Slack (if setup)** | Quick questions | <4 hours |
| **Scheduled calls** | Reviews, strategy | As scheduled |
| **Loom** | Async updates, demos | As needed |

### Rules:
- ❌ Không giao việc qua chat - phải tạo task trong ClickUp
- ❌ Không discuss client issues ở public channels
- ✅ Tag người cụ thể khi cần action
- ✅ Update task status ngay khi có progress

---

## 5. TASK MANAGEMENT

### Task Lifecycle

```
┌─────────┐   ┌─────────┐   ┌──────────┐   ┌────────┐   ┌──────┐
│ BACKLOG │ → │ TO DO   │ → │ IN PROG  │ → │ REVIEW │ → │ DONE │
└─────────┘   └─────────┘   └──────────┘   └────────┘   └──────┘
```

### Task Template

```markdown
**Task Name**: [Clear, action-oriented title]
**Client**: [Client name or Internal]
**Assignee**: [Person responsible]
**Due Date**: [Specific date]
**Priority**: 🔴 High / 🟡 Medium / 🟢 Low
**Estimated Time**: [X hours]

**Description**:
[What needs to be done]

**Acceptance Criteria**:
- [ ] Criterion 1
- [ ] Criterion 2

**Dependencies**:
- [What's needed before starting]

**Resources**:
- [Links, files, references]
```

### Priority Rules:
- 🔴 **High**: Client deadline, revenue impact, blocking others
- 🟡 **Medium**: Important but flexible timeline
- 🟢 **Low**: Nice to have, internal improvements

---

## 6. SERVICE DELIVERY SOPs

### SOP 1: Client Onboarding

```
Day 0: Contract signed
├── Strategist sends welcome email
├── Strategist sends onboarding form
└── Architect creates client workspace

Day 1-2: Kickoff
├── Strategist conducts kickoff call
├── Collect all access credentials
└── Document goals & KPIs

Day 3-5: Setup
├── Architect sets up CRM/automations
├── Creator plans content strategy
└── Initial audit completed

Day 6-7: Launch
├── First deliverables ready
├── QA completed
└── Client walkthrough call

Day 14: Check-in
├── First results review
├── Adjustments if needed
└── Ongoing schedule confirmed
```

### SOP 2: Automation Setup

```
1. Discovery
   ├── Understand current tools
   ├── Map existing workflows
   └── Identify automation opportunities

2. Design
   ├── Create workflow diagram
   ├── Get client approval
   └── Document technical requirements

3. Build
   ├── Set up CRM/tool
   ├── Create automations
   ├── Configure integrations
   └── Set up tracking

4. Test
   ├── Run test scenarios
   ├── Fix bugs
   └── Document edge cases

5. Launch
   ├── Go live
   ├── Monitor for 48 hours
   └── Client training call

6. Handoff
   ├── Documentation complete
   ├── Client can access everything
   └── Support channel established
```

### SOP 3: Content Delivery

```
1. Planning (Monday)
   ├── Review client content calendar
   ├── Research trending topics
   └── Outline content for the week

2. Creation (Tuesday-Wednesday)
   ├── Generate AI drafts
   ├── Humanize and edit
   ├── Create visuals
   └── Internal review

3. Approval (Thursday)
   ├── Send to client for review
   ├── Collect feedback
   └── Make revisions

4. Scheduling (Friday)
   ├── Schedule posts
   ├── Set up tracking
   └── Confirm with client

5. Reporting (Following Monday)
   ├── Pull performance data
   ├── Analyze results
   └── Recommend optimizations
```

---

## 7. QUALITY ASSURANCE

### QA Checklist - Automation

- [ ] All workflows trigger correctly
- [ ] Data flows to correct destinations
- [ ] Error handling in place
- [ ] Notifications working
- [ ] Client can access dashboards
- [ ] Documentation complete

### QA Checklist - Content

- [ ] Spelling/grammar checked
- [ ] Brand voice consistent
- [ ] CTAs included
- [ ] Links working
- [ ] Images optimized
- [ ] SEO elements in place
- [ ] Platform requirements met

### QA Checklist - Client Deliverable

- [ ] Meets acceptance criteria
- [ ] Professionally formatted
- [ ] Client name/branding correct
- [ ] Reviewed by second person
- [ ] Delivered on time

---

## 8. ESCALATION PROCESS

### Level 1: Team Member
- Try to resolve within 4 hours
- Check documentation/past solutions
- Ask in team Slack

### Level 2: Team Lead
- Escalate if: blocked >4 hours, client complaint, technical issue
- Tag Strategist in Slack #urgent
- Provide context and attempted solutions

### Level 3: Emergency
- Escalate if: System down, major client issue, security concern
- Call/text directly
- Document everything

---

## 9. MEETINGS

### Weekly Team Sync
- **When**: Monday 11:00 AM
- **Duration**: 30 minutes
- **Attendees**: All team
- **Agenda**:
  1. Wins from last week (5 min)
  2. KPI review (5 min)
  3. Blockers (10 min)
  4. This week's priorities (10 min)

### Client Calls
- **Kickoff**: 45-60 min
- **Monthly review**: 30 min
- **Check-in**: 15-20 min

### Ad-hoc Syncs
- Use Slack huddle for quick discussions
- Record decisions in task comments
- Don't schedule meetings for <15 min items

---

## 10. DOCUMENTATION STANDARDS

### Where to Document

| Type | Location |
|------|----------|
| Client info | Client card in Notion/ClickUp |
| Technical docs | /docs folder in client workspace |
| SOPs | /operations in main workspace |
| Meeting notes | Client card > Notes section |
| Templates | /templates folder |

### Naming Convention
- Files: `[ClientCode]_[Type]_[Date]` (e.g., `THE001_Report_2024-01`)
- Tasks: `[Action verb] [Object]` (e.g., "Setup CRM for Client X")
- Folders: `PascalCase` (e.g., `ClientDocuments`)

---

## 11. TOOLS QUICK REFERENCE

| Purpose | Primary Tool | Backup |
|---------|--------------|--------|
| Task Management | ClickUp | Notion |
| Communication | Slack | Email |
| CRM | GoHighLevel | HubSpot |
| Automation | n8n | Make/Zapier |
| Content AI | Claude/ChatGPT | Perplexity |
| Video Editing | CapCut | Premiere |
| Design | Canva | Figma |
| Analytics | GA4 | Looker Studio |
| Scheduling | Calendly | Cal.com |
| Docs | Notion | Google Docs |
