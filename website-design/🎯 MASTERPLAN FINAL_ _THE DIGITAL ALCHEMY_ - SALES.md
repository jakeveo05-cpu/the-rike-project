<img src="https://r2cdn.perplexity.ai/pplx-full-logo-primary-dark%402x.png" style="height:64px;margin-right:32px"/>

# 🎯 MASTERPLAN FINAL: "THE DIGITAL ALCHEMY" - SALES MACHINE v4

Tuyệt vời! Bạn vừa tóm gọn **toàn bộ chiến lược** thành một bản thiết kế **thực dụng 100%**. Tôi sẽ:

1. ✅ **Phê duyệt + bổ sung** phần thiếu
2. 📋 **Tạo Wireframe chi tiết** (text-based structure)
3. 📊 **Design Spec Sheet** hoàn chỉnh cho team
4. 💻 **React Three Fiber boilerplate** production-ready
5. 📈 **Analytics \& Sales Funnel tracking**

***

# ✅ PHẦN 1: VALIDATION + STRATEGIC REFINEMENTS

## **Issue 1: Hero Value Prop - Cần "cứng" hơn**

**Current:**

```
"AI-native Growth Partner for Ambitious SMEs."
"Automate operations, win AI search, and pay us only when the results are real."
```

**Refined (A/B test friendly):**

```
PRIMARY (Aggressive):
"Don't hire more. Build better."
Subheading: "AI automation + performance-based growth. 
You pay us when YOUR revenue goes up."

SECONDARY (Trust-focused):
"Micro Agency. Macro Impact."
Subheading: "We tie our fees to your revenue, not our hours. 
That's how we're confident in what we do."

TERTIARY (Technical):
"Your competitors use AI. So do we. For you."
Subheading: "Automation, AI Search, Revenue Tracking. 
3 pillars. 1 shared-risk partnership."
```

**Why:** Khách Mỿ thích "ROI" và "No BS". Avoid buzzwords like "journey", "synergy".

***

## **Issue 2: Trust Layer Timing - Quá "muộn"**

**Problem:**

- Trust layer ở "5-15s" nhưng người dùng đã scrolled past hero.
- Desktop user: Not scrolling yet, looking at 3D universe.

**Refined Placement:**

```
HERO SECTION (0-5s)
├─ 3D Big Bang animation (2-3s)
├─ Hero text overlay (2-3s)
└─ CTA: "Book 30-min Audit"

↓ [Auto-scroll or subtle hint: "Scroll to see proof"]

TRUST LAYER (Immediate below hero, no scroll needed initially)
├─ Logo strip (compact, 1 line)
├─ 3-4 key metrics (inline, scannable)
├─ 1-2 testimonial (short)
└─ "Explore our 5 pillars ↓" CTA

↓ [User clicks "Explore" OR naturally scrolls]

UNIVERSE / SERVICES (Proper 3D interaction zone)
└─ Full viewport for 3D experience
```

**Why:** Remove friction. Trust first, then explore = faster conversion path.

***

## **Issue 3: Mobile UX - Underspecified**

**Current:** Swipe + tap, vague.

**Refined Mobile Strategy:**

```
MOBILE EXPERIENCE (< 768px):

SECTION 1: Hero (100vh)
├─ 3D universe still visible (lower quality, faster)
├─ Hero text centered, larger font
├─ CTA: Full-width button at bottom
└─ Gesture hint: "Tap planet below to explore"

SECTION 2: Trust proof (Auto-scroll on mobile)
├─ Slides horizontally (swipeable logo carousel)
├─ Key metrics stacked vertically
└─ Testimonials in cards (swipe through)

SECTION 3: Services (Tab-based, NOT 3D)
├─ 5 tabs: Earth | Fire | Metal | Wood | Water
├─ Each tab = card with:
│  ├─ Service name + icon
│  ├─ 3-4 bullets
│  ├─ 1 case study snippet
│  └─ CTA button
├─ Tap tab = switch content (no animation lag)
└─ Alternative: Accordion (less screen jumping)

SECTION 4: Case Studies (Full-width cards)
├─ Swipeable carousel
├─ Card = image + headline + numbers + CTA
└─ Tap card = modal with full details

SECTION 5: Team (Scrollable vertical)
├─ 3 profile cards stacked
├─ Photo + name + title + bio
└─ No hover effects (touch-friendly)

SECTION 6: CTA form (Sticky or bottom sheet)
├─ 3-5 input fields
├─ Single column layout
└─ Mobile keyboard optimized
```

