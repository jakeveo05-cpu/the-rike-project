# AUTOMATION WORKFLOWS - THE RIKE

## Overview
Các workflow automation cho Agency sử dụng n8n/Make/Zapier.

---

## 1. LEAD CAPTURE WORKFLOW

### Trigger: New lead from website form

```
┌─────────────┐     ┌─────────────┐     ┌─────────────┐     ┌─────────────┐
│  Website    │ ──▶ │   Webhook   │ ──▶ │  Add to CRM │ ──▶ │ Send Slack  │
│   Form      │     │  (n8n/Make) │     │ (GoHighLevel)│     │   Alert     │
└─────────────┘     └─────────────┘     └─────────────┘     └─────────────┘
                                               │
                                               ▼
                                        ┌─────────────┐
                                        │ Send Auto   │
                                        │   Email     │
                                        └─────────────┘
```

### n8n Workflow JSON (Import Ready):

```json
{
  "name": "Lead Capture",
  "nodes": [
    {
      "name": "Webhook",
      "type": "n8n-nodes-base.webhook",
      "parameters": {
        "path": "lead-capture",
        "method": "POST"
      }
    },
    {
      "name": "Add to CRM",
      "type": "n8n-nodes-base.httpRequest",
      "parameters": {
        "url": "YOUR_CRM_API_URL",
        "method": "POST",
        "body": {
          "name": "={{$json.name}}",
          "email": "={{$json.email}}",
          "phone": "={{$json.phone}}",
          "source": "website"
        }
      }
    },
    {
      "name": "Slack Notification",
      "type": "n8n-nodes-base.slack",
      "parameters": {
        "channel": "#leads",
        "message": "🔥 New Lead: {{$json.name}} - {{$json.email}}"
      }
    },
    {
      "name": "Send Welcome Email",
      "type": "n8n-nodes-base.emailSend",
      "parameters": {
        "to": "={{$json.email}}",
        "subject": "Thanks for reaching out!",
        "text": "Hi {{$json.name}}, thanks for contacting The Rike..."
      }
    }
  ]
}
```

---

## 2. DISCOVERY CALL BOOKED

### Trigger: Calendly booking

```
┌─────────────┐     ┌─────────────┐     ┌─────────────┐
│  Calendly   │ ──▶ │ Update CRM  │ ──▶ │ Send Slack  │
│   Booking   │     │   Stage     │     │   Alert     │
└─────────────┘     └─────────────┘     └─────────────┘
       │
       ▼
┌─────────────┐     ┌─────────────┐
│ Send Prep   │ ──▶ │  Create     │
│   Email     │     │ ClickUp Task│
└─────────────┘     └─────────────┘
```

### Actions:
1. Update lead stage to "Discovery Scheduled"
2. Send calendar invite + prep questions to lead
3. Notify Strategist in Slack
4. Create task in ClickUp for call prep
5. Send reminder 1 hour before call

---

## 3. POST-DISCOVERY AUTOMATION

### Trigger: Discovery call completed (manual trigger)

```
┌─────────────┐     ┌─────────────┐     ┌─────────────┐
│  Discovery  │ ──▶ │ Update CRM  │ ──▶ │ Generate    │
│  Completed  │     │  (Notes)    │     │  Proposal   │
└─────────────┘     └─────────────┘     └─────────────┘
                                               │
                                               ▼
                                        ┌─────────────┐
                                        │ Schedule    │
                                        │ Follow-ups  │
                                        └─────────────┘
```

### Actions:
1. Update CRM with call notes
2. Move to "Proposal" stage
3. Generate proposal draft (template + variables)
4. Create follow-up tasks (Day 2, 4, 7, 10)
5. Add to proposal follow-up sequence

---

## 4. CLIENT ONBOARDING WORKFLOW

### Trigger: Contract signed / Payment received

```
┌─────────────┐     ┌─────────────┐     ┌─────────────┐
│  Contract   │ ──▶ │ Create in   │ ──▶ │   Send      │
│   Signed    │     │  ClickUp    │     │ Welcome Kit │
└─────────────┘     └─────────────┘     └─────────────┘
       │
       ▼
┌─────────────┐     ┌─────────────┐     ┌─────────────┐
│ Create      │ ──▶ │  Assign     │ ──▶ │   Notify    │
│ Workspace   │     │    Team     │     │    Team     │
└─────────────┘     └─────────────┘     └─────────────┘
```

