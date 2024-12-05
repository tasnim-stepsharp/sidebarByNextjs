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
          background: "#F2F5F7",
          iconColor: "#636c80",
          lightBlue: "#ECECF8",
          lightBlue2: "#3679FF",
          darkGray: "#141622",
          lightGray: "#5F636E",
          lightGray2: "#EFF0F2",
          lightGray3: "#E8E9EB",
          offwhite: "#F3F6F8",
          offwhite2: "#E3E4E5"
          
        },
        Darksidebar: {
          slate:{
            "100" :"#161614",
            "200" :"#1C1C1A",
            "300": "#222220",
            "400": "#21211F",
            "500": "#090909"
          },
          blue:{
            "100" :"#101A30",
          },
          gray:{
            "100" : "#949597"
          },
          darkgray: "#1C1C1A"
          
        },

      },
    },
  },
  plugins: [],
};
export default config;
