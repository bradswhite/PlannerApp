/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
    "./src/**/*.{js,jsx}",
  ],
	theme: {
	extend: {
		colors: {
			'timberwolf': '#DDD1C7',
			'laurel-green': '#C2CFB2',
			'dark-sea-green': '#8DB580',
			'battleship-grey': '#7E8987',
			'independence': '#4B4A67'
		},
		fontFamily: {
			'body': [ 'sans' ]
			/*'body': [ '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', '"Fira Sans"', '"Droid Sans"', '"Helvetica Neue"', 'sans-serif' ]*/
		}
	},
  },
  plugins: [],
}
