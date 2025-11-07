import React, { useEffect, useCallback } from "react"
import Link from "next/link"
import Footer from "@/components/footer"
import Router from "next/router"
import { Button } from "antd"

// Constants
const QDLEADER_URL = "https://qdleader.github.io/qdleader/"

const Home = () => {
	// 处理文字点击事件
	const handleTextClick = useCallback(() => {
		window.open(QDLEADER_URL, "_blank", "noopener,noreferrer")
	}, [])

	useEffect(() => {
		// 路由事件监听
		const routeChangeStart = (...args: any[]) => console.log("1.路由开始变化，routeChangeStart", ...args)
		const routeChangeComplete = (...args: any[]) => console.log("2.路由变化结束--routeChangeComplete", ...args)
		const beforeHistoryChange = (...args: any[]) => console.log("3. beforeHistoryChange", ...args)
		const routeChangeError = (...args: any[]) => console.log("4. routeChangeError", ...args)
		const hashChangeStart = (...args: any[]) => console.log("5.hashChangeStart", ...args)
		const hashChangeComplete = (...args: any[]) => console.log("6.hashChangeComplete", ...args)

		Router.events.on("routeChangeStart", routeChangeStart)
		Router.events.on("routeChangeComplete", routeChangeComplete)
		Router.events.on("beforeHistoryChange", beforeHistoryChange)
		Router.events.on("routeChangeError", routeChangeError)
		Router.events.on("hashChangeStart", hashChangeStart)
		Router.events.on("hashChangeComplete", hashChangeComplete)

		return () => {
			Router.events.off("routeChangeStart", routeChangeStart)
			Router.events.off("routeChangeComplete", routeChangeComplete)
			Router.events.off("beforeHistoryChange", beforeHistoryChange)
			Router.events.off("routeChangeError", routeChangeError)
			Router.events.off("hashChangeStart", hashChangeStart)
			Router.events.off("hashChangeComplete", hashChangeComplete)
		}
	}, [])

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
			<div onClick={handleTextClick} style={{ cursor: "pointer" }}>
				我是home首页
			</div>
			<div>
				<Link href="/pageDetail">
					<span onClick={handleTextClick} style={{ cursor: "pointer" }}>
						详情页
					</span>
				</Link>
			</div>
			<div>
				<Link href="#pageDetail">
					<span onClick={handleTextClick} style={{ cursor: "pointer" }}>
						详情页哈希
					</span>
				</Link>
			</div>
			<div onClick={goDetail} style={{ cursor: "pointer" }}>
				去详情页面
			</div>
			<Button onClick={handleTextClick}>我是按钮</Button>
			<Footer onTextClick={handleTextClick} />
		</>
	)
}

export default Home

