import { defineConfig } from "@tailwindcss/vite";

export default defineConfig({
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				sans: ["Roboto", "sans-serif"],
			},
			gridTemplateColumns: {
				"70/30": "70% 28%",
			},
		},
	},
});
