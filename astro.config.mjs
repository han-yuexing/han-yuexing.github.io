// @ts-check
import { defineConfig } from "astro/config";

import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

import { template } from "./src/settings";
import { defaultLang } from "./src/i18n/config";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
    redirects: {
        '/': `/${defaultLang}/blog/1`, // 默认重定向到默认语言的博客第一页
    },
    site: template.website_url,
    base: template.base,
    trailingSlash: 'never',
    integrations: [tailwind(), sitemap(), react()],
    vite: {
      define: {
        'import.meta.env.BUILD_TIME': JSON.stringify(new Date().toISOString().slice(0, 10))
      }
    }
});
