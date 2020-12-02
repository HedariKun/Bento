
export interface IAPI {
	getImages(rating: string, page?: number, limit?: number) : ImageData
}

export interface ImageData {
	id: number
	tags: string[]
	createAt: Date
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
