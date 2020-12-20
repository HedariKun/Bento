import * as React from "react"

export default function ImageCard(imageUrl: string) {
	return (
		<div className="image-card">
			<img src={`${imageUrl}`} style={{width:"100%", height:"100%"}}/>
			<div style={{width: "100px", height: "300px"}}></div>
		</div>
	)
}
