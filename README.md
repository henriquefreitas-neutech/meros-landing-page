# Meros Landing Page

Marketing landing page for **Meros** — the place where real-world experiences become shareable, bookable, and personally curated for everyone, everywhere.

This repository implements the Meros landing page as a static, English-language Next.js app with fixed content and responsive layout based on the Meros design prototype.

## Origin

This project started as a fork of the **[FDTE Boilerplate - Next.js](https://github.com/fdtedsd/fdte-boilerplate-next)** (Next.js 15 + TypeScript + Tailwind CSS + shadcn/ui). The boilerplate demo pages and features were removed; the stack and tooling were kept to support the landing page.

## Tech stack

- **Next.js 15** — App Router, static rendering
- **TypeScript**
- **Tailwind CSS v4** — layout and Meros brand tokens
- **shadcn/ui** — Button, Badge, Tabs
- **Lucide React** — icons
- **Jest + Testing Library** — test setup (from the original boilerplate)
- **ESLint + Prettier + Husky** — code quality

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build |
| `npm start` | Run the production server |
| `npm run lint` | Run ESLint |
| `npm test` | Run tests |
| `npm run test:watch` | Run tests in watch mode |
| `npm run test:coverage` | Run tests with coverage |

## Project structure

```
src/
├── app/
│   ├── globals.css         # Global styles and Meros design tokens
│   ├── layout.tsx          # Root layout (Poppins font, metadata)
│   └── page.tsx            # Landing page entry point
├── assets/meros/           # Landing page images from the prototype
├── components/
│   ├── landing/            # Landing sections, header, footer, content
│   └── ui/                 # shadcn/ui primitives
└── lib/
    └── utils.ts            # Shared utilities (cn, etc.)
```

### Landing page sections

| Section | ID | Description |
| --- | --- | --- |
| Hero | `#top` | Headline and app mockup |
| Create & share | `#create` | List creation feature |
| Discover & book | `#book` | Booking flow |
| Creators | `#creators` | Creator and business creator panels |
| Subscribers | `#subscribers` | Subscriber experience |
| CTA | `#cta` | Call to action banner |
| Footer | — | Links and copyright |

Fixed copy lives in `src/components/landing/data/landing-content.ts`.

## Additional documentation

These guides come from the original boilerplate and remain useful for extending the project:

- [`DESIGN_TOKENS.md`](./DESIGN_TOKENS.md) — CSS variables, Tailwind tokens, light/dark theming
- [`INTEGRAÇÃO_SHADCN.md`](./INTEGRAÇÃO_SHADCN.md) — shadcn/ui setup and adding components
- [`VALIDAÇÃO_EXEMPLO.md`](./VALIDAÇÃO_EXEMPLO.md) — Zod + React Hook Form patterns (reference for future forms)

## Design

Brand colors and typography follow the Meros prototype:

- Primary: `#7F00FF`
- Font: Poppins (via `next/font/google`)
- Tokens defined in `src/app/globals.css`

Mobile navigation uses a custom hamburger menu (sidebar from the right) at viewports **≤ 700px**, matching the prototype behavior.

## License

Private project — Meros / Neutech.
