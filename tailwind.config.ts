import type { Config } from "tailwindcss";

const config: Config = {
  important: true,
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)"],
        serif: ["var(--font-rubik)"],
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "2rem",
        sm: "3rem",
        lg: "5rem",
        xl: "6rem",
        "2xl": "6rem",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#00925d",
          secondary: "#28262d",
          accent: "#9ca4ab",
          neutral: "#fff",
          "base-100": "#000",
          info: "#a8a29e",
          success: "#15803d",
          warning: "#b45309",
          error: "#b91c1c",
        },
      },
    ],
  },
};
export default config;
