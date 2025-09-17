// tailwind.config.js
/** @type {import('tailwindcss').Config} */
import typography from "@tailwindcss/typography";
import daisyui from "daisyui";

export default {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte,md,mdx}"],
  theme: {
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            h1: {
              fontSize: theme("fontSize.3xl"),
              fontWeight: "700",
              marginTop: theme("spacing.10"),
              marginBottom: theme("spacing.6"),
              lineHeight: "1.3",
              borderBottom: "2px solid #e5e7eb",
              paddingBottom: "0.3em",
            },
            h2: {
              fontSize: theme("fontSize.2xl"),
              fontWeight: "700",
              marginTop: theme("spacing.8"),
              marginBottom: theme("spacing.4"),
              lineHeight: "1.4",
              borderLeft: "4px solid #3b82f6",
              paddingLeft: "0.5em",
            },
            h3: {
              fontSize: theme("fontSize.xl"),
              fontWeight: "600",
              marginTop: theme("spacing.6"),
              marginBottom: theme("spacing.3"),
            },
            p: {
              marginTop: theme("spacing.4"),
              marginBottom: theme("spacing.4"),
              lineHeight: "1.8",
            },
            ul: {
              listStyleType: "disc",
              marginLeft: theme("spacing.6"),
              marginTop: theme("spacing.3"),
              marginBottom: theme("spacing.3"),
            },
            ol: {
              listStyleType: "decimal",
              marginLeft: theme("spacing.6"),
              marginTop: theme("spacing.3"),
              marginBottom: theme("spacing.3"),
            },
            li: {
              marginTop: theme("spacing.1"),
              marginBottom: theme("spacing.1"),
            },
            a: {
              color: theme("colors.blue.600"),
              textDecoration: "underline",
              "&:hover": { color: theme("colors.blue.800") },
            },
            table: {
              width: "100%",
              borderCollapse: "collapse",
              marginTop: theme("spacing.6"),
              marginBottom: theme("spacing.6"),
            },
            th: {
              border: "1px solid #ddd",
              padding: theme("spacing.2"),
              backgroundColor: "#f9f9f9",
              fontWeight: "600",
              textAlign: "left",
            },
            td: {
              border: "1px solid #ddd",
              padding: theme("spacing.2"),
            },
            blockquote: {
              borderLeft: "4px solid #ddd",
              paddingLeft: theme("spacing.4"),
              color: "#555",
              fontStyle: "italic",
            },
            code: {
              backgroundColor: "#f3f4f6",
              padding: "0.2em 0.4em",
              borderRadius: "4px",
              fontSize: "0.9em",
            },
          },
        },
      }),
    },
  },
  daisyui: {
    themes: [
      {
        dark: {
          primary: "#ffae9c",
          "primary-content": "#171227",
          secondary: "#fff2d7",
          "secondary-content": "#171227",
          accent: "#e3f1ff",
          "accent-content": "#171227",
          neutral: "#2e293c",
          "neutral-content": "#ffffff",
          "base-100": "#171227",
          "base-200": "#2e293c",
          "base-content": "#ffffff",
        },
      },
      {
        light: {
          primary: "#ffae9c",
          "primary-content": "#171227",
          secondary: "#fff2d7",
          "secondary-content": "#171227",
          accent: "#e3f1ff",
          "accent-content": "#171227",
          neutral: "#171227",
          "neutral-content": "#ffffff",
          "base-100": "#ffffff",
          "base-200": "#d7d8e4",
          "base-content": "#171227",
        },
      },
    ],
  },
  plugins: [typography, daisyui],
};
