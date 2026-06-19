---
name: seo-meta
description: Use when creating or updating any page that needs SEO metadata, Open Graph tags, Twitter cards, or structured data schemas.
---

# SEO Metadata Standards

## Required on every page
- <title> tag: "{Page Title} — Ercüment Erden"
- meta description: unique per page, 150-160 chars, Turkish for TR pages
- og:title, og:description, og:url, og:image (1200x630px)
- twitter:card: summary_large_image
- canonical URL

## Person Schema (homepage)
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Ercüment Erden",
  "jobTitle": "Verification Infrastructure Architect",
  "url": "https://ercumenterden.com",
  "sameAs": [
    "https://linkedin.com/in/ercumenterden"
  ],
  "knowsAbout": ["AI Safety", "Carbon Markets", "dMRV", "EU AI Act", "CBAM 2026"]
}

## Language Rules
- TR pages: lang="tr", hreflang="tr"
- EN pages (insights, investor): lang="en", hreflang="en"
- NO mixed-language og:description (was a bug on old site)

## Performance
- next/font for all Google Fonts (self-host, preload)
- next/image for all images (lazy load, WebP)
- Font display: swap
