import React from "react"

interface FooterProps {
	onTextClick?: () => void
}

const Footer: React.FC<FooterProps> = ({ onTextClick }) => (
	<div 
		onClick={onTextClick} 
		style={{ 
			cursor: "pointer", 
			color: "#fff", 
			padding: "2rem", 
			textAlign: "center",
			fontSize: "1.2rem"
		}}
	>
		qdleader
	</div>
)

export default Footer

