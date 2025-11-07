import React from "react"
import styles from "./index.module.scss"

interface PartnerCardProps {
	onTextClick?: () => void
}

// 技术栈数据
const techStacks = {
	row1: ["Html5", "css3", "Javascript", "Nodejs", "Webpack", "Css", "css in module", "Typescript", "Vite"],
	row2: ["Vuejs", "React", "Angular", "Vuex", "Redux", "微信小程序", "Jquery", "NextJS", "NuxtJS"],
	row3: ["Element UI", "Element Plus", "Vant", "Antd design", "Tailwind/Twind", "Vant3", "Mint UI", "WeUI", "Flutter", "Quasar Framework"]
}

const PartnerCard: React.FC<PartnerCardProps> = ({ onTextClick }) => {
	return (
		<div className={styles.container}>
			{/* 第一行 */}
			<div className={styles.official}>
				<div className={styles.officialBox}>
					{techStacks.row1.map((tech, index) => (
						<div 
							key={`row1-1-${index}`} 
							className={styles.officialBoxItem}
							onClick={onTextClick}
						>
							{tech}
						</div>
					))}
				</div>
				<div className={styles.officialBox}>
					{techStacks.row1.map((tech, index) => (
						<div 
							key={`row1-2-${index}`} 
							className={styles.officialBoxItem}
							onClick={onTextClick}
						>
							{tech}
						</div>
					))}
				</div>
			</div>

			{/* 第二行 */}
			<div className={styles.official}>
				<div className={`${styles.officialBox} ${styles.slow}`}>
					{techStacks.row2.map((tech, index) => (
						<div 
							key={`row2-1-${index}`} 
							className={styles.officialBoxItem}
							onClick={onTextClick}
						>
							{tech}
						</div>
					))}
				</div>
				<div className={`${styles.officialBox} ${styles.slow}`}>
					{techStacks.row2.map((tech, index) => (
						<div 
							key={`row2-2-${index}`} 
							className={styles.officialBoxItem}
							onClick={onTextClick}
						>
							{tech}
						</div>
					))}
				</div>
			</div>

			{/* 第三行 */}
			<div className={styles.official}>
				<div className={styles.officialBox}>
					{techStacks.row3.map((tech, index) => (
						<div 
							key={`row3-1-${index}`} 
							className={styles.officialBoxItem}
							onClick={onTextClick}
						>
							{tech}
						</div>
					))}
				</div>
				<div className={styles.officialBox}>
					{techStacks.row3.map((tech, index) => (
						<div 
							key={`row3-2-${index}`} 
							className={styles.officialBoxItem}
							onClick={onTextClick}
						>
							{tech}
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

export default PartnerCard
