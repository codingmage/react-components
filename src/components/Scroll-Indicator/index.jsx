import { useEffect, useState } from "react"
import "./scroll.css"

export default function ScrollIndicator({url}) {


	const [data, setData] = useState([])
	const [loading, setLoading] = useState(false)
	const [errorMessage, setErrorMessage] = useState("")
	const [scrollPercentage, setScrollPercentage] = useState(0)

	async function fetchData(url) {
		try {
			setLoading(true)
			const response = await fetch(url)
			const data = await response.json()

			if (data && data.products.length && data.products.length > 0) {
				setData(data.products)
				setLoading(false)
			}
		} catch (error) {
			console.log(error)
			setErrorMessage(error.message)
			setLoading(false)
		}
	}

	useEffect(() => {
		fetchData(url)
	}, [url])

	function handleScrollPercentage() {
		const scrolled = document.body.scrollTop || document.documentElement.scrollTop

		const height = document.documentElement.scrollHeight - document.documentElement.clientHeight

		setScrollPercentage((scrolled / height) * 100)
	}

	useEffect(() => {
		window.addEventListener("scroll", handleScrollPercentage)

		return () => {
			window.removeEventListener("scroll", () => {})
		}
	})

	if (errorMessage) {
		return <div>Error! {errorMessage} </div>
	}

	if (loading) {
		return <div>Loading data. Please wait...</div>
	}

	return (
		<div style={{height: "100vh", display: "flex", /* flexDirection: "column" */ gap: "1rem"}}>

			<div className="top-container">
				<h1>Custom Scroll Indicator</h1>

				<div className="scroll-progress-tracking-container">
					<div className="current-progress-bar" style={{width: `${scrollPercentage}%`}}>

					</div>
				</div>
			</div>

			<div className="data-scroll-container">
				{
					data && data.length > 0 ? 
						data.map(item => <p key={item.id}>{item.title}</p>)
						: null
				}
			</div>
            
		</div>
	)
}