**Why:**

- 3D on mobile = 20% of users, <2 second engagement. Not worth the complexity.
- Card/tab UI = conversion-optimized, faster load.
- Maintain immersive feel without breaking mobile UX.

***

## **Issue 4: Form Qualification - Missing**

**Current:** 无 form spec.

**Refined Lead Qualification Form:**

```
FORM: "30-min AI Growth Audit"

Questions (In order, psychological flow):
1. "What's your business name?" (Text)
   → Builds familiarity, not scary

2. "What's your monthly revenue?" (Select)
   Options: < $50k | $50-100k | $100-250k | $250k-1M | 1M+
   → Qualifier: Under 50k = likely not fit

3. "What's your BIGGEST pain right now?" (Select)
   Options: 
   - High customer acquisition cost
   - Manual work killing my team (= Automation interest)
   - Losing visibility to AI search (= Fire/SEO interest)
   - Revenue is flat, need to scale (= Metal/performance interest)
   - No clear marketing strategy (= Wood/CMO interest)
   → Routing signal: which service they need most

4. "How many people on your team?" (Select)
   Options: Just me | 2-5 | 6-10 | 10+
   → Automation appeal increases as team size grows

5. "Best email to send your audit?" (Email)
   → Lead capture

6. "How did you hear about us?" (Optional)
   Options: Search | LinkedIn | Referral | Other
   → Marketing attribution

FORM COPY (Persuasive):
Title: "Let's find your unfair advantage"
Subheading: "30-min Zoom call. You'll leave with a custom action plan—or we'll tell you upfront if we're not the fit."
CTA Button: "Book my free audit" (not "Submit" - gives feeling of value)

FORM VALIDATION:
├─ Real-time feedback (green checkmark = no wait for submit)
└─ Error messaging: "Oops, that doesn't look right. Try again." (friendly, not robotic)

POST-SUBMIT:
├─ Confirmation screen: "Thanks! Look for an email from [founder name]"
├─ Calendly / Acuity embed: Pick a time (24-48h available slots)
├─ Followup email: Case study PDF + "Here's what we'll cover"
└─ CRM: Tag as Lead, sync to HubSpot, owner assignment
```


***

## **Issue 5: Case Study Format - Too scattered**

**Current:** Mentions The Rike \& Vibecode, but no consistent format.

**Refined Case Study Template:**

```
CASE STUDY CARD (Used in multiple places)

Format A: Compact (Service detail section)
┌─────────────────────────────────┐
│ COMPANY: Vibecode               │
│ INDUSTRY: Tech / SaaS           │
│ CHALLENGE: Manual SMS + CRM     │
│                                 │
│ 📊 RESULTS:                     │
│  ↑ +$22k/month revenue          │
│  ↓ -$8k/month in labor costs    │
│  ↑ +67% repeat customers        │
│  ⏱ 8-week implementation        │
│                                 │
│ "Within 3 months, we tripled    │
│  our email list because we      │
│  could finally nurture better." │
│ - CTO, Vibecode                 │
│                                 │
│ [WATCH 2-min video →]           │
└─────────────────────────────────┘

Format B: Expanded (Case study detail page)
1. HEADER
   Company name + logo
   Industry + company size
   Challenge (1 paragraph)

2. SITUATION (Before)
   ├─ Manual processes: [X]
   ├─ Team hours wasted: [X] hrs/week
   ├─ Revenue impact: [X]
   └─ Quote: "[Pain statement]" - Founder

3. SOLUTION (What we did)
   ├─ Implementation: AI automation + [specific tools]
   ├─ Timeline: 8 weeks
   ├─ Team effort required: [X] hrs/week from their side
   └─ Key milestones: Week 1, Week 4, Week 8

4. RESULTS (After)
   ├─ Revenue increase: $22k/month
   ├─ Cost savings: $8k/month labor
   ├─ Efficiency gains: 40+ hrs/month
   ├─ Retention: +67% repeat customers
   └─ Quote: "[Success statement]" - CTO

5. WHAT WE DID DIFFERENTLY
   (Explain your unique approach)

6. KEY METRICS
   [Chart: Before/After comparison]

7. NEXT STEPS FOR YOUR BUSINESS
   [Call-to-action, not pushy]
```


