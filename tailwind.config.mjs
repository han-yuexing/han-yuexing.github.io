/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            h1: {
              fontSize: "1.75rem",
            },
            h2: {
              fontSize: "1.5rem",
            },
            h3: {
              fontSize: "1.25rem",
            },
            p: {
              fontSize: "1rem",
            },
            li: {
              fontSize: "1rem",
            },
          },
        },
      },
    },
  },
};
