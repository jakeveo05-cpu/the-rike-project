# 🔧 n8n Setup Guide - The Rike

## Overview

Hướng dẫn cài đặt và cấu hình n8n workflows cho The Rike Agency.

---

## 1. Cài đặt n8n

### Option A: Self-hosted (Recommended - Free)

```bash
# Dùng Docker
docker run -it --rm \
  --name n8n \
  -p 5678:5678 \
  -v ~/.n8n:/home/node/.n8n \
  n8nio/n8n

# Hoặc dùng npm
npm install n8n -g
n8n start
```

Truy cập: http://localhost:5678

### Option B: n8n Cloud (Paid)

1. Đăng ký tại https://n8n.io
2. Tạo instance mới
3. Bắt đầu dùng ngay

---

## 2. Cấu hình Environment Variables

Tạo file `.env` hoặc set trong n8n Settings:

```bash
# CRM (GoHighLevel / HubSpot)
CRM_API_URL=https://api.gohighlevel.com/v1
CRM_API_KEY=your_api_key_here

# Email (SMTP)
FROM_EMAIL=hello@therike.com
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your_email
SMTP_PASS=your_app_password

# Slack
SLACK_BOT_TOKEN=xoxb-your-token

# Google Sheets
GOOGLE_SHEET_ID=your_sheet_id

# ClickUp
CLICKUP_API_URL=https://api.clickup.com/api/v2
CLICKUP_API_KEY=your_api_key
CLICKUP_LIST_ID=your_list_id
CLICKUP_CLIENTS_LIST=your_clients_list_id

# Calendly
CALENDLY_URL=https://calendly.com/therike/discovery

# Onboarding
ONBOARDING_FORM_URL=https://forms.google.com/your-form
```

---

## 3. Kết nối Credentials

### 3.1 Slack

1. Vào https://api.slack.com/apps
2. Create New App → From scratch
3. OAuth & Permissions → Add scopes:
   - `chat:write`
   - `channels:read`
4. Install to Workspace
5. Copy Bot Token → Paste vào n8n

### 3.2 Google Sheets

1. Vào n8n → Credentials → Google Sheets
2. Chọn OAuth2
3. Connect → Authorize với Google account
4. Tạo Sheet với các tabs: `Leads`, `Clients`, `Pipeline`

### 3.3 Email (SMTP)

1. Nếu dùng Gmail: Tạo App Password
2. Vào n8n → Credentials → SMTP
3. Điền host, port, user, password

### 3.4 ClickUp

1. Vào ClickUp → Settings → Apps → API Token
2. Copy token → Paste vào n8n
3. Lấy List ID từ URL của list

---

## 4. Import Workflows

### Cách import:

1. Mở n8n
2. Click **"..."** → **Import from File**
3. Chọn file JSON từ thư mục `n8n-workflows/`
4. Workflow sẽ được tạo (inactive)
5. Cấu hình credentials cho từng node
6. **Activate** workflow

### Thứ tự import:

1. `01-lead-capture.json` - Lead từ website
2. `02-calendly-booked.json` - Discovery call booked
3. `03-client-onboarding.json` - Client mới
4. `04-weekly-report.json` - Báo cáo tuần
5. `05-follow-up-reminder.json` - Nhắc follow-up

---

## 5. Cấu hình Webhooks

### 5.1 Lead Capture Webhook

Sau khi import workflow #1:

1. Click vào node "Webhook - Lead Form"
2. Copy **Production URL**
3. Dán vào website form action:

```html
<form action="YOUR_WEBHOOK_URL" method="POST">
  <input name="name" required>
  <input name="email" type="email" required>
  <input name="phone">
  <input name="company">
  <select name="industry">
    <option>MedSpa</option>
    <option>Dental</option>
    <option>Coach</option>
    <option>Realtor</option>
    <option>eCom</option>
    <option>Other</option>
  </select>
  <textarea name="message"></textarea>
  <button type="submit">Submit</button>
</form>
```

### 5.2 Calendly Webhook

1. Vào Calendly → Integrations → Webhooks
2. Add Webhook
3. Paste URL từ workflow #2
4. Events: `invitee.created`

---

## 6. Google Sheets Structure

### Tab: Leads

| Column | Type |
|--------|------|
| Date | Date |
| Name | Text |
| Email | Email |
| Phone | Text |
| Company | Text |
| Industry | Text |
| Message | Text |
| Source | Text |
| Status | Select |

### Tab: Clients

| Column | Type |
|--------|------|
| Start Date | Date |
| Client Name | Text |
| Email | Email |
| Package | Text |
| Services | Text |
| Monthly Value | Number |
| Status | Select |
| Health Score | Number |

### Tab: Pipeline

| Column | Type |
|--------|------|
| Deal Name | Text |
| Contact | Text |
| Email | Email |
| Company | Text |
| Value | Number |
| Stage | Select |
| Proposal Sent Date | Date |
| ID | Text |

---

## 7. Testing

### Test Lead Capture:

```bash
curl -X POST YOUR_WEBHOOK_URL \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "phone": "123456789",
    "company": "Test Co",
    "industry": "Coach",
    "message": "I need help with automation"
  }'
```

### Test Client Onboarding:

```bash
curl -X POST YOUR_ONBOARDING_WEBHOOK \
  -H "Content-Type: application/json" \
  -d '{
    "client_name": "New Client",
    "client_email": "client@example.com",
    "package": "Growth",
    "services": "Automation, SEO",
    "monthly_value": 700
  }'
```

---

## 8. Troubleshooting

### Workflow không chạy?
- Kiểm tra workflow đã **Activate** chưa
- Kiểm tra credentials đã kết nối chưa
- Xem Execution Log để debug

### Webhook không nhận data?
- Kiểm tra URL đúng (Production URL, không phải Test URL)
- Kiểm tra method (POST)
- Kiểm tra Content-Type header

### Slack không gửi?
- Kiểm tra Bot đã được invite vào channel chưa
- Kiểm tra channel name đúng (có # phía trước)

---

## 9. Workflows Summary

| # | Workflow | Trigger | Actions |
|---|----------|---------|---------|
| 01 | Lead Capture | Website form | CRM + Slack + Email + Sheet |
| 02 | Calendly Booked | Calendly webhook | CRM + Slack + Email + ClickUp |
| 03 | Client Onboarding | Manual/Payment | Slack + Email + ClickUp + Sheet |
| 04 | Weekly Report | Monday 9am | Sheet → Slack |
| 05 | Follow-up Reminder | Daily 9am | Sheet → Slack |

---

## 10. Next Steps

1. ✅ Import tất cả workflows
2. ✅ Cấu hình credentials
3. ✅ Test từng workflow
4. ✅ Activate workflows
5. ⏳ Kết nối với website form
6. ⏳ Setup Calendly webhook
7. ⏳ Monitor executions
