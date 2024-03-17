import { useState } from "react"
import QRCode from "react-qr-code"

export default function QRCodeGenerator() {


	const [qrCode, setQRCode] = useState("")
	const [input , setInput] = useState("")

	function handleGenerateQRCode () {
		setQRCode(input)
		setInput("")
	}

	return (
		<div style={{display: "flex", flexDirection: "column", color: "white", alignItems: "center", gap: "1rem"}}>
			<h1>QR Code Generator</h1>

			<div>
				<input 
					type="text" 
					name="qr-code" 
					placeholder="Enter your value here" 
					value={input}
					onChange={(e) => setInput(e.target.value)} 
				/>
				<button onClick={handleGenerateQRCode} disabled={input && input.trim() !== "" ? false : true}>Generate</button>
			</div>

			<div>
				<QRCode id="qr-code-value" value={qrCode} size={400} bgColor="#fff" />
			</div>
		</div>
	)
}