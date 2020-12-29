import * as React from "react"

export default function ImageCard(imageUrl: string, clickFun: (imageUrl: string) => void, rimageUrl: string) {
	return (
		<li className="image-card" onClick={() => clickFun(rimageUrl)}>
			<img src={`${imageUrl}`} style={{width:"100%", height:"auto", maxHeight:"100%"}}/>
			<div style={{width: "100px", height: "300px"}}></div>
		</li>
	)
}
