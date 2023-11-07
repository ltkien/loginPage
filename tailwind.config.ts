import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily:{
        Manrope: ["Manrope","san-serif"],
        Inter:["Inter","san-serif"]
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'regal-blue': '#243c5a',
        'dodger-blue':'#3B71FE',
        'gainsboro' :'#E6E8EC',
        'slate-gray':'#777E90',
        'gunmetal':'#23262F',
        'dark-slate-gray': '#353945',
        'silver-chalice':'#B1B5C3',
        'royal-blue':'#475BE8',
        'dodger-blue-0.2':'rgba(59, 113, 254, 0.2) ',
      },
    },
  },
  plugins: [],
}
export default config
