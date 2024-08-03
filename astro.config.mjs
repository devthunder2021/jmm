import { defineConfig } from 'astro/config';
// astro-icon
import icon from "astro-icon";
// tailwind
import tailwind from "@astrojs/tailwind";
// alpine
import alpinejs from "@astrojs/alpinejs";

// https://astro.build/config
export default defineConfig({
  integrations: [icon(), tailwind(), alpinejs()]
});