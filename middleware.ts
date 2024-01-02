import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getToken } from 'next-auth/jwt';

const secret = process.env.NEXTAUTH_SECRET

export async function middleware(req: NextRequest) {
  const session = await getToken({ req, secret })
 
  if (req.nextUrl.pathname === "/api/posts" && req.method === "GET") {
    return NextResponse.next()
  }
  
  if (!session && req.nextUrl.pathname !== '/auth' || '/') {
    return new NextResponse(
      null,
      { status: 302, headers: { Location: '/auth' } }
    );
  }

  if (session) {
    const headers = new Headers(req.headers)
    headers.set('userid', session.id as string)

    return NextResponse.next({
      request: { headers },
    })
  }

  return new NextResponse(
    JSON.stringify({ message: 'Authentication failed' }),
    { status: 401, headers: { 'content-type': 'application/json' } }
  )
}

export const config = {
  matcher: ["/api/posts/:path*", "/api/comments/:path*"],
}
