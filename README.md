# PonPlants

The definitive semi-hydro troubleshooting resource. Built from 997 real grower posts — LECA, Pon, root rot, reservoir sizing, transitions, and fertilizer dosing.

## Pages

| Route | Content |
|-------|---------|
| `/` | Homepage with guides overview and top FAQ |
| `/leca-vs-pon` | Full comparison table, myths, Alocasia-specific notes |
| `/root-rot` | Symptom guide, decision tree, 5 causes with fixes |
| `/transition` | Bare root method, week-by-week timeline, pot comparisons |
| `/fertilizer` | Nutrient table, fertilizer comparison, dosing schedule |
| `/tools` | Reservoir calculator, root rot checker, fertilizer quick ref |
| `/plants/alocasia` | Variety notes, troubleshooting, community data |
| `/plants/pothos` | LECA care, propagation, common problems |
| `/plants/monstera` | Aerial roots, fenestration, variety notes |

## Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS + inline CSS for design tokens
- **Fonts:** Playfair Display (display) + DM Sans (body) + DM Mono (code)
- **Deployment:** Vercel

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy to Vercel

1. Push this repository to GitHub
2. Go to [vercel.com](https://vercel.com) and click **Add New Project**
3. Import the GitHub repository
4. Leave all settings as default — Vercel detects Next.js automatically
5. Click **Deploy**

No environment variables are needed. The site is fully static-compatible.

## Design system

| Token | Value |
|-------|-------|
| Primary green | `#4a7c3f` |
| Light green | `#7faa5b` |
| Clay / orange | `#be5e30` |
| Background | `#fafaf8` |
| Surface | `#f7f4f0` |
| Text primary | `#1c1a16` |
| Text secondary | `#57534e` |
| Text muted | `#78716c` |
| Border | `#e7e3dc` |
| Dark bg | `#1c1a16` |

## Content

All content is derived from analysis of the r/SemiHydro community database (`semihydro_db.sqlite`), covering 997 posts and 2,692+ comments. No content is fabricated — all statistics, grower quotes, and observations are sourced from actual community posts.
