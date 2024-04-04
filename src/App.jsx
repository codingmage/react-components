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
import QRCodeGenerator from "./components/QR-Code-Generator"
import ModeSwitch from "./components/Light-Dark-Mode"
import ScrollIndicator from "./components/Scroll-Indicator"
import TabTest from "./components/Custom-Tabs"
import ModalTest from "./components/Custom-Modal_Popup"
import GithubProfileFinder from "./components/Github-Profile-Finder"
import SearchAutocomplete from "./components/Search-Autocomplete"
import TicTacToe from "./components/Tic-Tac-Toe"
import FeatureFlagGlobalState from "./components/Feature-Flag/context"
import FeatureFlags from "./components/Feature-Flag"
import UseFetchHookTest from "./components/use-Fetch/test"
import UseOnClickOutsideTest from "./components/use-Outside-Click/test"
import UseWindowResizeTest from "./components/use-Window-Resize/test"

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
					<Route path="qr_code_generator" element={<QRCodeGenerator />} />
					<Route path="theme_toggle" element={<ModeSwitch />} />
					<Route path="scroll_indicator" element={<ScrollIndicator url={"https://dummyjson.com/products?limit=100"} />} />
					<Route path="custom_tabs" element={<TabTest />} />
					<Route path="modal" element={<ModalTest />} />
					<Route path="github_finder" element={<GithubProfileFinder />} />
					<Route path="search_autocomplete" element={<SearchAutocomplete />} />
					<Route path="tictactoe" element={<TicTacToe />} />
					<Route path="feature-flag" element={<FeatureFlagGlobalState><FeatureFlags /></FeatureFlagGlobalState>} />
					<Route path="custom-fetch-hook" element={<UseFetchHookTest />} />
					<Route path="/use-outside-click" element={<UseOnClickOutsideTest />} />
					<Route path="/use-window-resize" element={<UseWindowResizeTest />} />
				</Routes>
			</main>
			
		</div>
	)
}

export default App
