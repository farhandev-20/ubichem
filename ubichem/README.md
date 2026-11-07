# Ubichem Website (Sanghvi Quality Products Pvt. Ltd.)

Production-ready, multi-page agricultural web application built for Ubichem (Sanghvi Quality Products Pvt. Ltd., Barshi, Solapur, Maharashtra, est. 1988).

Built using **Next.js 16 (App Router)**, **TypeScript**, **Tailwind CSS v4**, **Prisma (SQLite for local dev / PostgreSQL ready)**, and **Nodemailer**.

---

## 🚀 Quick Start

### 1. Prerequisites
- Node.js 18.18+ or 20+
- npm 9+

### 2. Installation
```bash
cd ubichem
npm install
```

### 3. Environment Variables
Copy `.env.example` to `.env`:
```bash
cp .env.example .env
```
Default configuration values for local development:
```env
DATABASE_URL="file:./dev.db"
ADMIN_USERNAME="admin"
ADMIN_PASSWORD="ubichem2024"
SITE_URL="http://localhost:3000"
```

### 4. Database Setup
```bash
npx prisma generate
npx prisma db push
```

### 5. Run the Local Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📁 Content Management (`/src/content`)

All site content is completely decoupled from UI code and managed in `/src/content`:

| File | Purpose |
|------|---------|
| `site.ts` | Company details, vision/mission/goal, contact placeholders, feature flags |
| `navigation.ts` | Header menu items, logo metadata, dropdown hierarchies |
| `products.ts` | 9 product categories and formulations |
| `banners.ts` | Homepage hero carousel banner images |
| `certificates.ts` | Official ISO and quality certificates |
| `team.ts` | Executive team and agronomy specialists |
| `gallery.ts` | Media gallery configuration and placeholders |
| `pages.ts` | Inner page descriptive copy and placeholders |

---

## 🧭 Page Routes

- `/` — Homepage (Hero carousel, Welcome, Products grid, Vision/Mission/Goal, Certificates with Lightbox, Disclaimer)
- `/about` — Our Profile
- `/team` — Our Team
- `/awareness` — Farmer Awareness Programme
- `/services` — Services and Agronomy Support
- `/awards` — Awards and Achievements
- `/clients` — Client Satisfaction
- `/range` — Product Range
- `/products` — Complete 9-Category Catalog
- `/products/[slug]` — Individual Category Formulations
  - `/products/agro-chemicals`
  - `/products/disease-resistance-products`
  - `/products/humic-acid-fertilisers`
  - `/products/keeping-quality-enhancer`
  - `/products/micronutrients-fertilizers`
  - `/products/npk-water-soluble-fertilizer`
  - `/products/plant-growth-enhancer`
  - `/products/solvents-for-agrochemicals`
  - `/products/spreader-dispersing-agent`
- `/gallery` — Image Gallery with interactive Lightbox preview
- `/enquiry` — Product Enquiry Form (Zod validation, honeypot, DB persistence, SMTP email notification)
- `/contact` — Contact Us Form
- `/admin` — Password-protected Admin Dashboard for viewing & exporting CSV data
- `/sitemap.xml` & `/robots.txt` — Search Engine Optimization

---

## 🔒 Admin Access

Visit `/admin` to access enquiry logs:
- **Username:** `admin` (or configured via `ADMIN_USERNAME`)
- **Password:** `ubichem2024` (or configured via `ADMIN_PASSWORD`)

Features:
- Filter between Product Enquiries and Contact Messages
- One-click CSV export
- Real-time refresh
