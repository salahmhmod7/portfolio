# Salah Mahmoud — Portfolio

> **Building Intelligence** — AI Engineer portfolio.
> LLMs · AI Agents · Computer Vision · RAG · Machine Learning

A cinematic, dark-themed personal portfolio built with **Next.js 15, TypeScript, Tailwind CSS, and Framer Motion**.

---

## ✨ Features

* **Cinematic Hero** with an animated neural-network background
* **Ambient Background** with animated gradient orbs and global particles
* **7 Project Case Studies** with filters, galleries, and performance metrics
* **AI Journey Timeline** — from ML foundations to production AI systems
* **Skills Matrix** organized by AI subfield
* **Certifications** section
* **Beyond the Code** — personal principles and mindset
* **Contact Section** with copy-to-clipboard email
* **Custom Cursor** on desktop with reduced-motion support
* **Background Music** with opt-in playback
* **Full SEO** — metadata, Open Graph, Twitter Cards, sitemap, robots.txt, and JSON-LD
* **Fully Responsive** — optimized for mobile, tablet, desktop, and large screens
* **Accessible** — keyboard navigation, focus states, and reduced-motion support

---

## 🛠 Tech Stack

| Layer      | Technology               |
| ---------- | ------------------------ |
| Framework  | Next.js 15 — App Router  |
| Language   | TypeScript — Strict Mode |
| Styling    | Tailwind CSS             |
| Animation  | Framer Motion            |
| Icons      | Lucide React             |
| Font       | Inter via `next/font`    |
| Deployment | Vercel                   |

---

## 📦 Installation

### 1. Clone the repository

```bash
git clone https://github.com/salahmhmod7/portfolio.git
cd portfolio
```

### 2. Install dependencies

```bash
npm install --legacy-peer-deps
```

> `--legacy-peer-deps` may be required because of the React/Next.js peer dependency configuration used by the project.

---

## 🚀 Development

Start the development server:

```bash
npm run dev
```

Then open:

```text
http://localhost:3000
```

---

## 🏗 Production Build

Create a production build:

```bash
npm run build
```

Start the production server:

```bash
npm run start
```

---

## 🌍 Environment Variables

Create a `.env.local` file based on `.env.example`:

```env
NEXT_PUBLIC_SITE_URL=https://your-domain.com
NEXT_PUBLIC_ANALYTICS_DOMAIN=
NEXT_PUBLIC_ANALYTICS_ID=
```

All environment variables are optional. The portfolio works without analytics configuration.

---

## 📁 Project Structure

```text
.
├── app/
│   ├── layout.tsx              # Root layout
│   ├── page.tsx                # Home page
│   ├── globals.css             # Tailwind + custom styles
│   ├── opengraph-image.tsx     # Dynamic Open Graph image
│   ├── icon.tsx                # Dynamic favicon
│   ├── apple-icon.tsx          # Dynamic Apple/iOS icon
│   ├── sitemap.ts              # Sitemap generation
│   ├── robots.ts               # Robots.txt generation
│   ├── not-found.tsx           # Custom 404 page
│   └── projects/
│       ├── page.tsx            # Projects listing
│       └── [slug]/
│           └── page.tsx        # Project detail page
│
├── components/
│   ├── layout/
│   │   ├── Navbar
│   │   └── Footer
│   ├── hero/
│   │   └── Hero
│   ├── about/
│   │   └── About
│   ├── expertise/
│   │   └── AI Journey timeline
│   ├── skills/
│   │   └── Skills grid
│   ├── projects/
│   │   ├── Project cards
│   │   ├── Filters
│   │   ├── Gallery
│   │   └── Metrics
│   ├── certifications/
│   │   └── Certification cards
│   ├── beyond/
│   │   └── Beyond the Code
│   ├── contact/
│   │   └── Contact section
│   ├── effects/
│   │   ├── Cursor
│   │   ├── Particles
│   │   ├── Neural network
│   │   └── Music player
│   └── ui/
│       ├── GlassCard
│       ├── SectionHeading
│       ├── TechBadge
│       └── Other UI primitives
│
├── data/
│   ├── site.ts                 # Site configuration, socials, music, analytics
│   ├── navigation.ts           # Navigation items
│   ├── projects.ts             # Project data
│   ├── skills.ts               # Skills + AI journey
│   └── certifications.ts       # Certification data
│
├── lib/
│   ├── utils.ts                # Utility functions
│   └── seo.ts                  # Metadata + JSON-LD builders
│
├── types/
│   └── index.ts                # Shared TypeScript types
│
└── public/
    ├── images/
    │   └── projects/            # Project screenshots
    └── audio/
        └── background-music.mp3
```

