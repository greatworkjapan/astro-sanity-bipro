// tailwind.config.js
import typography from "@tailwindcss/typography";
import daisyui from "daisyui";

export default {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}"],
  theme: { extend: {} },
  plugins: [typography, daisyui],
};
