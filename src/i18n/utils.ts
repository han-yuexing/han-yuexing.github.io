import { ui, defaultLang, languages } from './config';

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in languages) {
    return lang as keyof typeof languages;
  }
  return defaultLang;
}

export function useTranslations(lang: keyof typeof languages) {
  return function t(key: keyof typeof ui[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  }
}

export function getLocalizedPathname(pathname: string, lang: keyof typeof languages) {
  // Extract the current language prefix if it exists
  let path = pathname;
  for (const langKey of Object.keys(languages)) {
    if (pathname.startsWith(`/${langKey}/`)) {
      path = pathname.replace(`/${langKey}/`, '/');
      break;
    }
  }
  
  // Special case for root path
  if (path === '/' || path === '') {
    return lang === defaultLang ? '/' : `/${lang}/`;
  }

  // Add the new language prefix
  if (lang === defaultLang) {
    return path;
  } else {
    // Remove leading slash to avoid double slashes
    const cleanPath = path.startsWith('/') ? path.substring(1) : path;
    return `/${lang}/${cleanPath}`;
  }
} 