# app

Clean starter: React + TypeScript + Vite, wired to an empty Supabase project (schema, tables and functions were fully reset).

## Setup

```
cd app
cp .env.example .env
npm install
npm run dev
```

## Deploy

`npm run build` outputs to `app/dist`. Copy that into `/site` on `main` to publish via GitHub Pages (`.github/workflows/deploy.yml` deploys whatever is in `/site`).
