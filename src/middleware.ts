import { NextFetchEvent, NextRequest, NextResponse } from 'next/server';

export async function middleware(req: NextRequest, ev: NextFetchEvent) {
  if (req.nextUrl.pathname.startsWith('/api/url/')) {
    return;
  }

  console.log('path?', req.nextUrl.pathname);

  const slug = req.nextUrl.pathname.split('/').pop();

  console.log('slug?', slug);

  const data: { shortUrl: { id: number; dateCreated: string; url: string; slug: string } } = await (
    await fetch(`${req.nextUrl.origin}/api/url/${slug}`)
  ).json();

  if (data.shortUrl.url) {
    return NextResponse.redirect(data.shortUrl.url);
  }
}
