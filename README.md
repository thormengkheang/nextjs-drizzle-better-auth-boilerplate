# Nextjs Drizzle Better Auth Boilerplate

Nextjs, Tailwind, Shadcn/ui, Drizzle, Better Auth Boilerplate. Features include:

- Sign In and Sign Up
- Protected route /

## Getting Started

First have `postgres` up and running and create a database then create `.env` check the `.env.example`.

Migate database and seed user.

```bash
pnpm db:migrate
pnpm db:seed
```

Finally, run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
