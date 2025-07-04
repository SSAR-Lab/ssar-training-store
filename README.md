# SSAR Training & Store Website

## Setup Instructions

1. Rename `.env.example` to `.env` and fill in your Stripe and secret keys.
2. Run these commands:

```
npm install
npx prisma generate
npx prisma migrate dev --name init
node prisma/seed.js
npm run dev
```

3. Go to http://localhost:3000

## Deployment (Vercel)

1. Push code to GitHub
2. Import project on Vercel
3. Add environment variables on dashboard
4. Click Deploy!