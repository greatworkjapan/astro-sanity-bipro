// tailwind.config.js
import typography from "@tailwindcss/typography";
import daisyui from "daisyui";

export default {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}"],
  theme: {
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme("colors.gray.800"),
            lineHeight: "1.8",

            h1: {
              color: theme("colors.gray.900"),
              fontSize: theme("fontSize.3xl")[0],
              fontWeight: "700",
              lineHeight: "1.3",
              marginTop: theme("spacing.10"),
              marginBottom: theme("spacing.6"),
              borderBottom: "2px solid #e5e7eb",
              paddingBottom: "0.3em",
            },
            h2: {
              color: theme("colors.gray.900"),
              fontSize: theme("fontSize.2xl")[0],
              fontWeight: "700",
              lineHeight: "1.4",
              marginTop: theme("spacing.8"),
              marginBottom: theme("spacing.4"),
              borderLeft: "4px solid #3b82f6",
              paddingLeft: "0.5em",
            },
            h3: {
              color: theme("colors.gray.900"),
              fontSize: theme("fontSize.xl")[0],
              fontWeight: "600",
              marginTop: theme("spacing.6"),
              marginBottom: theme("spacing.3"),
            },
            h4: {
              color: theme("colors.gray.900"),
              fontSize: theme("fontSize.lg")[0],
              fontWeight: "600",
              marginTop: theme("spacing.4"),
              marginBottom: theme("spacing.2"),
            },

            p: {
              marginTop: theme("spacing.4"),
              marginBottom: theme("spacing.4"),
              color: theme("colors.gray.800"),
            },

            a: {
              color: theme("colors.blue.600"),
              textDecoration: "underline",
              fontWeight: "500",
              "&:hover": { color: theme("colors.blue.800") },
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

            strong: {
              color: theme("colors.gray.900"),
              fontWeight: "700",
            },

            blockquote: {
              borderLeft: "4px solid #ddd",
              paddingLeft: theme("spacing.4"),
              color: theme("colors.gray.700"),
              fontStyle: "italic",
              marginTop: theme("spacing.6"),
              marginBottom: theme("spacing.6"),
            },

            code: {
              backgroundColor: "#f3f4f6",
              padding: "0.2em 0.4em",
              borderRadius: "4px",
              fontSize: "0.9em",
              fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
              color: theme("colors.pink.600"),
            },
            "pre code": {
              backgroundColor: "transparent",
              padding: 0,
              borderRadius: 0,
              color: "inherit",
              fontSize: "inherit",
            },
            pre: {
              backgroundColor: "#1e293b",
              color: "#f8fafc",
              padding: theme("spacing.4"),
              borderRadius: theme("borderRadius.lg"),
              overflowX: "auto",
            },

            table: {
              width: "100%",
              borderCollapse: "collapse",
              marginTop: theme("spacing.6"),
              marginBottom: theme("spacing.6"),
              fontSize: "0.95em",
            },
            th: {
              border: "1px solid #e5e7eb",
              padding: theme("spacing.2"),
              backgroundColor: "#f9fafb",
              fontWeight: "600",
              textAlign: "left",
            },
            td: {
              border: "1px solid #e5e7eb",
              padding: theme("spacing.2"),
            },
          },
        },
      }),
    },
  },
  plugins: [daisyui, typography],
};
