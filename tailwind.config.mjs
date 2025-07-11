/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    theme: {
        extend: {
            typography: {
                DEFAULT: {
                    css: {
                        h1: {
                            fontSize: '1.75rem',
                        },
                        h2: {
                            fontSize: '1.5rem',
                        },
                        h3: {
                            fontSize: '1.25rem',
                        },
                        p: {
                            fontSize: '1rem',
                        },
                        li: {
                            fontSize: '1rem',
                        },
                    },
                },
            },
        },
    },
    plugins: [require("@tailwindcss/typography"), require("daisyui")],
    daisyui: {
        themes: [
            {
                light: {
                    "primary": "#1e40af",        /* Deep blue */
                    "primary-content": "#FFFFFF", /* White text on primary */
                    "secondary": "#3b82f6",      /* Medium blue */
                    "secondary-content": "#FFFFFF", /* White text on secondary */
                    "accent": "#93C5FD",         /* Light blue */
                    "accent-content": "#FFFFFF", /* White text on accent */
                    "neutral": "#1e3a8a",
                    "neutral-content": "#FFFFFF",
                    "base-100": "#FFFFFF",
                    "base-200": "#EFF6FF",       /* Very light blue */
                    "base-300": "#DBEAFE",       /* Light blue */
                    "btn-primary-content": "#FFFFFF", /* Ensure button text is white */
                    "btn-secondary-content": "#FFFFFF",
                    "btn-accent-content": "#FFFFFF",
                    "btn-info-content": "#FFFFFF",
                    "btn-success-content": "#FFFFFF",
                    "btn-warning-content": "#FFFFFF",
                    "btn-error-content": "#FFFFFF",
                    "info": "#0EA5E9",
                    "success": "#10B981",
                    "warning": "#F59E0B",
                    "error": "#EF4444",
                }
            },
            "dark",
            "cupcake",
            "bumblebee",
            "emerald",
            "corporate",
            "synthwave",
            "retro",
            "cyberpunk",
            "valentine",
            "halloween",
            "garden",
            "forest",
            "aqua",
            "lofi",
            "pastel",
            "fantasy",
            "wireframe",
            "black",
            "luxury",
            "dracula",
            "cmyk",
            "autumn",
            "business",
            "acid",
            "lemonade",
            "night",
            "coffee",
            "winter",
            "dim",
            "nord",
            "sunset",
        ],
    },
    // darkMode: ['selector', '[data-theme="synthwave"]']
};
