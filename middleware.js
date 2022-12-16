// middleware.ts
import { NextResponse } from 'next/server'
import { getToken } from 'next-auth/jwt'

// This function can be marked `async` if using `await` inside
export async function middleware(request) {

  if(request.nextUrl.pathname === '/' ){
    const session = await getToken({
      req: request,
      secret: process.env.JWT_SECRET,
      secureCookie: process.env.NODE_ENV === "production",
    });
    if(!session) return NextResponse.redirect(new URL('/home', request.url));
  }


  
}

// // See "Matching Paths" below to learn more
// export const config = {
//   matcher: '/about/:path*',
// }