***

# 🎨 PHẦN 2: WIREFRAME CHI TIẾT (TEXT-BASED)

Dưới đây là **kiến trúc trang hoàn chỉnh** để designer vẽ Figma:

## **Section 1: Hero (100vh, Dark background)**

```
┌─────────────────────────────────────────────────────────────┐
│                      3D UNIVERSE                             │
│  (WebGL canvas fills entire viewport)                        │
│                                                               │
│     Big Bang animation (0-2s) → 5 planets visible (2-3s)    │
│                                                               │
│  ┌────────────────────────────────────────────────────────┐  │
│  │ OVERLAY TEXT (Glassmorphic background, center-aligned)  │  │
│  │                                                         │  │
│  │ "DON'T HIRE MORE. BUILD BETTER."                       │  │
│  │ (Font: Montserrat Bold 3.5rem, White, text-glow neon) │  │
│  │                                                         │  │
│  │ AI automation + performance-based growth.              │  │
│  │ You pay us when YOUR revenue goes up.                  │  │
│  │ (Font: Inter Regular 1.1rem, #AAA, 1.6 line-height)   │  │
│  │                                                         │  │
│  │ ┌──────────────────────────────────────────────────┐  │  │
│  │ │  [BOOK 30-MIN AUDIT]  (Primary CTA)              │  │  │
│  │ │  Neon border + glow effect, cursor:pointer       │  │  │
│  │ │  Hover: Inverse colors + enlarged glow           │  │  │
│  │ └──────────────────────────────────────────────────┘  │  │
│  │                                                         │  │
│  │ Explore our 5 pillars ↓ (Secondary CTA, smaller text) │  │
│  │                                                         │  │
│  └────────────────────────────────────────────────────────┘  │
│                                                               │
│  [SCROLL HINT at bottom: Mouse wheel icon + "SCROLL"]       │
│                                                               │
└─────────────────────────────────────────────────────────────┘

RESPONSIVE BREAKPOINTS:
Desktop (> 1200px):
├─ Overlay positioned center
├─ Font sizes as above
└─ 3D canvas full-quality

Tablet (768-1200px):
├─ Overlay still centered, slightly smaller
├─ Font: 2.5rem headline, 1rem body
└─ 3D quality reduced (fewer particles)

Mobile (< 768px):
├─ Overlay fills 80% width, centered
├─ Font: 2rem headline, 0.9rem body
├─ 3D universe reduced quality OR static background image
└─ CTA buttons: Full-width at bottom
```


***

## **Section 2: Trust Proof (Full-width, minimal padding)**

```
┌─────────────────────────────────────────────────────────────┐
│                      TRUST PROOF                             │
│ Background: Subtle gradient or #0f0f1f                       │
│                                                               │
│ ┌──────────────────────────────────────────────────────────┐ │
│ │ "TRUSTED BY AMBITIOUS SMBS"                             │ │
│ │ (Font: Montserrat 1.2rem, uppercase, center, gray #888) │ │
│ └──────────────────────────────────────────────────────────┘ │
│                                                               │
│ ┌ LOGO STRIP (Horizontal scroll on mobile) ──────────────┐  │
│ │ [Logo] The Rike                                        │  │
│ │ [Logo] Vibecode                                        │  │
│ │ [Logo] [Company 3]                                     │  │
│ │ [Logo] [Company 4]                                     │  │
│ │ (Scale: 120px width, auto-height, centered vertical)  │  │
│ └────────────────────────────────────────────────────────┘  │
│                                                               │
│ ┌ KEY METRICS (4 columns, responsive to 2 on mobile) ────┐  │
│ │                                                        │  │
│ │ 📊 $X.XM+              🔄 3.2x                         │  │
│ │ Revenue Impacted       Avg ROI in 6mo                 │  │
│ │                                                        │  │
│ │ ⏱ 40-60 hrs/mo        ✅ 98%                           │  │
│ │ Time Saved             Client Retention                │  │
│ │                                                        │  │
│ │ (Font: Montserrat Bold 1.8rem for numbers, gray for text) │  │
│ └────────────────────────────────────────────────────────┘  │
│                                                               │
│ ┌ TESTIMONIALS (Carousel on mobile, 2 visible on desktop) ┐ │
│ │                                                        │  │
│ │ "Within 8 weeks, they automated what took my team      │  │
│ │  40 hours/month. Now we focus on strategy."            │  │
│ │ — Founder, Vibecode                                    │  │
│ │                                                        │  │
│ │ "We stopped worrying about manual data entry. AI       │  │
│ │  handles it. Revenue went up because we had time       │  │
│ │  to actually sell."                                    │  │
│ │ — CMO, The Rike                                        │  │
│ │                                                        │  │
│ │ (Font: Playfair Display Italic 1.1rem, #CCC)          │  │
│ └────────────────────────────────────────────────────────┘  │
│                                                               │
└─────────────────────────────────────────────────────────────┘

DESIGN NOTES:
- Background subtle: No bright colors, keep focus on content
- Logo heights uniform (scale proportionally)
- Metrics: Use icons + large numbers (scannable)
- Testimonials: Max 2 lines of text (respects reading time)
- Mobile: Vertical stack everything, keep padding consistent
```


