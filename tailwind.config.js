/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        modelS: "url('./assets/modelS.jpg')",
        modelY: "url('./assets/modelY.jpg')",
        model3: "url('./assets/model3.jpg')",
        truck: "url('./assets/truck.jpg')",
        modelX: "url('./assets/ModelX.jpeg')",
      },
    },
  },

  plugins: [],
};
