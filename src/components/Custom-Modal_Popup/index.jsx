import { useState } from "react"
import Modal from "./modal"
import "./modal.css"

export default function ModalTest() {


	const [showModalPopup, setShowModalPopup] = useState(false)

	function handleToggleModalPopup() {
		setShowModalPopup(!showModalPopup)
	}

	function onClose() {
		setShowModalPopup(false)
	}

	return (
		<div style={{display: "flex", flexDirection:"column", justifyContent: "center", alignItems: "center"}}>
			<button onClick={handleToggleModalPopup}>Modal Popup</button>
			{
				showModalPopup && <Modal 
					onClose={onClose} 
					header={<h1>Custom Header</h1>}
					body={<div>Custom Body</div>} 
					footer={<h3>Custom Footer</h3>}
				/>
			}
		</div>
	)
}