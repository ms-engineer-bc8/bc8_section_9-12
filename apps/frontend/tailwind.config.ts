import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/business/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/business/**/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/(customer)/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/(customer)/**/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/(customer)/**/**/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/(customer)/**/**/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/commons/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
            },
            colors: {
                black: { DEFAULT: "#494949" },
            },
            textColor: {
                DEFAULT: "#494949",
            },
            fontSize: {
                'xs': ['0.75rem', { lineHeight: '1rem' }],
                'sm': ['1rem', { lineHeight: '1.5rem' }],
                'base': ['1.25rem', { lineHeight: '1.75rem' }],
                'h3': ['1.25rem', { lineHeight: '1.75rem' }],
                'h2': ['1.5rem', { lineHeight: '2rem' }],
                'h1': ['1.875rem', { lineHeight: '2.25rem' }],
            },
        },
    },
    plugins: [],
};

export default config;