### ClickUp Automation Tasks Created:

```
📁 Client: [Name]
├── 📋 Onboarding
│   ├── ☐ Send welcome email
│   ├── ☐ Send onboarding form
│   ├── ☐ Collect credentials
│   ├── ☐ Schedule kickoff call
│   ├── ☐ Create client Slack channel
│   └── ☐ Setup tracking
├── 📋 Week 1 Deliverables
│   ├── ☐ Audit completed
│   ├── ☐ Strategy document
│   └── ☐ Initial setup
└── 📋 Ongoing
    ├── ☐ Weekly check-in
    └── ☐ Monthly report
```

---

## 5. CONTENT PRODUCTION WORKFLOW

### Trigger: Weekly (Monday 9am)

```
┌─────────────┐     ┌─────────────┐     ┌─────────────┐
│  Cron       │ ──▶ │ Get Active  │ ──▶ │  For Each   │
│  Trigger    │     │  Clients    │     │   Client    │
└─────────────┘     └─────────────┘     └─────────────┘
                                               │
       ┌───────────────────────────────────────┘
       ▼
┌─────────────┐     ┌─────────────┐     ┌─────────────┐
│ Create      │ ──▶ │  Assign to  │ ──▶ │   Notify    │
│ Content Task│     │   Creator   │     │   Creator   │
└─────────────┘     └─────────────┘     └─────────────┘
```

### Task Template Auto-Created:

```
Task: Content Week [#] - [Client Name]
Assignee: Creator
Due: Friday
Subtasks:
- [ ] Research topics
- [ ] Write scripts (x5)
- [ ] Create visuals
- [ ] Internal review
- [ ] Client approval
- [ ] Schedule posts
```

---

## 6. REVIEW REQUEST AUTOMATION

### Trigger: Service delivered / Milestone completed

```
┌─────────────┐     ┌─────────────┐     ┌─────────────┐
│  Service    │ ──▶ │   Wait      │ ──▶ │ Send Review │
│  Delivered  │     │  24 hours   │     │   Request   │
└─────────────┘     └─────────────┘     └─────────────┘
                                               │
                                               ▼
                                        ┌─────────────┐
                                        │  If 5-star  │
                                        │ Ask Google  │
                                        │   Review    │
                                        └─────────────┘
```

### Email Template:

```
Subject: Quick favor? 🙏

Hi {{client_name}},

Hope you're seeing great results from [service]!

Would you mind taking 30 seconds to share your experience?

[⭐⭐⭐⭐⭐ Rate Us]

If you're happy with our work, a Google review would mean the world: [Google Review Link]

Thanks so much!

– The Rike Team
```

---

## 7. MONTHLY REPORTING AUTOMATION

### Trigger: 1st of each month

```
┌─────────────┐     ┌─────────────┐     ┌─────────────┐
│   1st of    │ ──▶ │ Pull Client │ ──▶ │  Generate   │
│   Month     │     │    Data     │     │   Report    │
└─────────────┘     └─────────────┘     └─────────────┘
                                               │
                                               ▼
                                        ┌─────────────┐
                                        │ Send to     │
                                        │  Client     │
                                        └─────────────┘
```

### Data Sources to Pull:
- Google Analytics (traffic, conversions)
- CRM (leads, bookings)
- Social media (engagement, followers)
- SEO tool (rankings, visibility)

### Report Auto-Generated Sections:
1. Executive Summary
2. KPI Dashboard
3. Work Completed
4. Results vs Goals
5. Recommendations

---

## 8. TASK OVERDUE ALERTS

### Trigger: Task due date passed

```
┌─────────────┐     ┌─────────────┐     ┌─────────────┐
│   Task      │ ──▶ │   Check     │ ──▶ │   If Not    │
│  Due Date   │     │   Status    │     │  Complete   │
└─────────────┘     └─────────────┘     └─────────────┘
                                               │
                                               ▼
                                        ┌─────────────┐
                                        │ Alert Slack │
                                        │ + Assignee  │
                                        └─────────────┘
```

