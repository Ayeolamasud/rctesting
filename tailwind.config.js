/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#C1442E", // Red/Rust (Previously Gold)
        secondary: "#DAA520", // Goldenrod (Swapped or just kept as secondary option)
        light: "#E0E1DF",   // Off-white / Text (Now Background)
        dark: "#000000",    // Pitch Black (Now Text)
        surface: "#FFFFFF", // White for cards on light background
      },
      fontFamily: {
        sans: ['"Albert Sans"', 'sans-serif'],
      },
      boxShadow: {
        'dreamy': '0 20px 40px -15px rgba(0, 0, 0, 0.1)',
      },
      letterSpacing: {
        'tight-heading': '-0.02em',
        'wide-label': '0.05em',
      },
    },
  },
  plugins: [],
};
