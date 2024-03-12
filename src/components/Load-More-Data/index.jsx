import { useEffect, useState } from "react"
import "./styles.css"

export default function LoadMoreData() {


	const [loading, setLoading] = useState(false)
	const [products, setProducts] = useState([])
	const [count, setCount] = useState(0)
	const [disableButton, setDisableButton] = useState(false)

	async function fetchProducts() {
		try {
			setLoading(true)
			const response = await fetch(
				`https://dummyjson.com/products?limit=5&skip=${count === 0 ? 0 : count * 5}`
			)
			const result = await response.json()
			
			if (result && result.products && result.products.length) {
				const oldAndNew = [...products, ...result.products]
				setProducts(oldAndNew)
				setLoading(false)
			}

		} catch (error) {
			setLoading(false)
			console.log(error)
		}
	}

	useEffect(() => {
		fetchProducts()
	}, [count])

	useEffect(() => {
		if (products && products.length === 20) {
			setDisableButton(true)
		}
	}, [products])

	if (loading) {
		return <div>Loading data! Please wait.</div>
	}

	return (
		<div className="load-more-container">
			<div className="product-container">
				{
					products && products.length ? 
						products.map(item => 
							<div className="product" key={item.id}>
								<img src={item.thumbnail} alt={item.title} />
								<p>{item.title}</p>
							</div>) 
						: null
				}
			</div>
			<div className="load-button-container">
				<button disabled={disableButton} onClick={() => setCount(count + 1)} className="load-button">Load more products</button>
				{
					disableButton ? <p>You have reached 20 products.</p> : null
				}
			</div>
		</div>
	)
}