import plugin from "tailwindcss/plugin";

const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./public/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: ["class", "selector"],
  theme: {
    extend: {
      backgroundImage: {},
      colors: {
        primary: "var(--bg-primary)",
        secondary: "var(--bg-secondary)",
        accent: "var(--bg-accent)",
        fourth: "var(--bg-fourth)",
        fifth: "var(--bg-fifth)",
        sixth: "var(--bg-sixth)",
        tP: "var(--text-primary)",
        tS: "var(--text-secondary)",
        tTh: "var(--text-third)",
      },
      animation: {},
      keyframes: {},
    },
  },
  plugins: [
    addVariablesForColors,

    plugin(function ({ addBase, theme }) {
      addBase({
        ":root": {
          "--bg-primary": theme("colors.primary"),
          "--bg-secondary": theme("colors.secondary"),
          "--bg-third": theme("colors.third"),
          "--text-primary": theme("colors.textPrimary"),
        },
        "@media (prefers-color-scheme: dark)": {
          ":root": {
            "--bg-primary": theme("colors.primary"),
            "--bg-secondary": theme("colors.secondary"),
            "--text-primary": theme("colors.textPrimary"),
          },
        },
      });
    }),
  ],
};

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}
