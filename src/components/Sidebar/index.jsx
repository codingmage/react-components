import { Link } from "react-router-dom"
import "./styles.css"

export default function Sidebar() {
	return (
		<div className="sidebar">
			<ul>
				<li>
					<Link to={"/accordion"}>
                        Accordion
					</Link>
				</li>
				<li>
					<Link to={"/random_color"} >
                        Random Color Generator
					</Link>
				</li>
				<li>
					<Link to={"/star_rating"}>
						Star Rating
					</Link>
				</li>
				<li>
					<Link to={"/image_slider"}>
						Image Slider
					</Link>
				</li>
				<li>
					<Link to={"/load_more_data"}>
						Load More Data
					</Link>
				</li>
				<li>
					<Link to={"/tree_view"}>
						Tree View
					</Link>
				</li>
				<li>
					<Link to={"/qr_code_generator"}>
						QR Code Generator
					</Link>
				</li>
				<li>
					<Link to={"/theme_toggle"}>
						Light/Dark Mode
					</Link>
				</li>
				<li>
					<Link to={"/scroll_indicator"}>
						Scroll Indicator
					</Link>
				</li>
				<li>
					<Link to={"/custom_tabs"}>
						Custom Tabs
					</Link>
				</li>
				<li>
					<Link to={"/modal"}>
						Modal Popup
					</Link>
				</li>
			</ul>
		</div>
	)
}