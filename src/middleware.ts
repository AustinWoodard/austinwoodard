import { NextRequest, NextResponse } from 'next/server'

// Map of subdomains to their corresponding social media URLs
const socialRedirects: Record<string, string> = {
  facebook: 'http://facebook.com/austinjwoodard',
  linkedin: 'https://www.linkedin.com/in/austin-woodard-b66067259/',
  instagram: 'https://www.instagram.com/austinjwoodard/',
  '500px': 'https://500px.com/p/austinwoodard?view=photos',
  x: 'https://x.com/NoxileMusic',
  twitter: 'https://x.com/NoxileMusic', // Alternative subdomain for X
  soundcloud: 'https://soundcloud.com/noxile',
  spotify: 'https://open.spotify.com/user/austinjwoodard?si=a5f887676a844809',
  austism: 'https://open.spotify.com/playlist/2nMsI1wKIB1svXEOB3uyQr?si=4e15fb4e62c44098'
}

export function middleware(request: NextRequest) {
  const host = request.headers.get('host')
  
  if (!host) {
    return NextResponse.next()
  }

  // Extract subdomain from host
  const hostParts = host.split('.')
  
  // Only proceed if we have at least 3 parts (subdomain.domain.tld)
  if (hostParts.length < 3) {
    return NextResponse.next()
  }

  const subdomain = hostParts[0].toLowerCase()

  // Check if this subdomain has a corresponding social media redirect
  if (socialRedirects[subdomain]) {
    return NextResponse.redirect(socialRedirects[subdomain])
  }

  // If no matching subdomain, continue normally
  return NextResponse.next()
}

// Configure which paths the middleware should run on
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
} 