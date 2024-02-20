/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        "main-hero": ["84px", "89px"],
      },
      colors: {
        "primary-dark-blue": "#181E4B",
        "primary-orange": "#DF6951",
        "primary-lemon": "#F1A501",
        "primary-text-light": "#5E6282",
        "text-primary": "#1E1D4C",
      },
      fontFamily: {
        volkhov: ["Volkhov", "serif"],
        poppins: ["Poppins", "sans-serif"],
        open_sans: ["Open Sans", "sans-serif"],
      },
      backgroundImage: {
        "hero-image": "url('./src/assets/hero-img.png')",
        "hero-bg": "url('./src/assets/hero-bg.svg')",
        "hero-splash": "url('./src/assets/shape.svg')",
        "destinations-spring": "url('./src/assets/DestinationsSpring.png')",
        "services-deco": "url('./src/assets/CategoriesDeco.png')",
      },
      screens: {
        smallMediumScreens: { max: "1023px" },
        desktop: "1025px",
      },
    },
  },
  plugins: [],
};
