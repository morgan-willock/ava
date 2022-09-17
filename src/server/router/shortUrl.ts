import * as trpc from '@trpc/server';
import { z } from 'zod';
import { prisma } from '../db/client';
import { nanoid } from 'nanoid';

const createRouter = () => {
  return trpc.router();
}

export const shortUrl = createRouter()
  .query('get', {
    async resolve() {
      const last10ShortUrls = await prisma.shortUrl.findMany({
        take: 10,
        orderBy: [
          {
            dateCreated: 'desc'
          }
        ]
      })
      return {
        last10ShortUrls
      }
    }
  })
  .mutation('create', {
    input: z.object({
      url: z.string().min(1),
    }),
    resolve: async ({ input }) => {
      const shortUrl = await prisma.shortUrl.create({
        data: {
          url: input.url,
          slug: nanoid(6)
        }
      })
      return {
        shortUrl
      }
    }
  })
