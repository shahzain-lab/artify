import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/modules/**/*.{js,ts,jsx,tsx,mdx}',
    './src/layout/**/*.{js,ts,jsx,tsx,mdx}',
    './src/utils/**/*.{js,ts,jsx,tsx,mdx}',
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
        'glass-fill': 'linear-gradient(118deg, rgba(215, 237, 237, 0.16) -47.79%, rgba(204, 235, 235, 0.00) 100%)',
        'glass-fill-light': 'linear-gradient(180deg, rgba(19, 22, 25, 0.00) 0%, #131619 100%)'
      },
      colors: {
        // Noble Black
        'noble-black-100': '#E8E9E9',
        'noble-black-200': '#CDCECF',
        'noble-black-300': '#CCCED0',
        'noble-black-400': '#686B6E',
        'noble-black-500': '#363A3D',
        'noble-black-600': '#1A1D21',
        'noble-black-700': '#131619',
        'noble-black-800': '#0D0F10',
        'noble-black-900': '#060708',
        'noble-black-light': '#ffffff34',
        // Day Blue
        'day-blue-100': '#EBEDFC',
        'day-blue-200': '#D2D8F9',
        'day-blue-300': '#A6B0F2',
        'day-blue-400': '#7989EC',
        'day-blue-500': '#4D62E5',
        'day-blue-600': '#3045C9',
        'day-blue-700': '#243497',
        'day-blue-800': '#182364',
        'day-blue-900': '#0C1132',
        // Purple Blue
        'purple-blue-100': '#F0E8FD',
        'purple-blue-200': '#DECCFB',
        'purple-blue-300': '#BD9AF8',
        'purple-blue-400': '#9C67F4',
        'purple-blue-500': '#7C35F1',
        'purple-blue-600': '#5F18D4',
        'purple-blue-700': '#47129F',
        'purple-blue-800': '#300C6A',
        'purple-blue-900': '#180635',
        // Sun Glow
        'sun-glow-100': '#FFFAEA',
        'sun-glow-200': '#FFF3D1',
        'sun-glow-300': '#FFE8A3',
        'sun-glow-400': '#FFDC75',
        'sun-glow-500': '#FFD147',
        'sun-glow-600': '#E2B42B',
        'sun-glow-700': '#AA8720',
        'sun-glow-800': '#715A15',
        'sun-glow-900': '#392D0B',
        // Stem Green
        'stem-green-100': '#F7FDF4',
        'stem-green-200': '#EDFBE6',
        'stem-green-300': '#DBF7CD',
        'stem-green-400': '#C8F4B4',
        'stem-green-500': '#ADE394',
        'stem-green-600': '#9AD37F',
        'stem-green-700': '#739F5F',
        'stem-green-800': '#4D6A3F',
        'stem-green-900': '#263520',
        'stem-green-light': '#39ffa338',
        // Heisenberg Blue
        'heisenberg-blue-100': '#F1FBFE',
        'heisenberg-blue-200': '#E0F6FD',
        'heisenberg-blue-300': '#C0EDFB',
        'heisenberg-blue-400': '#A1E4F9',
        'heisenberg-blue-500': '#38D7ED',
        'heisenberg-blue-600': '#65BEDA',
        'heisenberg-blue-700': '#4C8FA4',
        'heisenberg-blue-800': '#335F6D',
        'heisenberg-blue-900': '#193037',
        // Happy Orange
        'happy-orange-100': '#FFF2E9',
        'happy-orange-200': '#FF7B20',
        'happy-orange-300': '#391C08',
        // Electric Green
        'electric-green-100': '#F3FBF7',
        'electric-green-200': '#4AC97E',
        'electric-green-300': '#122B1D',
        // Red Power
        'red-power-100': '#FBECEC',
        'red-power-200': '#D90200',
        'red-power-300': '#2F0F0E',
        // Gray Light
        'gray-light-100': '#9B9C9E',
        // Theme
        'theme-greenish': '#B6F09C',

        'bg-layer': 'rgba(6, 7, 8, 0.64)',
        'glass-modal': 'rgba(26, 29, 33, 0.96)',
        'glass-stroke': 'rgba(255, 255, 255, 0.08)',
        'blue-md': '#82DBF7',
        'purple-md': '#A6B0F2',
      },
      boxShadow: {
        'xl': '0px 8px 10px -6px rgba(6, 7, 8, 0.06), 0px 25px 50px -12px rgba(6, 7, 8, 0.16)',
        'xl-inset': '0px 8px 12px 0px rgba(255, 255, 255, 0.04) inset, 0px 24px 64px -16px rgba(0, 0, 0, 0.24), 16px 24px 64px -24px rgba(255, 255, 255, 0.04) inset'
      },
      zIndex: {
        '9999': '9999'
      }
    },
  },
  safelist: [
    {
      pattern: /^(bg|text|border)-noble-black-[1-9]00$/
    },
    {
      pattern: /^(bg|text|border)-day-blue-[1-9]00$/
    },
    {
      pattern: /^(bg|text|border)-purple-blue-[1-9]00$/
    },
    {
      pattern: /^(bg|text|border)-sun-glow-[1-9]00$/
    },
    {
      pattern: /^(bg|text|border)-stem-green-[1-9]00$/
    },
    {
      pattern: /^(bg|text|border)-heisenberg-blue-[1-9]00$/
    },
    {
      pattern: /^(bg|text|border)-happy-orange-[1-9]00$/
    },
    {
      pattern: /^(bg|text|border)-electric-green-[1-9]00$/
    },
    {
      pattern: /^(bg|text|border)-red-power-[1-9]00$/
    },
  ],
  plugins: [],
}
export default config
