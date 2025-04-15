module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}', // důležité pro React + Vite
  ],
  theme: {
    extend: {
      spacing: {
        2: '0.5rem', // definování vlastních hodnot pro spacing
        4: '1rem',
        8: '2rem',
        // přidej další hodnoty podle potřeby
      },
    },
  },
  plugins: [],
};
