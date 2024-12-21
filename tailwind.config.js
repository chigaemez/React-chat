/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom-light': '4px 4px 10px rgba(0, 0, 0, 0.1)',
        'custom-dark': '8px 8px 15px rgba(0, 0, 0, 0.5)',
        'neon': '0 0 10px #39ff14, 0 0 20px #39ff14, 0 0 30px #39ff14',
      },
    },
  },
  plugins: [],
}