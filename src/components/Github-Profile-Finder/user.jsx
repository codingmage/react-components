export default function GithubUser({user}) {

	const {avatar_url, followers, following, public_repos, name, login, created_at} = user

	const createdDate = new Date(created_at)

	return (
		<div className="github-user">
			<img src={avatar_url} className="github-avatar" alt="User's avatar" />
			<div className="user-info">
				<a href={`https://github.com/${login}`}>{name || login}</a>
				<p>User joined on {`${createdDate.getDate()} ${createdDate.toLocaleString("en-us", {
					month: "short"
				})} ${createdDate.getFullYear()}`}</p>
			</div>
			<div>
				<div>
					<p>Public repos: {public_repos}</p>
				</div>
				<div>
					<p>Followers: {followers}</p>
				</div>
				<div>
					<p>Following: {following}</p>
				</div>
			</div>
		</div>
	)
}