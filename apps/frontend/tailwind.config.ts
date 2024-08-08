import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/(business)/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/(business)/**/**/*.{js,ts,jsx,tsx,mdx}",
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