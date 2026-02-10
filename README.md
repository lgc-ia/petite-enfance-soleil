[![Next.js](https://img.shields.io/badge/Next.js-16-000000?logo=nextdotjs&logoColor=white&style=for-the-badge)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=20232A&style=for-the-badge)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?logo=typescript&logoColor=white&style=for-the-badge)](https://www.typescriptlang.org/)
[![Radix UI](https://img.shields.io/badge/Radix_UI-161618?logo=radixui&logoColor=white&style=for-the-badge)](https://www.radix-ui.com/)
[![CSS](https://img.shields.io/badge/CSS-3-1572B6?logo=css3&logoColor=white&style=for-the-badge)](https://developer.mozilla.org/docs/Web/CSS)
[![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-000000?logo=vercel&logoColor=white&style=for-the-badge)](https://vercel.com/)
[![CI](https://img.shields.io/github/actions/workflow/status/giusmili/lgc-lapetite-enfance/ci.yml?logo=github&label=CI&style=for-the-badge)](https://github.com/giusmili/lgc-lapetite-enfance/actions/workflows/ci.yml)

# La grande classe - Petite enfance (Next.js)

## Structure

```
├── favicon/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Layout global (importe index.css + globals.css)
│   │   └── page.tsx            # Page d’accueil (rend <App />)
│   ├── components/             # UI & primitives
│   ├── constants/
│   ├── guidelines/
│   ├── styles/
│   │   └── globals.css         # Variables thèmes & styles globaux
│   ├── App.tsx                 # Composition de la page d’accueil
│   ├── Attributions.md
│   └── index.css               # CSS utilitaires 
├── next.config.mjs
├── next-env.d.ts
├── package.json
├── tsconfig.json
└── build/                      # Ancien build Vite (non utilisé)
```

Notes migration:
- Vite retiré (fichiers supprimés: `index.html`, `vite.config.ts`, `src/main.tsx`).
- Next.js App Router utilisé sous `src/app/`.
- Alias `@/*` conservé (pointe sur `src/*`).
- Certains composants marqués `'use client'` (hooks côté client).

## Démarrage

- Installer: `npm install`
- Dev: `npm run dev` (http://localhost:3000)
- Build: `npm run build`
- Prod: `npm start`

Le dossier `build/` hérite de l’ancien setup Vite et n’est plus utilisé. Vous pouvez le supprimer en toute sécurité.

>[Server Deploy](https://lgc-lapetite-enfance.vercel.app/)
  
