import { defineConfig } from "astro/config";
// astro-icon
import icon from "astro-icon";
// tailwind
import tailwind from "@astrojs/tailwind";
// alpine
import alpinejs from "@astrojs/alpinejs";
// vercel serverless ssr
import vercelServerless from '@astrojs/vercel/serverless';

// https://astro.build/config
export default defineConfig({
  integrations: [icon(), tailwind(), alpinejs()],
  site: "https://www.jordanmingle.dev",
  base: "/",
  output: "server",
  adapter: vercelServerless({
    webAnalytics: {
      enabled: true,
    },
    maxDuration: 8,
  }),
});
