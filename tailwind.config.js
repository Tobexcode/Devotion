/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'ip': '400px',

      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'ex': '806px',

      // 'md': '768px',
      // // => @media (min-width: 768px) { ... }

      'md': '1024px',

      'bl': '1168px',

      'lg': '1254px',

      'md2': '768px',
      // => @media (min-width: 768px) { ... }

      
      // => @media (min-width: 1024px) { ... }

      // 'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      // '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      fontFamily: {
        mazzardH: ["Mazzard H"],
        mazzardM: ["Mazzard M"],
      },
      backgroundImage: {
        arrow: "url('/img/arrowcircleright.jpg')",
        pic: "url('https://i.imgur.com/IQXaTpv.png')",
      },
      colors: {
        transparent: "transparent",
        current: "current",
        "ta-purple": "#37266E",
        "ta-red": "#D83E3D",
        "ta-cyan": "#01A5A6",
        "ta-cream": "#F2DABA",
        "ta-green": "#235245",
        "ta-grey": "#EEEEEE",
        service: "rgba(55, 38, 110, 0.05)",
      },
      borderRadius: {
        "4xl": "1.875rem",
      },
      textColor: {
        taBeige: "#F2DABA",
        taWhite: "#FFFFFF",
        taBlack: "#000000",
      },
    },
    center: true,
    // padding: "16px",
    // screens: {
    //   lg: "1124px",
    //   xl: "1124px",
    //   "2xl": "1124px",
    // },
  },
  plugins: [],
};
