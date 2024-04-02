import { useRef } from "react"
import { useState } from "react"

export default function UseOnClickOutsideTest() {
	const ref = useRef()

	const [showContent, setShowContent] = useState(false)

	return (
		<div ref={ref}>
			{
				showContent ? <div>
					<h1>This is a random element</h1>
					<p>Please click outside of this to close this. It won't close if you click inside this container.</p>
				</div> 
					: <button onClick={() => setShowContent(true)}>Show content</button>
			}
		</div>
	)
}