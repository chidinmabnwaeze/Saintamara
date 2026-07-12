# Saintamara Services Ltd — Website

A multi-page information website for Saintamara Services Ltd, built with
**Vite + React + TypeScript + Tailwind CSS** and **React Router**.

## Pages

- `/` — Home
- `/about` — About us
- `/services` — Our services
- `/approach` — Our approach (what we do / don't do)
- `/contact` — Contact (with a message form)
- any other path shows a 404 page

## Running it locally

You'll need [Node.js](https://nodejs.org) 18 or newer installed.

```bash
npm install      # install dependencies (first time only)
npm run dev      # start the local dev server
```

Then open the URL it prints (usually http://localhost:5173).

Other commands:

```bash
npm run build    # build the production site into /dist
npm run preview  # preview the production build locally
```

## Where to edit things

| What you want to change | File |
| --- | --- |
| Service categories and bullet points | `src/data/services.ts` |
| Home page (hero, teasers) | `src/pages/Home.tsx` + `src/components/Hero.tsx` |
| About page copy and pillars | `src/pages/About.tsx` |
| Services page | `src/pages/Services.tsx` |
| "What we do / don't do" wording | `src/pages/Approach.tsx` |
| Contact details and form | `src/pages/Contact.tsx` |
| Navigation links | `src/components/Navbar.tsx` |
| Footer | `src/components/Footer.tsx` |
| Brand colours and fonts | `tailwind.config.js` |
| Logo images | `public/logo-full.jpeg`, `public/logo-mark.png` |

## Placeholders to replace before going live

Search the project for these and swap in the real details:

- `0000 000 0000` — phone number (Footer + Contact)
- `hello@saintamara.co.uk` — email address (Footer + Contact)
- `[Your service areas]` — the areas you cover (Contact page)
- `[00000000]` — Companies House registration number (Footer)

The contact form opens the visitor's own email app with the details filled in
(no server required). If you later want submissions sent to you automatically,
a service like Formspree or Netlify Forms can be dropped into `Contact.tsx`.

## Deploying

The site is a single-page app with client-side routing, so the host needs to
send every path back to `index.html`. Two common cases are already handled:

- **Netlify** — `public/_redirects` is included.
- **Vercel / Cloudflare Pages** — SPA fallback is automatic for Vite apps.

For other/static hosting, configure a fallback (rewrite all routes to
`/index.html`) so visiting e.g. `/about` directly doesn't 404.

Run `npm run build` and deploy the contents of the `dist` folder.

## Brand notes

- **Colours** — navy `#14284D`, gold `#B4863B`, warm ivory `#FAF7F1`, drawn
  from the logo.
- **Typefaces** — Fraunces (headings) and Mulish (body), loaded from Google
  Fonts in `index.html`.
- **Motif** — the gold "embrace" arc (`src/components/BrandArc.tsx`) echoes the
  cradling hand in the logo and recurs across the pages.
