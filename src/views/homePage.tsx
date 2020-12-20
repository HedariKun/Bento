import * as React from "react"
import MoeBooru from "./api/moebooru"
import ImageCard from "./components/imageCard"


export default class HomePage extends React.Component<any, any>{

	constructor() {
		super({})
		this.state = {
			cards: [
				ImageCard('')
			]
		}
		
	}

	async componentDidMount() {
		try {
		const api = new MoeBooru("https://yande.re")
		const images = await api.getImages("loli", "s", 0, 100)
		this.setState({ cards: this.state.cards.concat(images.map(x => ImageCard(x.previewUrl)))})
		console.log("happens")
		console.log(api)
		console.log(images)
		} catch(error) {
			console.log("hello")
			console.log(error) 
		}
	}

	render() {
		return(
		<div>
			<div id="top-bar">
				<div id="search"> 
					<input id="search-bar" placeholder="Search for tags..."/>
				</div>
			</div>
			<div id="images-container">
				{ this.state.cards }
			</div>
		</div>
	)
	}
}
