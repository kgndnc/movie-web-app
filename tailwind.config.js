/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				primary: '#2397a7',
				secondary: '#c86003',
			},
			screens: {
				xxs: '320px',
				xs: '420px',
			},
		},
	},

	plugins: [],
}

