// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#333333', // 深灰色
        accent: '#B8860B', // 古老金屬色
        background: '#E0E0E0', // 較深的灰色背景色
        textPrimary: '#FFFFFF', // 主要文字顏色
        textSecondary: '#CCCCCC', // 次要文字顏色
      },
      fontFamily: {
        sans: ['Helvetica', 'Arial', 'sans-serif'],
        heading: ['Montserrat', 'Helvetica', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
