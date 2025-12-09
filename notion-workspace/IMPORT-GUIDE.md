# 📥 Hướng dẫn Import vào Notion

## Cách 1: Import từng file (Đơn giản nhất)

### Bước 1: Tạo Workspace mới trong Notion
1. Mở Notion
2. Tạo một page mới tên "The Rike HQ"

### Bước 2: Import từng file
1. Trong page "The Rike HQ", click **"..."** → **"Import"**
2. Chọn **"Markdown"**
3. Upload file **00-HOME.md** trước
4. Lặp lại cho các file khác

### Bước 3: Tổ chức cấu trúc
Sắp xếp theo cấu trúc:
```
📁 The Rike HQ
├── 🏠 Home (00-HOME.md)
├── 📊 Dashboard (01-DASHBOARD.md)
├── 👥 Clients (02-CLIENTS-DATABASE.md)
├── 💰 Pipeline (03-PIPELINE-DATABASE.md)
├── ✅ Tasks (04-TASKS-DATABASE.md)
├── 📚 SOPs/
│   ├── README.md
│   ├── client-onboarding.md
│   └── discovery-call-script.md
└── 📁 Templates/
    ├── README.md
    ├── proposal-template.md
    └── monthly-report-template.md
```

---

## Cách 2: Tạo Database thật trong Notion

### Clients Database
1. Tạo **Full-page database** mới
2. Thêm các properties:

| Property Name | Type |
|--------------|------|
| Client Name | Title |
| Status | Select: 🟢 Active, 🟡 Paused, 🔴 Churned |
| Industry | Select: MedSpa, Dental, Coach, Realtor, eCom, Home Services, Other |
| Services | Multi-select: Automation, SEO, Content |
| Monthly Value | Number (USD) |
| Health Score | Number |
| Start Date | Date |
| Contract End | Date |
| Account Lead | Person |
| Location | Text |

### Pipeline Database
1. Tạo **Full-page database** mới
2. Thêm các properties:

| Property Name | Type |
|--------------|------|
| Deal Name | Title |
| Stage | Select: 🔵 Lead, 🟡 Qualified, 🟠 Discovery, 🔴 Proposal, 🟣 Negotiation, 🟢 Won, ⚫ Lost |
| Value | Number (USD) |
| Contact | Text |
| Email | Email |
| Company | Text |
| Industry | Select |
| Source | Select: Website, LinkedIn, Referral, Cold Outreach, Other |
| Next Action | Text |
| Next Action Date | Date |
| Owner | Person |
| Close Date | Date |
| Lost Reason | Select |

### Tasks Database
1. Tạo **Full-page database** mới
2. Thêm các properties:

| Property Name | Type |
|--------------|------|
| Task Name | Title |
| Status | Select: 📥 Backlog, 📋 To Do, 🔄 In Progress, 👀 Review, ✅ Done |
| Priority | Select: 🔴 High, 🟡 Medium, 🟢 Low |
| Client | Relation → Clients DB |
| Assignee | Person |
| Due Date | Date |
| Service Type | Select: Automation, SEO, Content, Internal, Sales |

---

## Cách 3: Duplicate Template có sẵn

Nếu muốn nhanh hơn, bạn có thể:

1. Tìm Notion template tương tự (CRM, Agency Management)
2. Duplicate về workspace của bạn
3. Customize theo nội dung trong các file .md

---

## 📁 Danh sách files cần import

| File | Mục đích |
|------|----------|
| `00-HOME.md` | Trang chủ, quick links |
| `01-DASHBOARD.md` | KPI dashboard tuần |
| `02-CLIENTS-DATABASE.md` | Quản lý clients |
| `03-PIPELINE-DATABASE.md` | Sales pipeline |
| `04-TASKS-DATABASE.md` | Task management |
| `05-SOPs/README.md` | Index SOPs |
| `05-SOPs/client-onboarding.md` | SOP onboarding |
| `05-SOPs/discovery-call-script.md` | Script discovery call |
| `06-TEMPLATES/README.md` | Index templates |
| `06-TEMPLATES/proposal-template.md` | Template proposal |
| `06-TEMPLATES/monthly-report-template.md` | Template báo cáo |

---

## ✅ Checklist sau khi Import

- [ ] Tất cả pages đã import thành công
- [ ] Database properties đã setup đúng
- [ ] Relations giữa databases đã connect
- [ ] Team members đã được invite
- [ ] Views đã tạo (Kanban, Calendar, etc.)
- [ ] Test tạo 1 client mẫu
- [ ] Test tạo 1 deal mẫu
- [ ] Test tạo 1 task mẫu

---

## 🔗 Useful Notion Resources

- [Notion Database Guide](https://www.notion.so/help/intro-to-databases)
- [Notion Templates Gallery](https://www.notion.so/templates)
- [Notion Import Guide](https://www.notion.so/help/import-data-into-notion)
