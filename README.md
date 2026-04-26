# Art Gate Gallery

Contemporary art gallery in Martin, Slovakia — showcasing local and international artists, fostering creative dialogue, and bringing curated exhibitions to the heart of the region.

## Tech Stack

- **Framework:** Astro 6.x (static + SSR)
- **Styling:** Tailwind CSS v4
- **UI:** Custom components (shadcn-inspired)
- **Hosting:** Vercel
- **Email:** Resend API (contact form)

## Commands

```bash
npm run dev       # Local dev server (http://localhost:4321)
npm run build     # Production build
npm run preview   # Preview build locally
npm run test      # Unit tests
```

## Project Structure

```
art-gate-gallery/
├── src/
│   ├── components/
│   │   ├── layout/     # Header, Footer, Layout
│   │   ├── ui/         # Button, Input, Card, Badge
│   │   └── forms/      # ContactForm, Newsletter
│   ├── pages/          # Astro pages (routes)
│   ├── styles/         # Global CSS + Tailwind
│   ├── data/           # JSON content (exhibitions, artists, site info)
│   └── lib/            # Utilities, schemas, translations
├── public/             # Static assets (images, fonts)
├── docs/              # Project documentation
├── research/          # Market research & competitor analysis
└── scripts/           # Build and deployment scripts
```

## Multi-language

Bilingual website (Slovak / English):

| Slovak | English |
|--------|---------|
| `/` | `/en` |
| `/o-nas` | `/en/about` |
| `/vystavy` | `/en/exhibitions` |
| `/umelec/[id]` | `/en/artist/[id]` |
| `/kontakt` | `/en/contact` |

## Current Status

- ✅ Project scaffolded
- ✅ Tech stack configured
- ✅ Base layout & styling
- ⏳ Content population (artist bios, exhibition data)
- ⏳ Contact form integration
- ⏳ Admin panel (optional)

## License

MIT
