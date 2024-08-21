/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'runthecode': "url('/src/assets/img/runthecode-mockup.jpg')",
        'pomodoro': "url('/src/assets/img/pomodoro-mockup.jpg')",
        'carhub': "url('/src/assets/img/carhub-mockup.jpg')",
        'socialapp': "url('/src/assets/img/socialapp-mockup.png')",
      }
    },
  },
  plugins: [
    function ({addUtilities}) {
      const newUtilities = {
        ".scrollbar-hide::-webkit-scrollbar": {
          display: "none",
        },
        ".scrollbar-hide": {
          "-ms-overflow-style": "none", // Internet Explorer 10+
          "scrollbar-width": "none",    // Firefox
        },
      }
      addUtilities(newUtilities)
    }
  ],
}

