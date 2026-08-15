import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg:            "#0d3d2c",
        bg2:           "#1a5c45",
        primary:       "#c9a878",
        "primary-dark":"#0d3d2c",
        "primary-light":"#c8e6d0",
        "primary-muted":"#8cb89a",
        text:          "#f5ede0",
        "text-mid":    "#d4b896",
        "text-light":  "#fdfcf8",
        accent:        "#c9a84c",
        "glass-base":  "rgba(26,92,69,0.40)",
        error:         "#E05C5C",
        success:       "#3dac7a",
      },
      fontFamily: {
        cormorant: ["'Cormorant Garamond'", "Georgia", "serif"],
        cinzel:    ["'Cinzel'",             "Georgia", "serif"],
        playfair:  ["'Playfair Display'",   "Georgia", "serif"],
        sans:      ["system-ui", "-apple-system", "sans-serif"],
      },
      borderRadius: {
        sm:   "8px",
        md:   "16px",
        lg:   "24px",
        xl:   "32px",
        full: "999px",
      },
    },
  },
  plugins: [],
};

export default config;