import React from "react"
import Link from "next/link"
import Footer from "@/components/footer"
import Router from "next/router"
import { Button } from "antd"
import styles from "../styles/index.module.scss"

const Home = () => {
	Router.events.on("routeChangeStart", (...args) => {
		console.log("1.路由开始变化，routeChangeStart", ...args)
	})

	Router.events.on("routeChangeComplete", (...args) => {
		console.log("2.路由变化结束--routeChangeComplete", ...args)
	})

	Router.events.on("beforeHistoryChange", (...args) => {
		console.log("3. beforeHistoryChange", ...args)
	})
	Router.events.on("routeChangeError", (...args) => {
		console.log("4. routeChangeError", ...args)
	})

	Router.events.on("hashChangeStart", (...args) => {
		console.log("5.hashChangeStart", ...args)
	})
	Router.events.on("hashChangeComplete", (...args) => {
		console.log("6.hashChangeComplete", ...args)
	})

	const goDetail = () => {
		Router.push({
			pathname: "/pageDetail",
			query: {
				name: "qdleader",
			},
		})
	}
	return (
		<>
			<div>官网页面</div>
			<div className="container">
				{/* <h2>背景改变式</h2> */}
				<div className="img-box"></div>
				<ol>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
				</ol>
			</div>
			{/* <div className={styles["loop-wrap"]}>
				<div className={styles["loop-images-container"]}>
					<img src="/1.jpeg" alt="" className={styles["loop-image"]} />
					<img src="/2.jpeg" alt="" className={styles["loop-image"]} />
					<img src="/3.jpeg" alt="" className={styles["loop-image"]} />
					<img src="/4.jpeg" alt="" className={styles["loop-image"]} />
					<img src="/3.jpeg" alt="" className={styles["loop-image"]} />
					<img src="/1.jpeg" alt="" className={styles["loop-image"]} />
					<img src="/2.jpeg" alt="" className={styles["loop-image"]} />
					<img src="/3.jpeg" alt="" className={styles["loop-image"]} />
					<img src="/4.jpeg" alt="" className={styles["loop-image"]} />
					<img src="/3.jpeg" alt="" className={styles["loop-image"]} />
				</div>
			</div> */}
			{/* <div><Link href="/pageDetail">详情页</Link></div>
      <div><Link href="#pageDetail">详情页哈希</Link></div>
      <div onClick={goDetail}>去详情页面</div>
      <Button>我是按钮</Button> */}
			<Footer></Footer>
		</>
	)
}

export default Home
