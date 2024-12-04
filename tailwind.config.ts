import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        sidebar: {
          active: "#6b32ec",
          background: "#F3F6F803",
          iconColor: "#636c80",
          lightBlue: "#ECECF8",
          darkGray: "#141622",

        },
        
      },
    },
  },
  plugins: [],
};
export default config;
