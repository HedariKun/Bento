import * as React from "react"

export default function ImageCard(imageUrl: string) {
	return (
		<li className="image-card">
			<img src={`${imageUrl}`} style={{width:"100%", height:"auto", maxHeight:"100%"}}/>
			<div style={{width: "100px", height: "300px"}}></div>
		</li>
	)
}
