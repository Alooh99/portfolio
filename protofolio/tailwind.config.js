// tailwind.config.js
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      keyframes: {
         flip: {
      '0%': { transform: 'rotateY(0deg)' },
      '50%': { transform: 'rotateY(180deg)' },
      '100%': { transform: 'rotateY(360deg)' },
    },
  },
  animation: {
    'flip-3s': 'flip 3s ease-in-out infinite',
  },
      colors: {
        primary: "#00040f",
        secondary: "#00f6ff",
        dimWhite: "rgba(255, 255, 255, .7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
      },
      fontFamily: {
        mono: ['Monoton', 'ui-monospace', 'Space Grotesk', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', 'sans-serif', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'],
        bebas: ['"Bebas Neue"', 'sans-serif'],
        slab: ['"Alfa Slab One"', 'cursive'],
        lobster: ['"Lobster"', 'cursive'],
        poppins: ['"Poppins"', 'sans-serif'],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
