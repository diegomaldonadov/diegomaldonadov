module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      primary: 'Orbitron',
      secondary: 'Rajdhani',
      tertiary: 'Aldrich',
    },
    container: {
      padding: {
        DEFAULT: '15px',
      },
    },
    screens: {
      sm: '390px',
      md: '768px',
      lg: '960px',
      xl: '1200px',
    },
    extend: {
      colors: {
        primary: '#0a0a0a',
        accent: '#179eff',
      },
      backgroundImage: {
        site: "url('./assets/site-bg1.png')",
        about: "url('./assets/about.png')",
        services: "url('./assets/services1.png')",
      },
    },
  },
  plugins: [],
};
