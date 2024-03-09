import { useEffect, useState } from "react"

export default function RandomColor () {

	const [typeOfColor, setTypeOfColor] = useState("hex")
	const [color, setColor] = useState("#242424")

	useEffect(() => {
		if(typeOfColor === "rgb") {
			handleCreateRGBColor()
		} else {
			handleCreateHexColor()
		}
	}, [typeOfColor])

	function randomColorUtility (length) {
		return Math.floor(Math.random() * length)
	}

	function handleCreateHexColor() {
		const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]
		let hexColor = "#"

		for (let i = 0; i < 6; i++) {
			hexColor += hex[randomColorUtility(hex.length)]
		}

		setColor(hexColor)

	}

	function handleCreateRGBColor() {
		const r = randomColorUtility(256)
		const g = randomColorUtility(256)
		const b = randomColorUtility(256)

		setColor(`rgb(${r}, ${g}, ${b})`)
	}

	return (
		<div style={{
			background: color,
			width: "50vw"
		}}>
			<div style={{
				display: "flex",
				justifyContent: "center"
			}}>
				<button onClick={() => setTypeOfColor("hex")}>Create HEX color</button>
				<button onClick={() => setTypeOfColor("rgb")}>Create RGB color</button>
				<button 
					onClick={typeOfColor === "hex" 
						? handleCreateHexColor 
						: handleCreateRGBColor}
				>
					Generate random color
				</button>
			</div>


			<div style={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				color: "white",
				fontSize: "2.5rem",
				marginTop: "2.75rem",
				flexDirection: "column",
				gap: "1rem",
			}}>
				<h3>{typeOfColor === "rgb" ? "RGB Color" : "HEX Color"}</h3>
				<h1>{color}</h1>
			</div>
		</div>
	)
}