/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    // Ensure that the extend property is correctly placed within the theme
    extend: {
      backdropFilter: {
        'none': 'none',
        'blur': 'blur(20px)',
      },
    }
  },
  plugins: [],
};
