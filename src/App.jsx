import { Route, Routes } from "react-router-dom"
import "./App.css"
import Accordion from "./components/Accordion"
import Sidebar from "./components/Sidebar"
import RandomColor from "./components/Random-Color"
import StarRating from "./components/Star-Rating"
import ImageSlider from "./components/Image-Slider"
import LoadMoreData from "./components/Load-More-Data"
import TreeView from "./components/Tree-View"
import menus from "./components/Tree-View/data"

function App() {
	return (
		<div className="container">
			<Sidebar />
			<main>
				<Routes>
					<Route path="accordion" element={<Accordion />} />
					<Route path="random_color" element={<RandomColor />} />
					<Route path="star_rating" element={<StarRating noOfStars={10} />} />
					<Route path="image_slider" element={<ImageSlider url={"https://picsum.photos/v2/list"} limit={"10"} page={"1"} />} />
					<Route path="load_more_data" element={<LoadMoreData />} />
					<Route path="tree_view" element={<TreeView menus={menus} />} />
				</Routes>
			</main>
			
		</div>
	)
}

export default App
