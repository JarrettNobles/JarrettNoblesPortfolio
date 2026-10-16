# Jarrett Nobles — Portfolio

Personal portfolio built with Next.js, React, TypeScript, and Tailwind CSS.

## Run it locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Edit the content

All text, links, and projects live in **`lib/data.ts`**. Search for `TODO` to find the spots that still need your links:

- LinkedIn and Upwork profile URLs
- FairwayIQ live site and repo
- Coral Olson Photography URL

To add a screenshot to a project, put the image in `public/projects/` and set `image: "/projects/your-image.png"` on that project.

Your résumé is served from `public/Jarrett_Nobles_Resume.pdf`. Replace that file whenever you update it.

## Change the look

Colors are defined at the top of `app/globals.css` (`--accent` is the green highlight color).
The page layout is in `app/page.tsx`.

## Deploy to Vercel

1. Push this folder to a new GitHub repo (for example `portfolio`).
2. In Vercel, open your project → **Settings → Git** and connect that repo
   (or create a new Vercel project from it and move your domain over under **Settings → Domains**).
3. Every push to `main` redeploys automatically.
