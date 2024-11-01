import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        header: '#262626', 
        buyNow: '#82b440',
        buyNowHover: '#7AA93C',
        greenBody: '#034833',
        playButtonZoom: '#046b4b',
        getAnAppointment: '#76c644',
        button: '#83CD20',
      },
    },
  },
  plugins: [],
};
export default config;
