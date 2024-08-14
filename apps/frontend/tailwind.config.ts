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
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
                "custom-gradient":
                    "linear-gradient(90deg, #FFDEE9 0%, #B5FFFC 100%)",
            },
            colors: {
                black: { DEFAULT: "#333333" },
            },
            textColor: {
                DEFAULT: "#333333",
            },
        },
    },
    plugins: [],
};

export default config;
