# Ava

This is an app used to test new technologies. It's created using the T3-Stack (Next.js, tRPC, Typescript, Prisma, Tailwind).

The T3 stack was chosen to create a full stack project that utilizes a type-safe front/back end focused on simplicity, modularity and full type safety!

## Link Shortner

Create a shorter link for a url.

## Thoughts

This project was a proof of concept to attempt to use vercels edge functions to improve request response times. The database is serverless and hosted in Sydney. When a request for a specific url slug comes in the middleware is run on the edge and no cached response will be available. This means the first request will need to perform a datbase lookup. Depending on the location of this request this could lead to a signifcant increase in the response time. Databases located in different regions close to the user would reduce this initial delay. From then on the request / response will be cached by vercel. When a succeeding request comes in the middleware run on the edge will use the cached response resulting in a very low response time.

## Deployment

Deployed to vercel using a planetscale db

## Useful Commands

- next dev
   - run project in development
- next build
   - build project
- next start
   - run project in production
- next lint
   - run linter
