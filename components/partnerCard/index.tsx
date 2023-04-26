/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable react/display-name */

// import "./index.scss"
import styles from "./index.module.scss"

export default function () {
	return (
		<>
			<div className={styles.container}>
				{/* 第一行 */}
				<div className={styles.official}>
					<div className={styles.officialBox}>
						<div className={styles.officialBoxItem}>Html5</div>
						<div className={styles.officialBoxItem}>css3</div>
						<div className={styles.officialBoxItem}>Javascript</div>
						<div className={styles.officialBoxItem}>Nodejs</div>
						<div className={styles.officialBoxItem}>Webpack</div>
						<div className={styles.officialBoxItem}>Css</div>
						<div className={styles.officialBoxItem}>css in module</div>
						<div className={styles.officialBoxItem}>Typescript</div>
						<div className={styles.officialBoxItem}>Vite</div>
					</div>
					<div className={styles.officialBox}>
						<div className={styles.officialBoxItem}>Html5</div>
						<div className={styles.officialBoxItem}>css3</div>
						<div className={styles.officialBoxItem}>Javascript</div>
						<div className={styles.officialBoxItem}>Nodejs</div>
						<div className={styles.officialBoxItem}>Webpack</div>
						<div className={styles.officialBoxItem}>Css</div>
						<div className={styles.officialBoxItem}>css in module</div>
						<div className={styles.officialBoxItem}>Typescript</div>
						<div className={styles.officialBoxItem}>Vite</div>
					</div>
				</div>
				{/* 第二行 */}
				<div className={styles.official}>
					<div className={[styles.officialBox, styles.slow].join(" ")}>
						<div className={styles.officialBoxItem}>Vuejs</div>
						<div className={styles.officialBoxItem}>React</div>
						<div className={styles.officialBoxItem}>Angular</div>
						<div className={styles.officialBoxItem}>Vuex</div>
						<div className={styles.officialBoxItem}>Redux</div>
						<div className={styles.officialBoxItem}>微信小程序</div>
						<div className={styles.officialBoxItem}>Jquery</div>
						<div className={styles.officialBoxItem}>NextJS</div>
						<div className={styles.officialBoxItem}>NuxtJS</div>
					</div>
					<div className={[styles.officialBox, styles.slow].join(" ")}>
						<div className={styles.officialBoxItem}>Vuejs</div>
						<div className={styles.officialBoxItem}>React</div>
						<div className={styles.officialBoxItem}>Angular</div>
						<div className={styles.officialBoxItem}>Vuex</div>
						<div className={styles.officialBoxItem}>Redux</div>
						<div className={styles.officialBoxItem}>微信小程序</div>
						<div className={styles.officialBoxItem}>Jquery</div>
						<div className={styles.officialBoxItem}>NextJS</div>
						<div className={styles.officialBoxItem}>NuxtJS</div>
					</div>
				</div>
				{/* 第三行 */}

				<div className={styles.official}>
					<div className={styles.officialBox}>
						<div className={styles.officialBoxItem}>Element UI</div>
						<div className={styles.officialBoxItem}>Element Plus</div>
						<div className={styles.officialBoxItem}>Vant</div>
						<div className={styles.officialBoxItem}>Antd design</div>
						<div className={styles.officialBoxItem}>Tailwind/Twind</div>
						<div className={styles.officialBoxItem}>Vant3</div>
						<div className={styles.officialBoxItem}>Mint UI</div>
						<div className={styles.officialBoxItem}>WeUI</div>
						<div className={styles.officialBoxItem}>Flutter</div>
						<div className={styles.officialBoxItem}>Quasar Framework</div>
					</div>
					<div className={styles.officialBox}>
						<div className={styles.officialBoxItem}>Element UI</div>
						<div className={styles.officialBoxItem}>Element Plus</div>
						<div className={styles.officialBoxItem}>Vant</div>
						<div className={styles.officialBoxItem}>Antd design</div>
						<div className={styles.officialBoxItem}>Tailwind/Twind</div>
						<div className={styles.officialBoxItem}>Vant3</div>
						<div className={styles.officialBoxItem}>Mint UI</div>
						<div className={styles.officialBoxItem}>WeUI</div>
						<div className={styles.officialBoxItem}>Flutter</div>
						<div className={styles.officialBoxItem}>Quasar Framework</div>
					</div>
				</div>
				{/* 第四行 */}
				{/* <div className={styles.official}>
					<div className={styles.officialBox}>
							<div className={styles.officialBoxItem}>Quasar Framework</div>
							<div className={styles.officialBoxItem}>Quasar Framework</div>
							<div className={styles.officialBoxItem}>Quasar Framework</div>
							<div className={styles.officialBoxItem}>Quasar Framework</div>
							<div className={styles.officialBoxItem}>Quasar Framework</div>
							<div className={styles.officialBoxItem}>Quasar Framework</div>
					</div>
					<div className={styles.officialBox}>
						<div className={styles.officialBoxItem}>Quasar Framework</div>
							<div className={styles.officialBoxItem}>Quasar Framework</div>
							<div className={styles.officialBoxItem}>Quasar Framework</div>
							<div className={styles.officialBoxItem}>Quasar Framework</div>
							<div className={styles.officialBoxItem}>Quasar Framework</div>
							<div className={styles.officialBoxItem}>Quasar Framework</div>
					</div>
				</div> */}
			</div>
		</>
	)
}
