// single selection
// multiple selection

import { useState } from "react"
import data from "./data"
import "./styles.css"

export default function Accordion () {

	const [selected, setSelected] = useState(null)
	const [enableMultiSelection, setEnableMultiSelection] = useState(false)
	const [multiple, setMultiple] = useState([])

	function handleSingleSelection (itemId) {

		if(itemId === selected) {
			setSelected(null)
		} else {
			setSelected(itemId)
		}
	}

	function handleMultiSelection (itemId) {
		let copyMultiple = [...multiple]

		const findIndexOfCurrentId = copyMultiple.indexOf(itemId)

		if (findIndexOfCurrentId === -1) copyMultiple.push(itemId)
		else copyMultiple.splice(findIndexOfCurrentId, 1)

		setMultiple(copyMultiple)

	}

	return (
		<div className="wrapper">
			<button className={enableMultiSelection? "pressed" : null} onClick={() => setEnableMultiSelection(!enableMultiSelection)}>Enable Multi Selection</button>
			<div className="accordion">
				{data && data.length > 0 ? data.map(item => (
					<div key={item.id} className="item">
						<div 
							onClick={enableMultiSelection 
								? () => handleMultiSelection(item.id) 
								: () => handleSingleSelection(item.id)} className="title">
							<h3>{item.question}</h3>
							<span>+</span>
						</div>
						{enableMultiSelection 
							? multiple.indexOf(item.id) !== -1 && (
								<div className="content">
									{item.answer}
								</div> )
							: selected === item.id && (
								<div className="content">
									{item.answer}
								</div> 
							)}
						{/* selected === item.id || multiple.indexOf(item.id) !== -1 ? (
								<div className="content">
									{item.answer}
								</div> 
						) : null */}
					</div>
				)) 

					: <div>No data found</div>}
			</div>
		</div>
	)
}