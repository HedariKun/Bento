
export interface IAPI {
	getImages(tags: string, rating: string, page?: number, limit?: number) : Promise<IImageData[]>
}

export interface IImageData {
	id: number
	tags: string[]
	createdAt: Date
	updatedAt: Date
	fileSize: number
	source: string
	imageUrl: string
	width: number
	height: number
	previewUrl: string
	previewWidth: number
	previewHeight: number
	rating: string
}
