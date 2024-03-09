import { useState } from "react"
import { FaStar } from "react-icons/fa"
import "./styles.css"

// eslint-disable-next-line react/prop-types
export default function StarRating ({ noOfStars }) {

	const [rating, setRating] = useState(0)
	const [hover, setHover] = useState(0)

	function handleClick (currentIndex) {
		setRating(currentIndex)
	}

	function handleMouseEnter (currentIndex) {
		setHover(currentIndex)
	}

	function handleMouseLeave () {
		setHover(rating)
	}

	return (
		<div className="starRating">
			{
				[...Array(noOfStars)].map((_, index) => {
					index += 1
					return <FaStar 
						key={index}
						className={index <= (hover || rating) ? "active" : "inactive"} 
						onClick={() => handleClick(index)} 
						onMouseEnter={() => handleMouseEnter(index)} 
						onMouseLeave={() => handleMouseLeave()} 
						size={40}
					/>
				})
			}
            
		</div>
	)
}