module.exports ={
    mode: "jit",
    content: ["./src/**/*.{js,jsx,ts,tsx,html}"],
    theme: {
        extend: {
            fontFamily: {
                'poppins': ["Poppins", "sans-serif"],
                'font-poppins': ['Poppins', 'sans-serif'],
            },
        },
    },
    plugins: [],
};