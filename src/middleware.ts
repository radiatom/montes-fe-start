import { NextRequest } from 'next/server'
import createIntlMiddleware from 'next-intl/middleware'

import { defaultLocales, locales } from '@/i18n'

export default async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname
  const defaultLocale = request.headers.get('accept-language')?.split(',')?.at(0) || defaultLocales

  if (['manifest.json', 'sitemap.ts', 'robots.ts', 'icons'].some((path) => pathname.includes(path)))
    return

  const pathnameIsMissingLocale = locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`,
  )
  if (pathnameIsMissingLocale) {
    request.nextUrl.pathname = `/${pathname.split('/')?.slice(1, 2)}${pathname.startsWith('/') ? '' : '/'}${pathname.split('/')?.slice(3).join(',').replaceAll(',', '/')}`
  }

  const handleI18nRouting = createIntlMiddleware({
    locales,
    defaultLocale,
  })

  return handleI18nRouting(request)
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)', '/(en|uk)/:path*'],
}