***

## **Section 3: Universe / Services Map (100vh)**

```
┌─────────────────────────────────────────────────────────────┐
│                  3D UNIVERSE (Interactive)                   │
│                                                               │
│  [WebGL Canvas - 5 planets orbiting core]                    │
│                                                               │
│  ┌─ RIGHT SIDEBAR (Overlay, scrollable on mobile) ────────┐  │
│  │ OUR 5 PILLARS                                         │  │
│  │ (Font: Montserrat 0.9rem, uppercase, #888)            │  │
│  │                                                        │  │
│  │ ● EARTH                                               │  │
│  │   AI Automation & Operations                          │  │
│  │   "Replace manual work with code" [CLICKABLE]         │  │
│  │                                                        │  │
│  │ ● FIRE                                                │  │
│  │   AI Search & Visibility (GEO/SEO)                    │  │
│  │   "Show up in ChatGPT answers" [CLICKABLE]            │  │
│  │                                                        │  │
│  │ ● METAL                                               │  │
│  │   Performance & Revenue                               │  │
│  │   "Pay us only for wins" [CLICKABLE]                  │  │
│  │                                                        │  │
│  │ ● WOOD                                                │  │
│  │   Fractional CMO + AI Stack                           │  │
│  │   "Your marketing brain in the cloud" [CLICKABLE]     │  │
│  │                                                        │  │
│  │ ● WATER                                               │  │
│  │   Social Seeding & Community                          │  │
│  │   "Build a tribe that converts" [CLICKABLE]           │  │
│  │                                                        │  │
│  │ ───────────────────────────────────────               │  │
│  │ Hover any planet above to learn more.                 │  │
│  │ Or use the menu above. ↑                              │  │
│  └────────────────────────────────────────────────────────┘  │
│                                                               │
│  ┌─ ORBITAL MENU (Bottom-right, 5 dots) ──────────────────┐  │
│  │ ⬤ ⬤ ⬤ ⬤ ⬤                                             │  │
│  │ Hover = tooltip shows service name                    │  │
│  │ Click = jump to planet                                │  │
│  │ (Dots colored: Earth=yellow, Fire=red, etc.)          │  │
│  └────────────────────────────────────────────────────────┘  │
│                                                               │
│  SCROLL HINT: "Scroll down for detailed services"            │
│                                                               │
└─────────────────────────────────────────────────────────────┘

INTERACTION NOTES:
- Desktop: Sidebar on right (doesn't block 3D view)
- Mobile: Sidebar becomes bottom sheet or accordion
- Planets: Auto-rotate, hover to highlight, click to deep-dive
- Fallback: If WebGL fails, show static image + card list below
```


***

## **Section 4: Service Detail (Modal-in-world)**

