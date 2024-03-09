import { Route, Routes } from "react-router-dom"
import "./App.css"
import Accordion from "./components/Accordion"
import Sidebar from "./components/Sidebar"
import RandomColor from "./components/Random-Color"
import StarRating from "./components/Star-Rating"

function App() {
	return (
		<div className="container">
			<Sidebar />
			<main>
				<Routes>
					<Route path="accordion" element={<Accordion />} />
					<Route path="random_color" element={<RandomColor />} />
					<Route path="star_rating" element={<StarRating noOfStars={10} />} />
				</Routes>
			</main>
			
		</div>
	)
}

export default App
