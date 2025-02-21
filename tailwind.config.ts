import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    keyframes: {
      my_ping: {
        "0%": {
          transform: "scale(0.5)",
          opacity: "1",
        },
        "35%, 50%": {
          transform: "scale(2)",
          opacity: "0",
        },
        "75%, 100%": {
          transform: "scale(0.5)",
          opacity: "0",
        },
      }
    },
    animation: {
      'status-pulse': 'my_ping 2s linear infinite',
    },
  },
  plugins: [],
};
export default config;
