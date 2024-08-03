/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class", '[data-theme="dark"]'],
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        "geist-100": ["Geist-Thin"],
        "geist-200": ["Geist-UltraLight"],
        "geist-300": ["Geist-Light"],
        "geist-400": ["Geist-Regular"],
        "geist-500": ["Geist-Medium"],
        "geist-600": ["Geist-SemiBold"],
        "geist-700": ["Geist-Bold"],
        "geist-800": ["Geist-Black"],
        "geist-900": ["Geist-UltraBlack"],
        "geist-mono-100": ["GeistMono-Thin"],
        "geist-mono-200": ["GeistMono-UltraLight"],
        "geist-mono-300": ["GeistMono-Light"],
        "geist-mono-400": ["GeistMono-Regular"],
        "geist-mono-500": ["GeistMono-Medium"],
        "geist-mono-600": ["GeistMono-SemiBold"],
        "geist-mono-700": ["GeistMono-Bold"],
        "geist-mono-800": ["GeistMono-Black"],
        "geist-mono-900": ["GeistMono-UltraBlack"],
      },
      colors: {
        // light mode
        "white": "#ffffff",
        "black": "#0c0a09",
        "pigment-green": "#16a34a",
        "lavender-blush": "#fff1f2",
        "anti-flash-white": "#f4f4f5",
        "eerie-black": "#18181b",
        "dim-gray": "#71717a",
        "platinum": "#e4e4e7",
        // dark mode
        "smoky-black": "#0c0a09",
        "white-smoke": "#f2f2f2",
        "dark-pastel-green": "#22c55e",
        "dark-green": "#052e16",
        "raisin-black": "#27272a",
        "seasalt": "#fafafa",
        "dark-eerie-black": "#262626",
        "cadet-gray": "#a1a1aa",
      },
      backgroundImage: {
        "body-background": "url('/src/images/backgrounds/silver_scales.webp')",
        "body-background-dark":
          "url('/src/images/backgrounds/black_scales.webp')",
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
