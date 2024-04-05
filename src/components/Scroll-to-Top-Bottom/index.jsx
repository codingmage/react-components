import { useRef } from "react"
import useFetch from "../use-Fetch"
import "./styles.css"

export default function ScrollToTopAndBottom() {

	const {data, error, pending} = useFetch("https://dummyjson.com/products?limit=50", {})

	const bottomRef = useRef(null)

	function handleScrollToTop() {
		window.scrollTo({
			top: 0, left: 0, behavior: "smooth"
		})
	}

	function handleScrollToBottom() {
		bottomRef.current.scrollIntoView({behavior: "smooth"})
	}

	if (pending) return <h1>Loading. Please wait...</h1>

	if (error) return <h1>Error occurred. Please try again.</h1>


	return (
		<div className="top-bottom-container">
			<h1>Scroll to Top and Bottom Feature</h1>
			<h3>This is the top section</h3>
			<button onClick={handleScrollToBottom}>Scroll to Bottom</button>
			<ul style={{listStyleType: "none"}}>
				{
					data && data.products && data.products.length 
						? data.products.map(item => <li key={item.id}>{item.title}</li>) 
						: null
				}
			</ul>
			<button onClick={handleScrollToTop}>Scroll to Top</button>
			<div ref={bottomRef}></div>
			<h3>This is the bottom of the page</h3>
		</div>
	)
}