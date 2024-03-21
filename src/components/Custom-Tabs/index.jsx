import Tabs from "./tabs"
import "./tabs.css"

function RandomComponent() {
	return <h1>Some random content</h1>
}

export default function TabTest() {

	function handleChange(currentTabIndex) {
		console.log(currentTabIndex)
	}

	const tabs = [
		{
			label: "Tab 1",
			content: <div>This is content for Tab 1</div>
		},
		{
			label: "Tab 2",
			content: <div>This is content for Tab 2</div>
		},
		{
			label: "Tab 3",
			content: <RandomComponent />
		}
	]

	return (
		<Tabs tabsContent={tabs} onChange={handleChange} />
	)
}