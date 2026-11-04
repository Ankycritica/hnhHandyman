# HNH Handyman — Service Website

A responsive handyman-services website built with Next.js and TypeScript.

**Demo:** [hnh-handyman-liart.vercel.app](https://hnh-handyman-liart.vercel.app)

## Overview

The site presents service information and provides ways for prospective customers to get in touch. The codebase includes interactive page sections, contact-form components, a chat widget, testimonials, and ZIP-code-based service-area logic.

## Tech stack

- Next.js 16 and React
- TypeScript
- Tailwind CSS and reusable UI components
- Framer Motion for interface animations
- Vercel for deployment

## Getting started

```bash
npm ci
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

## Useful commands

```bash
npm run dev      # Local development
npm run lint     # Static checks
npm run build    # Production build
npm run start    # Run the production build
```

## Key areas of the code

- `app/` — app routes and pages
- `app/page.tsx` — homepage content and service-area interactions
- `components/` — headers, testimonials, chat, and contact UI
- `lib/` — shared utilities
- `public/` — static assets

## Maintenance notes

- Check ZIP-code coverage before publishing changes to the service-area selector.
- Review contact-form and chatbot configuration before any live rollout.
- Do not commit API keys, customer information, or local environment files.

This repository contains the website's implementation; business details and service availability should be verified with the business owner.
