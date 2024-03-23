export default function Suggestions({data, handleClick}) {
	return (
		<ul style={{backgroundColor: "#ffffff", border: "1px solid #000"}}>
			{data && data.length ? 
				data.map((item, index) => 
					<li style={{cursor: "pointer"}} onClick={handleClick} key={index}>
						{item}
					</li>)
				: null}
		</ul>
	)
}