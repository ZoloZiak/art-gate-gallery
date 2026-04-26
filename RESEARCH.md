# Research: Art Gate Gallery

## Executive Summary

Project: **Art Gate Gallery** — contemporary art gallery website.
Target location: **Martin, Slovakia** (inferred from project naming & context).
Type: Art gallery showcasing local Slovak and international artists, with rotating exhibitions.

## Market Context

### Regional Art Scene — Martin, Slovakia
- Martin is a mid-sized city in northern Slovakia ( Žilina Region )
- Known for cultural institutions: **Múzeum SNP**, **Slovenské národné múzeum**, **Galéria mesta Martina**
- Art galleries in region typically focus on:
  - Local Slovak painters & sculptors
  - Applied arts (ceramics, glass)
  - Photography exhibitions
  - Cultural heritage & folk art

### Competitor Analysis (Slovakia)

| Gallery | Location | Focus |
|---------|----------|-------|
| **Galéria mesta Martina** | Martin | Municipal gallery, local artists, themed exhibitions |
| **Slovenské národné múzeum – Galéria** | Bratislava | National collection, classical & modern |
| ** Kunsthalle** | Bratislava | International contemporary |
| **GGallery** | Bratislava | Contemporary, Austrian-German focus |
| **Buchty a vínno** | Bratislava | Applied arts, design |

**Differentiation strategy:** Smaller, intimate gallery with curated selection — focus on personal connections, artist talks, workshops.

### International References Found

1. **Art Gate Gallery — New York** (Singulart platform)
   - 520 W 27th St, Chelsea
   - Online-first gallery presence
   - Uses platform for discovery & sales

2. **Gate Gallery — Brussels**
   - Focus on contemporary African art
   - Emphasizes cultural dialogue

3. **The Gate — Galerie Martin Mertens** (Berlin)
   - Berlin-based, art fair participation
   - Modern & conceptual

4. **Gate 222 — Martin Rosol** (glass artwork)
   - Glass sculpture, modern craft

5. **Martin Gates** (Oregon, USA)
   - Wildlife bronze sculptor
   - Public monuments

**Takeaway:** "Gate" symbolizes threshold/entrance to art; "Martin" may refer to location or founder's name.

## Target Audience

| Segment | Needs | How we serve |
|---------|-------|-------------|
| Local art collectors | Trust, artist reputation | Biographies, CV, past works |
| Tourists | Accessibility, unique souvenirs | Online shop, prints, gifts |
| Students & educators | Educational content, learning resources | Exhibition archive, artist statements |
| International buyers | Shipping, secure payments | International checkout, logistics |
| Artists | Exhibition opportunities, visibility | Open calls, submission form |

## Content Requirements

### Artist Profiles
- Name, photo, biography
- Artist statement
- Medium & techniques
- Selected works gallery (5–15 images)
- CV / exhibitions history
- Contact/social links

### Exhibitions
- Title, dates, artist(s)
- Curatorial statement
- High-resolution installation photos
- price list (optional)
- Opening event details

### Shop / Sales (Phase 2)
- Original artworks
- Limited edition prints
- Merchandise (postcards, books)

### Visit & Contact
- Map + directions
- Opening hours
- Phone / email
- Contact form (name, email, subject, message)
- Social media links (Instagram, Facebook)

## Design Direction

**Palette:** Warm neutral (stone palette) + amber accent
- Background: `#FAFAF9` (stone-50)
- Text: `#1C1917` (stone-900)
- Accent: `#B45309` (amber-700)
- Secondary: `#F5F5F4` (stone-100)

**Typography:** DM Sans (body) + Satoshi (display) — clean, modern, legible.

**Layout:**
- Minimal, gallery-white aesthetic with warmth
- Large imagery (full-bleed)
- Simple navigation, clear hierarchy
- Mobile-first responsive grid

## Information Architecture

```
Home
├── About (O nás)
├── Exhibitions (Výstavy)
│   ├── Current
│   ├── Upcoming
│   └── Archive
├── Artists (Umelci)
│   └── [Artist Profile]
├── Visit (Navštívte nás)
│   ├── Location
│   ├── Hours
│   └── Contact Form
├── Shop (Obchod) — future
└── Blog — future
```

## SEO / Marketing

- **Keywords:** galéria Martin, súčasné umenie Slovensko, výstavy Martin, umelci Slovensko
- **Local SEO:** Google Business Profile (when physical space confirmed)
- **Social:** Instagram (visual focus), Facebook (events)
- **Newsletter:** Monthly exhibition announcements

## Technical Considerations

- Astro static build — fast, SEO-friendly
- Responsive image gallery with lightbox (PhotoSwipe)
- Multi-language (Slovak / English) — centralized `translations.ts`
- Contact form → Resend email API
- Gallery metadata for artist pages (structured data)
- Sitemap + robots.txt for SEO

## Outstanding Questions

1. Physical address confirmation
2. Opening hours confirmation
3. Initial artist roster (who will exhibit first?)
4. Photography rights / image sourcing
5. Budget for professional photography
6. Timeline for launch

## Next Steps

- [ ] Finalize content inventory (artist bios, images)
- [ ] Set up Resend API for contact form
- [ ] Create artist & exhibition data schemas
- [ ] Build out artist profile pages
- [ ] Integrate PhotoSwipe gallery
- [ ] Localization (i18n) setup
- [ ] Admin panel (optional, for content updates)

---

*Research date: 2026-04-26*
