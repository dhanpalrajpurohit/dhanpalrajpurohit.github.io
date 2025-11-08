export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ['"Inter"', "sans-serif"],
      },
      container: {
        center: true,
        padding: "1rem",
      },
      colors: {
        brand: {
          blue: "#2563eb",
          light: "#e0f2fe",
        },
      },
    },
  },
  plugins: [],
};
