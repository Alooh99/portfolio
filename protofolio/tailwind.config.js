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
       
        dimWhite: "rgba(255, 255, 255, .7)",
        
      },
      fontFamily: {
        bebas: ['"Bebas Neue"', 'sans-serif'],
        slab: ['"Alfa Slab One"', 'cursive'],
        lobster: ['"Lobster"', 'cursive'],
        poppins: ['"Poppins"', 'sans-serif'],
      },
    },
   screens: {
         xs: "480px",
        ss: "620px",
        sm: "640px",  
        md: "768px",  
        lg: "1024px", 
        xl: "1280px", 
        "2xl": "1536px",
        "3xl": "1700px" 
      },
    },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
