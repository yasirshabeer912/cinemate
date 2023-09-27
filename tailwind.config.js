module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode:'class',
  theme: {
    extend: {
      screens :{
        "others": {'min': '340px','max':'1280px'}
      }
    },
  },
  plugins: [],
}