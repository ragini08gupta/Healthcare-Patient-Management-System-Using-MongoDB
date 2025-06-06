/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
  daisyui: {
    themes: [
      {
        greenTheme: {
          primary: '#4caf50',       // main green
          secondary: '#81c784',     // light green
          accent: '#388e3c',        // darker green
          neutral: '#1f2937',
          'base-100': '#ffffff',
          info: '#64b5f6',
          success: '#66bb6a',
          warning: '#ffb74d',
          error: '#e57373',
        },
      },
    ],
  },
};
