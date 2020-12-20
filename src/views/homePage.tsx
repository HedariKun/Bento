import * as React from "react"
import MoeBooru from "./api/moebooru"
import ImageCard from "./components/imageCard"


export default class HomePage extends React.Component<any, any>{
	api = new MoeBooru("https://yande.re")
	isUpdating = false
	constructor() {
		super({})
		this.state = {
			cards: [
			]
		}
		
		window.addEventListener("scroll",  async () => {
			if(window.innerHeight + window.scrollY >= document.body.offsetHeight-150 && !this.isUpdating) {
				this.isUpdating = true
				await this.addImages()
				this.isUpdating = false
			}
		})
	}

	async componentDidMount() {
		this.addImages()
	}

	async addImages() {
		const images = await this.api.getImages("loli", "q", this.api.page, 20)
		this.setState({ cards: this.state.cards.concat(images.map(x => ImageCard(x.previewUrl)))})
		this.api.page++
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
