---
name: vercel-deploy
description: Use when deploying to Vercel or checking deployment readiness. Includes pre-flight checks, environment variable setup, and domain config.
---

# Vercel Deployment Procedure

## Pre-flight Checklist
1. Run: npm run build (must complete with 0 errors)
2. Run: npm run lint (0 errors, warnings acceptable)
3. Check: no console.log in production code
4. Check: all environment variables in .env.example documented
5. Check: no hardcoded URLs (use env vars)

## Environment Variables Required
NEXT_PUBLIC_SITE_URL=https://ercumenterden.com
NEXT_PUBLIC_CALENDLY_URL=[calendly link]
INVESTOR_PASSWORD=[bcrypt hash — never plaintext]

## Vercel Config (vercel.json)
{
  "buildCommand": "npm run build",
  "outputDirectory": ".next",
  "framework": "nextjs",
  "regions": ["fra1"]
}
Region fra1 (Frankfurt) — closer to Turkish and EU users.

## Domain
Primary: ercumenterden.com
www redirect → root domain
SSL: automatic via Vercel

## Post-Deploy
1. Run Lighthouse audit on live URL (target: 90+)
2. Verify Person schema with Google Rich Results Test
3. Check og:image renders on LinkedIn post preview
4. Verify fonts load (Cormorant italic visible on hero)