```
When user clicks planet (e.g., EARTH):

┌─────────────────────────────────────────────────────────────┐
│                  3D UNIVERSE (Focused)                       │
│  (Other planets muted, selected planet enlarged)             │
│                                                               │
│  ┌─ HOLOGRAM PANEL (In-world, not glass modal) ──────────┐  │
│  │ ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓  │
│  │ ┃ AI AUTOMATION & OPERATIONS                    [×]  ┃  │
│  │ ┃ Replace manual work with code.                     ┃  │
│  │ ┃                                                    ┃  │
│  │ ┃ WHAT YOU GET:                                     ┃  │
│  │ ┃ ✓ AI Receptionist for calls & chats              ┃  │
│  │ ┃ ✓ Automated CRM & follow-up workflows            ┃  │
│  │ ┃ ✓ Retention campaigns on autopilot               ┃  │
│  │ ┃ ✓ Real-time pipeline syncing                     ┃  │
│  │ ┃                                                    ┃  │
│  │ ┃ TYPICAL RESULT:                                   ┃  │
│  │ ┃ 40–60 hours/month freed                          ┃  │
│  │ ┃ $8k/month labor cost eliminated                  ┃  │
│  │ ┃ 3.2x faster lead response time                   ┃  │
│  │ ┃                                                    ┃  │
│  │ ┃ ─────────────────────────────────────────────    ┃  │
│  │ ┃ PROOF: Vibecode Case Study                        ┃  │
│  │ ┃ [Mini video thumbnail + play icon]                ┃  │
│  │ ┃ "+$22k revenue / +$8k saved / 8 weeks"           ┃  │
│  │ ┃                                                    ┃  │
│  │ ┃ [SEE FULL CASE STUDY (2-min video) →]             ┃  │
│  │ ┃ [AUTOMATE MY OPERATIONS →]                        ┃  │
│  │ ┃                                                    ┃  │
│  │ ┃ [← BACK TO UNIVERSE]                              ┃  │
│  │ ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛  │
│  │                                                        │  │
│  │ (Font: Headlines Montserrat, Body Inter)              │  │
│  │ (Colors: Neon border matching planet color + glow)    │  │
│  │ (Width: 60% screen max, positioned right of planet)   │  │
│  │ (Mobile: Full-width bottom sheet, scrollable)         │  │
│  │                                                        │  │
│  └────────────────────────────────────────────────────────┘  │
│                                                               │
│  INTERACTION:
│  - Scroll hologram = see more details (planet still visible)
│  - Click [×] or [Back] = close & return to IDLE
│  - Click CTA button = open form or case study
│  - ESC key = close
│                                                               │
└─────────────────────────────────────────────────────────────┘
```


***

## **Section 5: Case Study Deep Dive (In-world expanded)**

```
When user clicks [SEE FULL CASE STUDY]:

┌─────────────────────────────────────────────────────────────┐
│                  3D UNIVERSE (Blurred behind)                │
│                                                               │
│  ┌─ EXPANDED HOLOGRAM PANEL (Scrollable) ──────────────────┐ │
│  │                                                          │ │
│  │ ╔═══════════════════════════════════════════════════╗  │ │
│  │ ║ VIBECODE AUTOMATION CASE STUDY          [×] [↑] ║  │ │
│  │ ║                                                   ║  │ │
│  │ ║ ┌─────────────────────────────────────────────┐ ║  │ │
│  │ ║ │ [Video Player - 2 minutes]                  │ ║  │ │
│  │ ║ │ ▶ Shows: Before → Automation → Results     │ ║  │ │
│  │ ║ │ Title overlay: "How Vibecode cut 40 hrs"   │ ║  │ │
│  │ ║ └─────────────────────────────────────────────┘ ║  │ │
│  │ ║                                                   ║  │ │
│  │ ║ SITUATION                                        ║  │ │
│  │ ║ Vibecode was spending 40+ hours/month on manual ║  │ │
│  │ ║ SMS & CRM updates. Team was burning out.        ║  │ │
│  │ ║                                                   ║  │ │
│  │ ║ WHAT WE DID                                      ║  │ │
│  │ ║ Implemented: Make.com + Zapier + Custom API    ║  │ │
│  │ ║ Automated: Lead scoring, follow-ups, nurture   ║  │ │
│  │ ║ Timeline: 8 weeks, 5 hrs/week from their team  ║  │ │
│  │ ║                                                   ║  │ │
│  │ ║ RESULTS                                          ║  │ │
│  │ ║ ┌──────────────────────────────────────────────┐║  │ │
│  │ ║ │ +$22k/month revenue                          ││  │ │
│  │ ║ │ (They had time to actually sell)             ││  │ │
│  │ ║ │                                              ││  │ │
│  │ ║ │ -$8k/month labor costs                       ││  │ │
│  │ ║ │ (No need for extra hire)                     ││  │ │
│  │ ║ │                                              ││  │ │
│  │ ║ │ +67% repeat customers                        ││  │ │
│  │ ║ │ (Better nurture = loyalty)                   ││  │ │
│  │ ║ └──────────────────────────────────────────────┘║  │ │
│  │ ║                                                   ║  │ │
│  │ ║ "Within 3 months, we tripled our email list     ║  │ │
│  │ ║  because we could finally nurture better."      ║  │ │
│  │ ║ — CTO, Vibecode                                 ║  │ │
│  │ ║                                                   ║  │ │
│  │ ║ ─────────────────────────────────────────────   ║  │ │
│  │ ║                                                   ║  │ │
│  │ ║ [READY FOR SOMETHING SIMILAR?]                  ║  │ │
│  │ ║ [BOOK YOUR FREE AUDIT →]                        ║  │ │
│  │ ║                                                   ║  │ │
│  │ ║ [← Back to service]                             ║  │ │
│  │ ╚═══════════════════════════════════════════════════╝  │ │
│  │                                                          │ │
│  │ (Can scroll within panel; planet still muted behind)    │ │
│  │                                                          │ │
│  └──────────────────────────────────────────────────────────┘ │
│                                                               │
└─────────────────────────────────────────────────────────────┘
```


