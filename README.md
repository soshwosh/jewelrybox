This is JewelryBox, a full stack personal jewelry catalog with organizational abilities.

## Tech Stack:

Frontend: React & TailwindCSS
Backend: NextJS & NodeJS
Database: Postgres (NeonDB, Drizzle ORM)
Deployment: Vercel

When you click login or signup, it's takes a few seconds to load.
I think this is because my initial database fetches are slow and I haven't implemented any streaming (yet).
You can try to just add "/alljewelry" to the URL, it sometimes loads faster than the button clicks for me.

## Getting Started

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Vercel Deployments

You can also view this project at the following links.

Deployment for branch "main":
https://jewelrybox.vercel.app/
