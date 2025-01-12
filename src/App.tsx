import { useEffect } from 'react'

function App() {
	useEffect(() => {
		const tg = window.Telegram.WebApp

		// Initialize Telegram Web App
		tg.ready()

		// Access initialization data (user, chat, etc.)
		// console.log(tg.initDataUnsafe)
		alert(tg.initDataUnsafe.user.first_name)
		alert(tg.initDataUnsafe.user.last_name)
		// alert(tg.initDataUnsafe?.user?.username)

		// Show Telegram's main button
		// tg.MainButton.text = 'Click Me'
		// tg.MainButton.show()

		// Handle button click
		/*tg.MainButton.onClick(() => {
			alert('Button clicked!')
			tg.close() // Close the Web App
		})*/

		// Optional: Listen to theme change events
		/*tg.onEvent('themeChanged', () => {
			console.log('Theme updated:', tg.themeParams)
		})*/

		/*return () => {
			tg.offEvent('themeChanged') // Clean up event listeners
		}*/
	}, [])

	return <div>world 4</div>
}

export default App
