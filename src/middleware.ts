import { sequence } from "astro/middleware";
import { defineMiddleware } from "astro:middleware";

const languageRedirect = defineMiddleware(async (context, next) => {
  const pathname = context.url.pathname;

  const hasLanguagePrefix = /^\/(th|en)(\/|$)/.test(pathname);

  const defaultLanguage = "th";

  if (!hasLanguagePrefix) {
    const newPath = `/${defaultLanguage}${pathname === "/" ? "" : pathname}`;
    return new Response(null, {
      status: 308,
      headers: {
        Location: newPath,
      },
    });
  }

  return next();
});

export const onRequest = sequence(languageRedirect);
