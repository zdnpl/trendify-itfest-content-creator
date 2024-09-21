/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,svelte,ts}",
    "./index.html", // Mengawasi file index.html
    "./creator.html", // Mengawasi file creator.html di dalam folder views
  ],

  theme: {
    extend: {
      colors: {
        "primary-bg": "#101213",
        "secondary-bg": "#222629",
        "primary-text": "#BC1451",
        "pink-text": "#FA88CC",
        "blue-text": "#4C81F4",
      },
    },
  },
  plugins: [],
};
