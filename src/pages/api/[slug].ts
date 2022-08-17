// src/pages/api/examples.ts
import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../server/db/client";

const getUrl = async (req: NextApiRequest, res: NextApiResponse) => {
  const { slug } = req.query;

  if (typeof slug !== 'string') {
    res.statusCode = 404;
    return res.send({ message: 'please use a slug' })
  }

  const shortUrl = await prisma.shortUrl.findFirst({
    where: {
      slug
    },
  });

  if (shortUrl) {
    res.redirect(shortUrl.url)
  }

  res.statusCode = 404;
  return res.send({ message: 'slug not found' })
};

export default getUrl;
