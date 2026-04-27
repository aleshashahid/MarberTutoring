# Marber Learning

Website for Marber Learning, a K-12 in-person tutoring service based in Houston, TX.

Built with Next.js 16, React 19, Tailwind CSS v4, shadcn/ui, and Framer Motion.

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Add your logo at `public/logo.png` (used in the Navbar and Footer).

## Build

```bash
npm run build
npm start
```

## Lint

```bash
npm run lint
```

## Deploy to Netlify

1. Install the Netlify Next.js plugin (required once):

```bash
npm install @netlify/plugin-nextjs
```

2. Push to GitHub and connect the repo in the [Netlify dashboard](https://app.netlify.com).
   Netlify will pick up the `netlify.toml` configuration automatically.

3. Or deploy via the Netlify CLI:

```bash
npm install -g netlify-cli
netlify deploy --prod
```

## Editing Content

All page copy is defined in constants at the top of each component file. Look for the `// Editable` comments:

- `components/Hero.tsx` — hero headline, subheading, CTA labels
- `components/SubjectsGrid.tsx` — subject cards
- `components/WhyMarber.tsx` — features
- `components/Testimonials.tsx` — testimonial quotes and authors
- `components/CTASection.tsx` — CTA headline and subheading
- `components/Footer.tsx` — contact info, links, copyright
