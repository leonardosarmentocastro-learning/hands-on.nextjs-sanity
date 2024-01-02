# Hands on: Next.js + Sanity crm

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

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

Visit [http://localhost:3000/studio](http://localhost:3000/studio) to manage Sanity schemas.

---

## Purpose

This initiative aims to grasp knowledge in regards to working with Next.js + Tailwind CSS + Sanity CRM.

- Components under `src/components` are self contained small modules of markup and sanity schema/queries;
- Definitions under `src/theme` are responsible for carrying theme variants possibilities accross different components markups andd Sanity schema definitions;
- Each Sanity schema (`schema.ts` files) must be set as `types` of `sanity/schemas` file;
- The main file `src/pages/index.tsx` is where all pieces gets combined together to present a combination of Call to Action components.
