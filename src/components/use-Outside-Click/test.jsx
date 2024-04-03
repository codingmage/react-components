import { useRef, useState } from "react"
import useOutsideClick from "."

export default function UseOnClickOutsideTest() {

	const [showContent, setShowContent] = useState(false)

	const ref = useRef()
	useOutsideClick(ref, () => setShowContent(false))

	

	return (
		<div ref={ref}>
			{
				showContent ? <div style={{backgroundColor: "white"}}>
					<h1>This is a random element</h1>
					<p>Please click outside of this to close this. It will not close if you click inside this container.</p>
				</div> 
					: <button onClick={() => setShowContent(true)}>Show content</button>
			}
		</div>
	)
}