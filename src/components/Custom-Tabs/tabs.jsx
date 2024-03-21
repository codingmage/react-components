import { useState } from "react"

export default function Tabs({tabsContent, onChange}) {

	const [currentTabIndex, setCurrentTabIndex] = useState(0)

	function handleOnClick(index) {
		setCurrentTabIndex(index)
		onChange(index)
	}

	return (
		<div className="tabs-wrapper">
			<div className="tabs-heading">
				{
					tabsContent.map((item, index) => (
						<div className={`tab-item ${currentTabIndex === index ? "active" : ""}`} onClick={() => handleOnClick(index)} key={item.label}>
							<span className="tabs-label">{item.label}</span>
						</div>
					))
				}
			</div>

			<div className="tabs-content">
				{
					tabsContent[currentTabIndex] && tabsContent[currentTabIndex].content
				}
			</div>
		</div>
	)

}