/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {

        extend: {
            backgroundImage: {
                'bg-login': "url('../public/assets/carrot.png')",
            },
            fontFamily: {
                "nunito": ["Nunito Sans"]
            },
            colors: {
                gray: '#828282',
                green: '#68A315',
            },
        },
    },
    plugins: [],
}