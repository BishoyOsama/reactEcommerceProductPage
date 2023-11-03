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
      },
      keyframes: {
        cartOpacity: {
          "100%": { opacity: "1" },
          "0%": { opacity: "0" }
        }
      },
      animation: {
        cartOpacity: "cartOpacity 400ms ease-in-out"
      },
      backgroundImage: {
        'collection-background': "url('/src/assets/shoes collection.jpg')"
      }
    },
  },
  plugins: [],
}