***

## **Section 6: Team (After case studies, visible on scroll-down)**

```
┌─────────────────────────────────────────────────────────────┐
│                    MEET THE TEAM                             │
│ Background: Slightly lighter than base (#0f0f1f)             │
│                                                               │
│ ┌─────────────────────────────────────────────────────────┐ │
│ │ "3 people obsessed with making SMEs win in AI era"     │ │
│ │ (Font: Montserrat 1.2rem, center, gray)                │ │
│ └─────────────────────────────────────────────────────────┘ │
│                                                               │
│ ┌──────────────────┐  ┌──────────────────┐  ┌──────────────┐ │
│ │  [Avatar img]    │  │  [Avatar img]    │  │ [Avatar img] │ │
│ │                  │  │                  │  │              │ │
│ │ Hùng Trần        │  │ [Name 2]         │  │ [Name 3]     │ │
│ │ AI Growth        │  │ [Role]           │  │ [Role]       │ │
│ │ Strategist       │  │                  │  │              │ │
│ │                  │  │ Scaled 2 apps    │  │ [2-line bio] │ │
│ │ Scaled 2 apps    │  │ to $4M+ revenue. │  │              │ │
│ │ to $3M+ revenue. │  │ Expert in AI     │  │              │ │
│ │ Expert in growth │  │ automation.      │  │              │ │
│ │ & positioning.   │  │                  │  │              │ │
│ │                  │  │ [LinkedIn link]  │  │ [LinkedIn]   │ │
│ │ [LinkedIn link]  │  │                  │  │              │ │
│ └──────────────────┘  └──────────────────┘  └──────────────┘ │
│                                                               │
│ (Font: Name = Montserrat Bold 1.2rem)                        │
│ (Font: Bio = Inter Regular 0.95rem, #AAA)                    │
│ (Spacing: 40px between cards on desktop, stack on mobile)    │
│                                                               │
└─────────────────────────────────────────────────────────────┘
```


***

## **Section 7: CTA Form (Sticky or bottom sheet)**

```
STICKY FOOTER / MODAL:

┌─────────────────────────────────────────────────────────────┐
│                   BOOKING FORM                               │
│ Background: Dark with subtle border top (#1a1a28)            │
│                                                               │
│ ┌────────────────────────────────────────────────────────┐  │
│ │ Let's find your unfair advantage                      │  │
│ │ 30-min Zoom call. Custom action plan included.        │  │
│ │                                                         │  │
│ │ Business name:            [____________]               │  │
│ │ Monthly revenue:          [Select ▼]                   │  │
│ │ Biggest challenge:        [Select ▼]                   │  │
│ │ Team size:                [Select ▼]                   │  │
│ │ Best email:               [____________]               │  │
│ │                                                         │  │
│ │ [BOOK MY FREE AUDIT]  (Neon button, full-width)       │  │
│ │                                                         │  │
│ │ No credit card required. Takes 60 seconds.            │  │
│ │                                                         │  │
│ └────────────────────────────────────────────────────────┘  │
│                                                               │
│ ON SUBMIT:                                                   │
│ ├─ "Thanks! Check your email for calendar link."            │
│ ├─ (Background) Add to CRM, send confirmation email         │
│ └─ (Background) Slack notification to sales team            │
│                                                               │
└─────────────────────────────────────────────────────────────┘

MOBILE VERSION:
- Form appears as bottom sheet (80vh)
- Can scroll within form
- All inputs: single column, full-width
```


