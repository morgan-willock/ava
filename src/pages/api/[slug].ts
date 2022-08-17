// src/pages/api/examples.ts
import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../server/db/client";

const getUrl = async (req: NextApiRequest, res: NextApiResponse) => {
  const { slug } = req.query;

  if (typeof slug !== 'string') {
    res.statusCode = 404
    return res.send({ message: 'please use a slug' })
  }

  const url = await prisma.shortUrl.findFirst({
    where: {
      slug
    },
  });

  res.status(200).json(url);
};

export default getUrl;
