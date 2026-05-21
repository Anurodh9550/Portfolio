# ✨ Modern Portfolio — Next.js 15

A stunning, production-ready portfolio website crafted with the latest tech and butter-smooth motion.

![Next.js](https://img.shields.io/badge/Next.js-15-black?style=flat-square&logo=next.js)
![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-06B6D4?style=flat-square&logo=tailwindcss)
![Framer Motion](https://img.shields.io/badge/Framer%20Motion-11-FF0080?style=flat-square&logo=framer)

## ✨ Features

- **Next.js 15 (App Router)** with React 19
- **TypeScript** for type-safe development
- **Tailwind CSS** with custom design tokens & dark mode
- **Framer Motion** scroll, hover & page animations
- **Custom cursor** with hover states (desktop)
- **Smooth scroll progress** bar
- **Animated mesh gradient** background with blur blobs
- **Glassmorphism** UI throughout
- **Dark / Light mode** with `next-themes`
- **Section-based scroll-spy** navigation
- **Animated timeline** (Experience section)
- **Interactive project cards** with hover overlay
- **Contact form** with submit animation
- **Fully responsive** (mobile → 4k)
- **SEO optimized** + OpenGraph metadata
- **Accessibility** focused (focus rings, ARIA, keyboard)

## 📦 Tech Stack

| Category   | Tools                                                  |
| ---------- | ------------------------------------------------------ |
| Framework  | Next.js 15, React 19                                   |
| Language   | TypeScript                                             |
| Styling    | Tailwind CSS, CSS Variables                            |
| Animation  | Framer Motion                                          |
| Icons      | Lucide React                                           |
| Theme      | next-themes                                            |
| Fonts      | Inter, JetBrains Mono, Space Grotesk (Google Fonts)    |

## 🛠️ Setup

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view in browser.

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx          # Root layout w/ theme + fonts
│   ├── page.tsx            # Home page (composes sections)
│   └── globals.css         # Global styles + design tokens
├── components/
│   ├── navbar.tsx
│   ├── hero.tsx
│   ├── about.tsx
│   ├── skills.tsx
│   ├── projects.tsx
│   ├── experience.tsx
│   ├── contact.tsx
│   ├── footer.tsx
│   ├── theme-provider.tsx
│   ├── custom-cursor.tsx
│   ├── scroll-progress.tsx
│   ├── animated-background.tsx
│   ├── marquee.tsx
│   └── section-heading.tsx
└── lib/
    ├── data.ts             # All content (projects, skills, etc.)
    └── utils.ts            # cn() className helper
```

## 🎨 Customization

All content lives in **`lib/data.ts`** — update your name, bio, projects, skills, experience, and social links there.

### Quick customizations

- **Name / Role / Bio:** `lib/data.ts` → `siteConfig`
- **Projects:** `lib/data.ts` → `projects` (add images, tags, links)
- **Skills:** `lib/data.ts` → `skillCategories`
- **Theme colors:** `app/globals.css` → CSS variables
- **Fonts:** `app/layout.tsx`

## 🚀 Deploy

The easiest way to deploy is with [Vercel](https://vercel.com):

```bash
npm install -g vercel
vercel
```

## 📝 License

MIT — feel free to use this as a starting point for your own portfolio.
