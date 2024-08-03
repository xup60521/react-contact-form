/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                dm: ["DM Sans", "sans-serif"]
            },
            colors: {
                c_green200: "hsl(148, 38%, 91%)",
                c_green600: "hsl(169, 82%, 27%)",
                c_red: "hsl(0, 66%, 54%)",
                c_grey500: "hsl(186, 15%, 59%)",
                c_grey900: "hsl(187, 24%, 22%)",
            }
        },
    },
    plugins: [],
}

