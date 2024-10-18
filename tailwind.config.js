/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#6272A1",
        secondary: "#C0C7DC",
        dark: "#000000",
      },
    },
    variants: {
      extend: {
        backfaceVisibility: ['responsive', 'hover', 'group-hover'],
      },
    },
  },
  plugins: [],
};
