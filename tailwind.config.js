// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte}"
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        dark: {
          "primary": "#ffae9c",
          "primary-content": "#171227",
          "secondary": "#fff2d7",
          "secondary-content": "#171227",
          "accent": "#e3f1ff",
          "accent-content": "#171227",
          "neutral": "#2e293c",
          "neutral-content": "#ffffff",
          "base-100": "#171227",
          "base-200": "#2e293c",
          "base-content": "#ffffff",
        },
      },
      {
        light: {
          "primary": "#ffae9c",
          "primary-content": "#171227",
          "secondary": "#fff2d7",
          "secondary-content": "#171227",
          "accent": "#e3f1ff",
          "accent-content": "#171227",
          "neutral": "#171227",
          "neutral-content": "#ffffff",
          "base-100": "#ffffff",
          "base-200": "#d7d8e4",
          "base-content": "#171227",
        },
      },
    ],
  },
};
