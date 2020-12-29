import * as React from "react"
import MoeBooru from "./api/moebooru"
import ImageCard from "./components/imageCard"


export default class HomePage extends React.Component<any, any>{
	api = new MoeBooru("https://yande.re")
	isUpdating = false
	tags = ""
	filter = "s"

	constructor() {
		super({})
		this.state = {
			cards: [
			],
			selectedImage: "",
			showImagePreviewer: true
		}
		
		window.addEventListener("scroll",  async () => {
			if(window.innerHeight + window.scrollY >= document.body.offsetHeight-150 && !this.isUpdating) {
				this.isUpdating = true
				await this.addImages()
				this.isUpdating = false
			}
		})

		this.search = this.search.bind(this)
		this.changeOption = this.changeOption.bind(this)
	}

	async componentDidMount() {
		this.addImages()
		this.setState({showImagePreviewer: false})
	}

	async addImages() {
		const images = await this.api.getImages(this.tags, this.filter, this.api.page, 20)
		console.log(images)
		this.setState({ cards: this.state.cards.concat(images.map(x => ImageCard(x.previewUrl, this.showImageCard.bind(this), x.imageUrl)))})
		this.api.page++
	}
	
	showImageCard(imageUrl: string) {
		console.log(imageUrl)
		this.setState({
			selectedImage: imageUrl,
			showImagePreviewer: true
		})
	}
	
	async search(val : React.ChangeEvent<HTMLInputElement>) {
		this.tags = val.target.value
		this.setState({cards: []})
		this.api.page = 1
		this.addImages()
	}

	async changeOption(val : React.ChangeEvent<HTMLSelectElement>) {
		this.filter = val.target.value
		this.setState({cards: []})
		this.api.page = 1
		this.addImages()
	}

	render() {
		return(
		<div>
			<div id="top-bar">
				<div id="search"> 
					<input id="search-bar" onChange={this.search} placeholder="Search for tags..."/>
					<select onChange={this.changeOption}>
						<option value="s"> safe </option>
						<option value="q"> questionable </option>
						<option value="e"> lewd </option>
					</select>
				</div>
			</div>
			<div id="images-container">
				<ul className="image-list">
					{ this.state.cards }
				</ul>
			</div>
			<div className="image-previewer" style={{display: this.state.showImagePreviewer ? "block" : "none"}} onClick={() => this.setState({showImagePreviewer: false})}>
				<img src={this.state.selectedImage} />
			</div>
		</div>
	)
	}
}
