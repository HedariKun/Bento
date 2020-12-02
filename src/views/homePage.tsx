import * as React from "react"

export default function HomePage() {
	return(
		<div>
			<div id="top-bar">
				<div id="search"> 
					<input id="search-bar" placeholder="Search for tags..."/>
				</div>
			</div>
			<div id="images-container"></div>
		</div>
	)
}
