// single selection
// multiple selection

import { useState } from "react"
import data from "./data"

export default function Accordion () {

	const [selected, setSelected] = useState(null)

	function handleSingleSelection (itemId) {

		if(itemId === selected) {
			setSelected(null)
		} else {
			setSelected(itemId)
		}
	}

	return (
		<div className="wrapper">
			<div className="accordion">
				{data && data.length > 0 ? data.map(item => (
					<div key={item.id} className="item">
						<div onClick={() => handleSingleSelection(item.id)} className="title">
							<h3>{item.question}</h3>
							<span>+</span>
						</div>
						{
							selected === item.id ? 
								<div className="content">
									{item.answer}
								</div> 
								: null
						}
					</div>
				)) 

					: <div>No data found</div>}
			</div>
		</div>
	)
}