***

# 📊 PHẦN 3: ANALYTICS \& SALES FUNNEL TRACKING

## **Event Taxonomy (Mixpanel / GA4 structure)**

```
FUNNEL STAGES:
1. Awareness (Landing)
2. Interest (Exploration)
3. Consideration (Case study)
4. Intent (Form start)
5. Conversion (Form submit + booking)

EVENT TRACKING:

┌─ AWARENESS (Hero section)
│  ├─ Event: page_view
│  │  Properties: url, device_type, referrer
│  │
│  ├─ Event: hero_cta_click
│  │  Properties: button_text ("Book Audit" or "Explore Pillars")
│  │
│  └─ Event: scroll_started
│     Properties: scrolled_y (depth)

├─ INTEREST (Universe exploration)
│  ├─ Event: planet_hovered
│  │  Properties: planet_name ("earth", "fire", "metal", "wood", "water")
│  │  Duration: time_spent_hovering
│  │
│  ├─ Event: planet_clicked
│  │  Properties: planet_name, event_timestamp
│  │
│  ├─ Event: service_menu_clicked
│  │  Properties: menu_item_name
│  │
│  └─ Event: orbital_menu_used
│     Properties: dot_clicked (1-5)

├─ CONSIDERATION (Case study engagement)
│  ├─ Event: case_study_viewed
│  │  Properties: company_name ("vibecode", "the_rike", etc.)
│  │
│  ├─ Event: case_study_video_played
│  │  Properties: company_name, video_duration, watch_time
│  │
│  ├─ Event: case_study_video_completed
│  │  Properties: company_name, completion_percentage
│  │
│  └─ Event: scroll_depth
│     Properties: section_name, scroll_percentage (0-100)

├─ INTENT (Form interaction)
│  ├─ Event: form_viewed
│  │  Properties: form_type ("audit_booking")
│  │
│  ├─ Event: form_field_focused
│  │  Properties: field_name, field_order
│  │
│  ├─ Event: form_error
│  │  Properties: field_name, error_message
│  │
│  └─ Event: form_submitted
│     Properties: all_fields_data (business_name, revenue_range, pain_point, email)

└─ CONVERSION (Post-form)
   ├─ Event: audit_booked
   │  Properties: company_name, email, time_slot, revenue_range
   │
   ├─ Event: thank_you_page_viewed
   │  Properties: confirmation_token
   │
   └─ Event: lead_qualified_score
      Properties: score (1-10 based on revenue + pain point)

RETENTION EVENTS:
├─ Event: email_opened (via email provider API)
├─ Event: calendar_link_clicked
├─ Event: demo_attended
└─ Event: demo_converted_to_contract
```


***

## **Conversion Funnel Analysis**

```
EXPECTED FLOW (% conversion at each step):

Landing (100%)
    │
    ├─ Bounce: 40% (leave without interacting)
    │
    ├─ Explore: 50% (scroll or click planets)
    │   │
    │   ├─ Bounce: 30% (get bored at universe)
    │   │
    │   └─ View case study: 20%
    │       │
    │       ├─ Bounce: 10% (not convinced)
    │       │
    │       └─ Start form: 10%
    │           │
    │           ├─ Abandon (mid-form): 5%
    │           │
    │           └─ SUBMIT & BOOK: 5% ← GOAL
    │               │
    │               └─ Complete call + convert: 2% (of landing)
    │
    └─ Direct CTA (no exploration): 10%
        └─ Start form: 10%
            └─ SUBMIT & BOOK: 5% of this group

CONVERSION RATE TARGET:
- Landing to form submit: 5-8%
- Form submit to booked call: 90%
- Booked call to closed deal: 20-30% (depends on ICP fit)

A/B TEST OPPORTUNITIES:
├─ Hero headline (Aggressive vs. Trust-focused)
├─ CTA button text ("Book Audit" vs. "Start Free Audit")
├─ Form questions (5 vs. 7 fields)
├─ Case study placement (After service detail vs. In service detail)
└─ Team visibility (Above fold vs. Below fold)
```


***

# 💻 PHẦN 4: REACT THREE FIBER BOILERPLATE

Giờ tôi sẽ viết **production-ready React Three Fiber code** với structure rõ ràng:

