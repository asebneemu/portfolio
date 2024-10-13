/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"], // Sans-serif ailesini Inter olarak ayarlıyoruz
      },
      backgroundImage: {
        'green-to-blue': 'linear-gradient(to right, #00ff00 70%, #0000ff 30%)',
      },
      screens: {
        xs: '480px', // 480px ile başlayan ekran boyutları için xs breakpointe sahip olursun
      },
    },
  },
  plugins: [],
};
