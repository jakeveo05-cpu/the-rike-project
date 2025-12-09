# CLIENT MANAGEMENT SYSTEM - THE RIKE

## Overview
Hệ thống quản lý khách hàng cho Micro Agency 3 người.

---

## 1. CLIENT DATABASE

### Fields cho mỗi Client:

| Field | Type | Mô tả |
|-------|------|-------|
| **Client ID** | Auto | THE-001, THE-002... |
| **Company Name** | Text | Tên công ty |
| **Contact Name** | Text | Người liên hệ chính |
| **Email** | Email | Email liên hệ |
| **Phone** | Phone | Số điện thoại |
| **Industry** | Select | Local Business / Coach / eCom / Other |
| **Location** | Text | City, State (US) |
| **Status** | Select | Lead / Proposal / Active / Paused / Churned |
| **Service Package** | Multi-select | Automation / SEO / Content |
| **Monthly Value** | Currency | Giá trị hợp đồng/tháng |
| **Start Date** | Date | Ngày bắt đầu |
| **Contract End** | Date | Ngày hết hạn |
| **Assigned To** | Person | Strategist / Architect / Creator |
| **Notes** | Long text | Ghi chú |

---

## 2. CLIENT PIPELINE

### Stages:

```
┌─────────┐   ┌──────────┐   ┌──────────┐   ┌────────┐   ┌────────┐   ┌─────────┐
│  LEAD   │ → │ DISCOVERY│ → │ PROPOSAL │ → │CONTRACT│ → │ ACTIVE │ → │ RENEWAL │
└─────────┘   └──────────┘   └──────────┘   └────────┘   └────────┘   └─────────┘
```

### Stage Definitions:

| Stage | Criteria | Action Required | Owner |
|-------|----------|-----------------|-------|
| **Lead** | Mới liên hệ, chưa qualify | Gửi email intro, book discovery call | Strategist |
| **Discovery** | Đã book call, đang tìm hiểu nhu cầu | Chạy Discovery Call, ghi notes | Strategist |
| **Proposal** | Đã gửi proposal, chờ phản hồi | Follow up 2-4-7 ngày | Strategist |
| **Contract** | Đã đồng ý, đang ký hợp đồng | Gửi contract, thu payment | Strategist |
| **Active** | Đang cung cấp dịch vụ | Delivery + Monthly report | All team |
| **Renewal** | Sắp hết hạn (30 ngày trước) | Upsell / Renew conversation | Strategist |

---

## 3. CLIENT CARD TEMPLATE

### Khi tạo client mới, copy template này:

```markdown
# [CLIENT NAME]

## Basic Info
- **Industry**: 
- **Location**: 
- **Website**: 
- **Contact**: 
- **Email**: 
- **Phone**: 

## Service Details
- **Package**: 
- **Monthly Value**: $
- **Start Date**: 
- **Contract Length**: 

## Goals & KPIs
- **Primary Goal**: 
- **Success Metrics**: 
- **Current Baseline**: 

## Access & Credentials
- [ ] CRM access received
- [ ] Website access received
- [ ] Social media access received
- [ ] Analytics access received
- [ ] Ad accounts access received

## Team Assignment
- **Account Lead**: Strategist
- **Tech Lead**: Architect
- **Content Lead**: Creator

## Meeting Notes
### Discovery Call - [DATE]
- Pain points:
- Goals:
- Budget:
- Timeline:
- Decision maker:

## Deliverables Tracker
| Deliverable | Due Date | Status | Owner |
|-------------|----------|--------|-------|
|             |          |        |       |

## Monthly Reports
- [Month Year] - Link to report
```

---

## 4. CLIENT HEALTH SCORE

### Tính điểm sức khỏe client (0-100):

| Factor | Weight | Scoring |
|--------|--------|---------|
| **Payment on time** | 25% | Yes=100, Late=50, Missed=0 |
| **Engagement** | 25% | High=100, Medium=50, Low=0 |
| **Results achieved** | 25% | Exceeding=100, Meeting=75, Below=25 |
| **Communication** | 15% | Responsive=100, Slow=50, Silent=0 |
| **Upsell potential** | 10% | High=100, Medium=50, Low=0 |

### Health Categories:
- 🟢 **Healthy (80-100)**: Nurture, upsell opportunities
- 🟡 **At Risk (50-79)**: Proactive check-in needed
- 🔴 **Critical (<50)**: Immediate intervention required

---

## 5. CLIENT COMMUNICATION LOG

### Template cho mỗi interaction:

```markdown
**Date**: 
**Type**: Email / Call / Meeting / Slack
**Participants**: 
**Summary**: 
**Action Items**:
- [ ] 
**Next Step**: 
**Follow-up Date**: 
```

---

## 6. MONTHLY CLIENT REVIEW

### Checklist hàng tháng cho mỗi client:

- [ ] Review KPIs vs targets
- [ ] Prepare monthly report
- [ ] Schedule review call (nếu cần)
- [ ] Update health score
- [ ] Check contract renewal date
- [ ] Identify upsell opportunities
- [ ] Update client card notes

---

## 7. CLIENT ONBOARDING CHECKLIST

### Week 1:
- [ ] Welcome email sent
- [ ] Kickoff call scheduled
- [ ] Onboarding form received
- [ ] Access credentials collected
- [ ] Team introduced
- [ ] Project created in system
- [ ] First deliverables timeline confirmed

### Week 2:
- [ ] Initial audit completed
- [ ] Strategy document shared
- [ ] First deliverables in progress
- [ ] Check-in call completed

### Week 3-4:
- [ ] First deliverables delivered
- [ ] Feedback collected
- [ ] Adjustments made
- [ ] Monthly report template set up
- [ ] Recurring meetings scheduled

---

## 8. CLIENT OFFBOARDING

### Khi client churn:

- [ ] Exit interview conducted
- [ ] Reason documented
- [ ] Final deliverables sent
- [ ] Access revoked
- [ ] Final invoice sent
- [ ] Testimonial requested (if positive)
- [ ] Lessons learned documented
- [ ] Add to win-back list (90 days)