---

## 🖼 Replacing Project Images

Project images are organized by project slug inside:

```text
public/images/projects/
```

Recommended structure:

| Project               | Files                                        |
| --------------------- | -------------------------------------------- |
| `dermascan/`          | `hero.webp`, `01.webp`, `02.webp`, `03.webp` |
| `fire-detection/`     | `hero.webp`, `01.webp`, `02.webp`            |
| `rag/`                | `hero.webp`, `01.webp`, `02.webp`            |
| `fraud/`              | `hero.webp`, `01.webp`, `02.webp`            |
| `salahfm/`            | `hero.webp`, `01.webp`                       |
| `agentos/`            | `hero.webp`, `01.webp`                       |
| `shopping-assistant/` | `hero.webp`, `01.webp`                       |

### Recommended Image Specifications

* Format: `WebP`
* Hero aspect ratio: approximately **16:10**
* Example resolution: `1280 × 800`
* Recommended size: **under 200 KB per image** when possible

Example:

```text
public/
└── images/
    └── projects/
        └── dermascan/
            ├── hero.webp
            ├── 01.webp
            ├── 02.webp
            └── 03.webp
```

---

## 🎵 Adding Background Music

Place your audio file at:

```text
public/audio/background-music.mp3
```

The music control will automatically appear in the bottom-right corner.

Music is **muted by default** and requires the visitor to opt in.

---

## 🚢 Deploy to Vercel

### Option A — Vercel Dashboard

1. Push the repository to GitHub.
2. Open the Vercel dashboard.
3. Import the repository.
4. Add the required environment variables.

For example:

```env
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

5. Click **Deploy**.

### Option B — Vercel CLI

Install the Vercel CLI:

```bash
npm install -g vercel
```

Then run:

```bash
vercel
```

Follow the prompts to complete deployment.

---

## 📝 Customization

Most portfolio content is centralized inside the `data/` directory.

| What to change            | File                           |
| ------------------------- | ------------------------------ |
| Name, tagline, email, URL | `data/site.ts`                 |
| Social links              | `data/site.ts` → `socialLinks` |
| Projects                  | `data/projects.ts`             |
| Skills & AI journey       | `data/skills.ts`               |
| Certifications            | `data/certifications.ts`       |
| Navigation items          | `data/navigation.ts`           |
| Colors & design tokens    | `tailwind.config.ts`           |
| Global styles             | `app/globals.css`              |

This structure keeps the UI components reusable while allowing most portfolio content to be updated without modifying the component logic.

---

## 📊 Projects

The portfolio currently showcases seven AI-focused projects covering areas such as:

* Computer Vision
* Medical AI
* Fire Detection
* RAG Systems
* Fraud Detection
* AI Agents
* AI-powered Assistants

Each case study can include:

* Project overview
* Problem statement
* Technical approach
* Technologies used
* Performance metrics
* Screenshots
* Architecture/details
* Project links

---

## ♿ Accessibility

The portfolio includes accessibility-focused features such as:

* Keyboard navigation
* Visible focus states
* Semantic HTML
* Responsive layouts
* Reduced-motion support
* Desktop-only custom cursor
* Opt-in background music

Animations are designed to enhance the experience without preventing normal navigation or interaction.

---

## 🔍 SEO

The project includes built-in SEO support through Next.js metadata APIs.

Included features:

* Page metadata
* Open Graph metadata
* Twitter Cards
* Dynamic Open Graph image
* Sitemap
* Robots.txt
* JSON-LD structured data
* Custom favicon
* Apple/iOS icon

---

## 📄 License

This portfolio is a personal project.

**All rights reserved.**

---

<div align="center">

**Salah Mahmoud**

*Building Intelligence.*

</div>
