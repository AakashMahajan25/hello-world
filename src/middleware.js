import { NextResponse } from 'next/server'

export function middleware(request) {
  const { pathname } = request.nextUrl

  // Skip middleware for login page and API routes
  if (pathname === '/admin/login' || pathname.startsWith('/api/')) {
    return NextResponse.next()
  }

  // Check for admin routes
  if (pathname.startsWith('/admin')) {
    const token = request.cookies.get('admin_token')

    if (!token || token.value !== 'authenticated') {
      return NextResponse.redirect(new URL('/admin/login', request.url))
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: '/admin/:path*',
}