### Escalation:
- 1 day overdue: Alert assignee
- 2 days overdue: Alert assignee + manager
- 3 days overdue: Alert entire team

---

## 9. CLIENT HEALTH CHECK

### Trigger: Weekly (Friday 5pm)

```
┌─────────────┐     ┌─────────────┐     ┌─────────────┐
│   Weekly    │ ──▶ │  Calculate  │ ──▶ │   Update    │
│   Check     │     │Health Score │     │    CRM      │
└─────────────┘     └─────────────┘     └─────────────┘
                                               │
                           ┌───────────────────┼───────────────────┐
                           ▼                   ▼                   ▼
                    ┌─────────────┐     ┌─────────────┐     ┌─────────────┐
                    │  If <50     │     │  If 50-79   │     │  If 80+     │
                    │   🔴 Alert  │     │   🟡 Watch  │     │   🟢 Good   │
                    └─────────────┘     └─────────────┘     └─────────────┘
```

### Health Score Calculation:
```javascript
health_score = 
  (payment_on_time * 0.25) +
  (engagement_level * 0.25) +
  (results_achieved * 0.25) +
  (communication * 0.15) +
  (upsell_potential * 0.10)
```

---

## 10. RENEWAL REMINDER

### Trigger: 30 days before contract end

```
┌─────────────┐     ┌─────────────┐     ┌─────────────┐
│  30 Days    │ ──▶ │  Create     │ ──▶ │   Notify    │
│   Before    │     │ Renewal Task│     │ Strategist  │
└─────────────┘     └─────────────┘     └─────────────┘
                                               │
                                               ▼
                                        ┌─────────────┐
                                        │ Send Client │
                                        │ Check-in    │
                                        └─────────────┘
```

### Renewal Sequence:
- Day -30: Internal alert + task created
- Day -21: Client check-in call scheduled
- Day -14: Renewal offer sent
- Day -7: Follow-up if no response
- Day -3: Final reminder
- Day 0: Contract status updated

---

## 11. INTEGRATION MAP

```
┌─────────────────────────────────────────────────────────────────┐
│                        THE RIKE TECH STACK                       │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│   ┌─────────┐     ┌─────────┐     ┌─────────┐     ┌─────────┐   │
│   │ Website │     │Calendly │     │  Stripe │     │ Google  │   │
│   │  Form   │     │         │     │         │     │Analytics│   │
│   └────┬────┘     └────┬────┘     └────┬────┘     └────┬────┘   │
│        │               │               │               │         │
│        └───────────────┼───────────────┼───────────────┘         │
│                        │               │                         │
│                        ▼               ▼                         │
│                  ┌───────────────────────┐                       │
│                  │     n8n / Make        │                       │
│                  │  (Automation Hub)     │                       │
│                  └───────────┬───────────┘                       │
│                              │                                   │
│        ┌─────────────────────┼─────────────────────┐             │
│        │                     │                     │             │
│        ▼                     ▼                     ▼             │
│   ┌─────────┐          ┌─────────┐          ┌─────────┐         │
│   │   CRM   │          │ ClickUp │          │  Slack  │         │
│   │(GHL/Hub)│          │ (Tasks) │          │ (Alerts)│         │
│   └─────────┘          └─────────┘          └─────────┘         │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

---

## 12. IMPLEMENTATION CHECKLIST

### Phase 1: Foundation (Week 1)
- [ ] Set up n8n/Make account
- [ ] Connect CRM
- [ ] Connect Slack
- [ ] Connect ClickUp
- [ ] Test webhook endpoints

### Phase 2: Lead Workflows (Week 2)
- [ ] Lead capture workflow
- [ ] Discovery call booking workflow
- [ ] Follow-up sequences

### Phase 3: Client Workflows (Week 3)
- [ ] Onboarding automation
- [ ] Task creation workflows
- [ ] Reminder systems

### Phase 4: Reporting Workflows (Week 4)
- [ ] Monthly report automation
- [ ] Health score calculation
- [ ] Renewal reminders

### Phase 5: Optimization (Ongoing)
- [ ] Monitor workflow errors
- [ ] Optimize based on data
- [ ] Add new automations as needed
