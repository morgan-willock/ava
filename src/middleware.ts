import { ShortUrl } from '@prisma/client';
import { NextFetchEvent, NextRequest, NextResponse } from 'next/server';

export async function middleware(req: NextRequest, ev: NextFetchEvent) {
  if (req.nextUrl.pathname.startsWith('/api/get-url/')) {
    return;
  }

  if (req.nextUrl.pathname.startsWith('/_next/static/')) {
    return;
  }

  const slug = req.nextUrl.pathname.split('/').pop();

  if (slug) {
    const data: { shortUrl: ShortUrl } = await (
      await fetch(`${req.nextUrl.origin}/api/get-url/${slug}`)
    ).json();

    if (data?.shortUrl?.url) {
      return NextResponse.redirect(data.shortUrl.url)
    }
  }
}
