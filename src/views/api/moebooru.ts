import {IAPI, IImageData } from "./interface"

export default class MoeBooru implements IAPI { 
	url: string = ""
	page: number = 0

	constructor(url: string) {
		this.url = url
	}

	async getImages(tags: string, rating: string, page?: number, limit?: number): Promise<IImageData[]> {

		let tagValue = tags.split(",").map(x=> x.replace(" ", "_")).join("+")
		tagValue += `+rating:${rating}` 
		const res = await fetch(this.url + `/post.json?tags=${tagValue}`)

		const data = await res.json()
		const images: IImageData[] = []
		for (const image of data) {
			images.push(
				{
					id: image.id,
					tags: image.tags.split(" "),
					createdAt: image.created_at,
					updatedAt: image.updated_at,
					rating: image.rating,
					width: image.width,
					height: image.height,
					source: image.source,
					fileSize: image.file_size,
					imageUrl: image.image_url,
					previewUrl: image.preview_url,
					previewWidth: image.preview_width,
					previewHeight: image.preview_height
				}
			)
		}
		return images
	}
}

