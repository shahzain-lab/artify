import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'blue-green-500': 'linear-gradient(45deg, #82DBF7 0%, #B6F09C 100%)',
        'green-blue-500': 'linear-gradient(225deg, #82DBF7 0%, #B6F09C 100%)',
        'blue-green-600': 'linear-gradient(45deg, #4D62E5 0%, #87DDEE 45.31%, #B6F09C 100%)',
        'green-blue-600': 'linear-gradient(225deg, #4D62E5 0%, #87DDEE 45.31%, #B6F09C 100%)',
        'blue-green-700': 'linear-gradient(45deg, #3045C9 0%, #65BEDA 45.31%, #9AD37F 100%)',
        'green-blue-700': 'linear-gradient(225deg, #3045C9 0%, #65BEDA 45.31%, #9AD37F 100%)',
        'glass-fill': 'linear-gradient(118deg, rgba(215, 237, 237, 0.16) -47.79%, rgba(204, 235, 235, 0.00) 100%)'
      },
      colors: {
        // bg
        'dark': '#131619',
        'dark-800': '#0D0F10',
        'theme': {
          'primary': '#B6F09C'
        },
        'light-dark': '#1A1D21',
        
        // text
        'gray': '#9B9C9E',
        'gray-200': '#E8E9E9',
        'gray-300': '#363A3D',
        'gray-light': '#686B6E',
        'blue': '#82DBF7'
      },
      boxShadow: {
        '1': '0px 0px 64px 0px rgba(182, 240, 156, 0.16)',
        xl: '0px 8px 10px -6px rgba(6, 7, 8, 0.06), 0px 25px 50px -12px rgba(6, 7, 8, 0.16)'
      }
    },
  },
  plugins: [],
}
export default config
