// src/pages/api/examples.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '../../../server/db/client';

const getUrl = async (req: NextApiRequest, res: NextApiResponse) => {
  const { slug } = req.query;

  res.setHeader('Cache-control', ['s-maxage=6048000', 'stale-while-revalidate=60']);

  if (typeof slug !== 'string') {
    res.statusCode = 404;
    return res.send({ message: 'please use a slug' });
  }

  const shortUrl = await prisma.shortUrl.findFirst({
    where: {
      slug,
    },
  });

  if (shortUrl) {
    return res.send({ shortUrl });
  }

  res.statusCode = 404;
  return res.send({ message: 'slug not found' });
};

export default getUrl;
