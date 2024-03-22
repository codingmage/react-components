import { useEffect, useState } from "react"
import GithubUser from "./user"
import "./styles.css"

export default function GithubProfileFinder() {

	const [username, setUsername] = useState("codingmage")
	const [userData, setUserData] = useState(null)
	const [loading, setLoading] = useState(false)

	async function fetchGithubUserData() {
		setLoading(true)
		const res = await fetch(`https://api.github.com/users/${username}`)

		const data = await res.json()

		if (data) {
			setUserData(data)
			setLoading(false)
			setUsername("")
		}

		console.log(data)
	}


	function handleSubmit() {
		fetchGithubUserData()
	}

	useEffect(() => {
		fetchGithubUserData()
	}, [])

	if (loading) {
		return <h1>Loading data...</h1>
	}

	return (
		<div className="github-profile-container">
			<div className="input-wrapper">
				<input 
					name="search-by-username"
					type="text"
					placeholder="Search Github username"
					value={username}
					onChange={(e) => setUsername(e.target.value)}
				/>
				<button onClick={handleSubmit}>Search</button>
			</div>
			{
				userData !== null ? <GithubUser user={userData} /> : null
			}
		</div>  
	)
}