import { useEffect, useState } from "react"
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs"
import "./styles.css"

export default function ImageSlider({url, limit = 5, page = 1}) {


	const [images, setImages] = useState([])
	const [currentSlide, setCurrentSlide] = useState()
	const [errorMessage, setErrorMessage] = useState(null)
	const [loading, setLoading] = useState(false)

	async function fetchImages(getUrl) {
		try {
			setLoading(true)
			const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`)
			const data = await response.json()

			if (data) {
				setImages(data)
				setLoading(false)
			}	
		} catch (error) {
			setErrorMessage(error.message)
			setLoading(false)
		}
	}

	useEffect(() => {
		if (url !== "") fetchImages(url)
	}, [url])

	if (loading) {
		return (<div>Loading data! Please wait...</div>)
	}

	if (errorMessage !== null ) {
		return (<div>Error occurred! {errorMessage}</div>)
	}

	function handlePrevious() {
		if (currentSlide === 0) {
			setCurrentSlide(images.length - 1)
		} else {
			setCurrentSlide(currentSlide - 1)
		}
	}

	function handleNext() {
		if (currentSlide === images.length - 1) {
			setCurrentSlide(0)
		} else {
			setCurrentSlide(currentSlide + 1)
		}
	}

	return (
		<div className="slider-container">
			<BsArrowLeftCircleFill onClick={handlePrevious} className="arrow arrow-left" />

			{
				images && images.length ?
					images.map((imageItem, index) => (
						<img 
							key={imageItem.id} 
							alt={imageItem.download_url} 
							src={imageItem.download_url} 
							className={currentSlide === index 
								? "current-image" 
								: "current-image hide-current-image"
							}
						/>
					))
					: null
			}

			<BsArrowRightCircleFill onClick={handleNext} className="arrow arrow-right" />

			<span className="circle-indicators">
				{
					images && images.length ? 
						images.map((_, index) => 
							<button key={index} 
								className={currentSlide === index 
									? "current-indicator" 
									: "current-indicator inactive-indicator"}
								onClick={() => setCurrentSlide(index)}
							>
							</button>)					
						: null
				}
			</span>

		</div>
	)
}