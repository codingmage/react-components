import { Route, Routes } from "react-router-dom"
import "./App.css"
import Accordion from "./components/Accordion"
import Sidebar from "./components/Sidebar"
import RandomColor from "./components/Random-Color"

function App() {
	return (
		<div className="container">
			<Sidebar />
			<main>
				<Routes>
					<Route path="accordion" element={<Accordion />} />
					<Route path="random_color" element={<RandomColor />} />
				</Routes>
			</main>
			
		</div>
	)
}

export default App
