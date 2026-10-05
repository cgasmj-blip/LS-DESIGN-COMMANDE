# LS DESIGN — Gestion des commandes

Panel moderne de gestion des commandes LS DESIGN.

## Architecture

- Next.js + TypeScript
- Supabase (projet partagé avec EMS, données LS DESIGN cloisonnées)
- Authentification Discord
- PostgreSQL + RLS
- GitHub pour le versioning

## Principes

- Identité technique basée sur le Discord User ID
- Nom affiché basé sur le nickname du serveur Discord LS DESIGN
- Mapping rôles Discord -> grades/permissions LS DESIGN
- Supabase est la source de vérité
- Le dépôt ne contient aucun secret
- Les migrations permettent de déplacer LS DESIGN vers un autre projet Supabase plus tard

## Démarrage

1. Copier `.env.example` vers `.env.local`
2. Renseigner les variables Supabase/Discord
3. Installer les dépendances avec `npm install`
4. Lancer `npm run dev`

## Base de données

Les migrations SQL sont dans `supabase/migrations`.
