/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        kumbh: ["kumbh", "sans-serif"]
      },
      colors: {
        "primeOrange": "hsl(26, 100%, 55%)",
        "paleOrange" : "hsl(25, 100%, 94%)",
        "DarkGrayishBlue" : "hsl(219, 9%, 45%)",
        "VeryDarkBlue" : "hsl(220, 13%, 13%)",
        "GrayishBlue": "hsl(220, 14%, 75%)",
        "LightGrayishBlue": "hsl(223, 64%, 98%)",
      }
    },
  },
  plugins: [],
}

