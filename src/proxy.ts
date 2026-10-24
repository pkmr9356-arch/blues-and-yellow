import { createServerClient } from '@supabase/ssr';
import { NextResponse, type NextRequest } from 'next/server';
import { isAuthorizedAdmin } from '@/lib/supabase-server';

function redirectWithCookies(url: URL, sourceResponse: NextResponse): NextResponse {
  const redirectResponse = NextResponse.redirect(url);
  sourceResponse.cookies.getAll().forEach((cookie) => {
    redirectResponse.cookies.set(cookie.name, cookie.value, cookie);
  });
  return redirectResponse;
}

export async function proxy(request: NextRequest) {
  let supabaseResponse = NextResponse.next({
    request,
  });

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

  const supabase = createServerClient(supabaseUrl, supabaseKey, {
    cookies: {
      getAll() {
        return request.cookies.getAll();
      },
      setAll(cookiesToSet) {
        cookiesToSet.forEach(({ name, value }) => request.cookies.set(name, value));
        supabaseResponse = NextResponse.next({
          request,
        });
        cookiesToSet.forEach(({ name, value, options }) =>
          supabaseResponse.cookies.set(name, value, options)
        );
      },
    },
  });

  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  const pathname = request.nextUrl.pathname;

  if (pathname === '/admin/login') {
    if (user && isAuthorizedAdmin(user)) {
      const url = request.nextUrl.clone();
      url.pathname = '/admin';
      return redirectWithCookies(url, supabaseResponse);
    }
    return supabaseResponse;
  }

  // All other /admin routes (/admin, /admin/leads, etc.)
  if (error || !user) {
    const url = request.nextUrl.clone();
    url.pathname = '/admin/login';
    url.searchParams.set('next', pathname);
    return redirectWithCookies(url, supabaseResponse);
  }

  if (!isAuthorizedAdmin(user)) {
    const url = request.nextUrl.clone();
    url.pathname = '/admin/login';
    url.searchParams.set('error', 'unauthorized');
    return redirectWithCookies(url, supabaseResponse);
  }

  return supabaseResponse;
}

export const config = {
  matcher: ['/admin', '/admin/:path*'],
};
