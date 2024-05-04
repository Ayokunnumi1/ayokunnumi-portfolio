/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-gray": "#2A3132",
      },
      backgroundImage: (theme) => ({
        "home-pg-bg-image": "url('./assets/tech-bg.jpg')",
      }),
      borderColor: {
        "custom-green": "#6AB187",
      },
      height: {
        506: "506px",
      },
      width: {
        263: "263px",
      },
      objectFit: {
        cover: "cover",
      },
      rotate: {
        "-45": "-45deg",
      },
    },
  },
  plugins: [],
};
