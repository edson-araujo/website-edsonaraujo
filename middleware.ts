import createMiddleware from 'next-intl/middleware';
import { languages } from './constants/language';

export default createMiddleware({
  locales: languages,
  defaultLocale: 'pt',
});

export const config = {
  matcher: ['/', '/(pt|en|es|fr)/:path*'],
};
