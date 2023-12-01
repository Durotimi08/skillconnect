import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      'cprimary': '#09bc8a',
      'csecondary': '#004346',
      'ctertiary': '#172a3a',
      'black': '#000000',
      'white': '#ffffff',
    },
    fontFamily: {
      adamina: ["adamina", "cursive"],
      bowlbyrope: ["bowlbyone", "cursive"],
      manrope: ["manrope", "cursive"],
      inter: ["inter", "cursive"],
    },
  },
  plugins: [require("daisyui")],
}
export default config
