# EstateX — Design System & UI Specifications

**Document Reference:** UI-DESIGN-2026-V1  
**Project:** EstateX Real Estate & Rental Platform  
**Target Viewports:** Mobile (320px–640px) | Tablet (641px–1024px) | Desktop (1025px+)  

---

## 1. Design Philosophy

EstateX's visual identity balances **modern corporate trustworthiness** with **practical Pakistani real estate utility**. The design avoids cluttered visual noise, opting for high contrast, clean typography, unambiguous property cards, and intuitive mobile touch targets.

---

## 2. Color Palette & Design Tokens

```
Primary Brand:
- Deep Teal 700:    #0F766E  (Brand identity, primary navigation headers)
- Emerald 600:      #0D9488  (Primary action buttons, active tabs)
- Teal Tint 50:     #F0FDFA  (Soft card backgrounds, highlights)

Accent & Call-to-Action:
- Amber Gold 500:   #F59E0B  (Featured badges, star ratings, CTA alerts)
- Amber Hover:      #D97706  (Button hover state)

Neutral Tones:
- Slate 900:        #0F172A  (Primary body text, high contrast headers)
- Slate 600:        #475569  (Secondary text, specifications, captions)
- Slate 200:        #E2E8F0  (Borders, input outlines, dividers)
- Slate 50:         #F8FAFC  (Page background, canvas)

System Semantics:
- Success Green:    #10B981  (Active listing, approved status)
- Warning Yellow:   #F59E0B  (Pending review status)
- Danger Red:       #EF4444  (Sold listing, delete action, validation errors)
- Info Blue:        #3B82F6  (Inquiry alerts, help tooltips)
```

---

## 3. Typography Scale

- **Primary Font Family:** `Inter`, `-apple-system`, `BlinkMacSystemFont`, `Segoe UI`, `Roboto`, sans-serif.
- **Headings:**
  - H1 (Hero Title): `2.25rem` (36px), Bold 700, Line Height 1.2
  - H2 (Section Title): `1.75rem` (28px), SemiBold 600, Line Height 1.3
  - H3 (Card Title / Subtitle): `1.25rem` (20px), SemiBold 600, Line Height 1.4
  - Body Text: `1.0rem` (16px), Regular 400, Line Height 1.5
  - Small / Captions: `0.875rem` (14px), Regular 400, Line Height 1.4
  - Micro / Badges: `0.75rem` (12px), Medium 500, Uppercase tracking

---

## 4. Pakistani Real Estate Formatting Standards

1. **Currency Representation:**
   - Raw database number: `8500000`
   - Formatted UI display: **PKR 85 Lakhs** (or `PKR 8,500,000`)
   - For values >= 1 Crore (10,000,000): **PKR 1.25 Crore**
2. **Area Representation:**
   - Marla: standard default for houses and residential plots (e.g., `5 Marla`, `10 Marla`).
   - Kanal: used for larger residences, commercial land, and acreage (e.g., `1 Kanal`, `4 Kanal`).
   - Acre / Murabba: supported in agricultural land descriptions.
