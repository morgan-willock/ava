// src/server/router/index.ts
import { createRouter } from './context';
import superjson from 'superjson';
import { shortUrl } from './shortUrl';

export const appRouter = createRouter()
  .transformer(superjson)
  .merge(shortUrl);

// export type definition of API
export type AppRouter = typeof appRouter;
