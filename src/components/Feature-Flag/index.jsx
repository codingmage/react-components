import { useContext } from "react"
import Accordion from "../Accordion"
import ModeSwitch from "../Light-Dark-Mode"
import RandomColor from "../Random-Color"
import StarRating from "../Star-Rating"
import TicTacToe from "../Tic-Tac-Toe"
import { FeatureFlagsContext } from "./context"

export default function FeatureFlags() {

	const {loading, enabledFlags} = useContext(FeatureFlagsContext)

	const componentsToRender = [
		{
			key: "showLightAndDarkMode",
			component: <ModeSwitch />
		},
		{
			key: "showTicTacToeBoard",
			component: <TicTacToe />
		},
		{
			key: "showRandomColorGenerator",
			component: <RandomColor />
		},
		{
			key: "showAccordion",
			component: <Accordion />
		},
		{
			key: "showStarRating",
			component: <StarRating noOfStars={10} />
		},
	]

	function checkEnabledFlags(currentKey) {
		return enabledFlags[currentKey]
	}

	if (loading) return <h1>Loading data. Please wait...</h1>

	return (
		<div style={{height: "auto", display: "flex", flexDirection: "column", alignItems:"center", gap: "0.5rem"}}>
			<h1>
                Feature Flags
			</h1>

			{
				componentsToRender.map((component) => (
					checkEnabledFlags(component.key) ? <div style={{maxHeight: "600px"}} key={component.key}>{component.component}</div> : null
				))
			}
		</div>
	)
}