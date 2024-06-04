/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,jsx}"],
  theme: {
    extend: {
      backgroundClip: {
        text: 'text',
      },
      colors: {
        transparent: 'transparent',
      },
    },
  },
  plugins: [
    require('daisyui'),
    function ({ addUtilities }) {
      const newUtilities = {
        '.bg-clip-text': {
          '-webkit-background-clip': 'text',
          'background-clip': 'text',
        },
        '.text-transparent': {
          color: 'transparent',
        },
        '.perspective-1px': {
          perspective: '1px',
        }
      };

      addUtilities(newUtilities, ['responsive']);
    },
  ],
}

