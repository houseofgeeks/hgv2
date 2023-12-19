import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      xs: "480px",
      ss: "700px",
      sm: "780px",
      md: "1024px",
      lg: "1186px",
      xl: "1260px",
      "2xl": "1536px",
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'primary': {
          "bg": '#121212',
          "color": '#EE2A7B',
          "navBg": "#01020333"
        },
        "secondary": {
          "bg": "#131414"
        },
      },
    },
  },
  plugins: [],
}
export default config
