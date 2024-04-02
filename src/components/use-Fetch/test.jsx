import useFetch from "."

export default function UseFetchHookTest() {

	const {data, error, pending} = useFetch("https://dummyjson.com/products?limit=10", {})

	console.log(data, error, pending)

	return (
		<div style={{display: "flex", flexDirection: "column", alignItems: "center", height: "auto"}}>
			<h1>Use Fetch Hook</h1>
			{
				pending ? <h2>Loading...</h2> : null
			}
			{
				error ? <h3>{error}</h3> : null
			}
			{
				data && data.products && data.products.length 
					? data.products.map(product => <p key={product.id}>{product.title}</p>)
					: null
			}
		</div>
	)
}