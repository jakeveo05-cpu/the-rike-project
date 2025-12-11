# 📸 Hướng dẫn Capture Data cho Self-Case Study

## Mục tiêu
Thu thập screenshots và data để chứng minh The Rike có thể optimize cho AI Overview.

---

## 1. CAPTURE AI OVERVIEW SCREENSHOTS

### Bước 1: Tìm queries mà The Rike xuất hiện

Mở Google (US) và search các queries liên quan:

```
Queries để test:
- "AI SEO for ecommerce"
- "Google AI Overview optimization"
- "how to get featured in AI Overview"
- "AI Overview stealing traffic"
- [Các queries bạn đã optimize]
```

### Bước 2: Screenshot khi xuất hiện trong AI Overview

**Nếu có AI Overview:**
1. Screenshot TOÀN BỘ AI Overview box
2. Highlight/circle phần cite The Rike
3. Save as: `ai-overview-query-[tên query].png`

**Nếu không có AI Overview:**
- Thử query khác
- Hoặc document "Đang trong quá trình optimize"

### Bước 3: Screenshot ChatGPT/Perplexity citations

1. Mở ChatGPT hoặc Perplexity
2. Hỏi về topics The Rike viết
3. Nếu được cite → Screenshot
4. Save as: `chatgpt-citation-[topic].png`

---

## 2. CAPTURE TRAFFIC DATA (Google Analytics 4)

### Metrics cần lấy:

| Metric | Cách lấy | Screenshot |
|--------|----------|------------|
| **Total Sessions** | GA4 → Reports → Acquisition | ✅ |
| **Organic Traffic** | GA4 → Traffic acquisition → Organic Search | ✅ |
| **Traffic Trend** | GA4 → Last 30 days vs Previous 30 days | ✅ |
| **Top Pages** | GA4 → Engagement → Pages and screens | ✅ |

### Export data:
1. GA4 → Reports → Export (top right)
2. Download as CSV hoặc PDF
3. Save as: `ga4-traffic-[date].csv`

---

## 3. CAPTURE SEARCH CONSOLE DATA

### Metrics cần lấy:

| Metric | Cách lấy | Screenshot |
|--------|----------|------------|
| **Total Clicks** | Search Console → Performance | ✅ |
| **Impressions** | Search Console → Performance | ✅ |
| **Average CTR** | Search Console → Performance | ✅ |
| **Top Queries** | Search Console → Performance → Queries | ✅ |
| **Top Pages** | Search Console → Performance → Pages | ✅ |

### So sánh Before/After:
1. Chọn date range TRƯỚC khi optimize
2. Screenshot
3. Chọn date range SAU khi optimize
4. Screenshot
5. So sánh 2 screenshots

---

## 4. DATA CẦN ĐIỀN VÀO CASE STUDY

### Thông tin cơ bản:
```
Website: therike.com
Ngày bắt đầu optimize: ___________
Ngày đo kết quả: ___________
Thời gian: ___ tuần/tháng
```

### Traffic metrics:
```
BEFORE:
- Monthly sessions: ___________
- Organic traffic: ___________
- Top queries ranking: ___________

AFTER:
- Monthly sessions: ___________
- Organic traffic: ___________
- Top queries ranking: ___________

CHANGE:
- Sessions: +/- ___%
- Organic: +/- ___%
```

### AI Overview metrics:
```
- Số queries xuất hiện trong AI Overview: ___
- Queries cụ thể: 
  1. ___________
  2. ___________
  3. ___________
```

### Content metrics:
```
- Số bài đã optimize: ___
- Thời gian optimize mỗi bài: ___ giờ
- Tổng thời gian: ___ giờ
```

---

## 5. FOLDER STRUCTURE

Tổ chức files như sau:

```
/proof/
├── screenshots/
│   ├── ai-overview/
│   │   ├── ai-overview-query-1.png
│   │   └── ai-overview-query-2.png
│   ├── analytics/
│   │   ├── ga4-traffic-before.png
│   │   ├── ga4-traffic-after.png
│   │   └── ga4-comparison.png
│   └── search-console/
│       ├── gsc-before.png
│       └── gsc-after.png
├── data/
│   ├── ga4-export.csv
│   └── gsc-export.csv
├── case-study.md
└── case-study.html
```

---

## 6. TIPS

### Nếu chưa có data "Before":
- Dùng "Last 30 days" làm baseline
- Tiếp tục optimize
- Đo lại sau 30-60 ngày
- Case study = "Progress so far"

### Nếu chưa xuất hiện trong AI Overview:
- Document process đang làm
- Show partial results
- "Work in progress" vẫn là proof of methodology

### Làm giả số liệu?
- ❌ KHÔNG BAO GIỜ
- Prospect sẽ hỏi chi tiết
- Bị phát hiện = Mất trust vĩnh viễn
- Số thật dù nhỏ vẫn tốt hơn số fake

---

## 7. CHECKLIST TRƯỚC KHI LÀM CASE STUDY

- [ ] Có access GA4 của therike.com
- [ ] Có access Search Console của therike.com
- [ ] Đã screenshot AI Overview (nếu có)
- [ ] Đã export traffic data
- [ ] Đã ghi chép process đã làm
- [ ] Đã có before/after comparison
