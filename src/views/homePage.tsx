import * as React from "react"
import ImageCard from "./components/imageCard"

export default function HomePage() {
	return(
		<div>
			<div id="top-bar">
				<div id="search"> 
					<input id="search-bar" placeholder="Search for tags..."/>
				</div>
			</div>
			<div id="images-container">
				{ ImageCard("") }
				{ ImageCard("") }
				{ ImageCard("") }
				{ ImageCard("") }
				{ ImageCard("") }
				{ ImageCard("") }
				{ ImageCard("") }
				{ ImageCard("") }
			</div>
		</div>
	)
}
