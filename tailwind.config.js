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
        insideModelS: "url('./assets/insideModelS.jpg')",
        insideModelY: "url('./assets/insideModelY.jpg')",
        insideModel: "url('./assets/inside.jpg')",
        charger: "url('./assets/charger.jpg')",
      },
    },
  },

  plugins: [],
};
