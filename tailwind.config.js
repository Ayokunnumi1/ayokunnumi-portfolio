/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-gray": "#2A3132",
      },
      backgroundImage: (theme) => ({
        "home-pg-bg-image": "url('../src/asset/tech-bg.jpg')",
      }),
    },
  },
  plugins: [],
};