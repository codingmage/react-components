import useLocalStorage from "./useLocalStorage"
import "./theme.css"

export default function ModeSwitch() {

	const [theme, setTheme] = useLocalStorage("theme", "dark")

	function handleToggleTheme() {
		setTheme(theme === "light" ? "dark" : "light")
	}

	return (
		// eslint-disable-next-line react/no-unknown-property
		<div className="light-dark-mode" theme={theme}>
			<div className="theme-container">
				<p>Hello world</p>
				<button onClick={handleToggleTheme}>Change theme</button>
			</div>
		</div>
	)
}