import React, { useCallback } from "react"
import Link from "next/link"
import Footer from "@/components/footer"
import { withRouter } from "next/router"
import { WithRouterProps } from "next/dist/client/with-router"
import axios from "axios"

// Constants
const QDLEADER_URL = "https://qdleader.github.io/qdleader/"

interface IData {
	name: string
	age: number
}

interface IProps extends WithRouterProps {
	name: string
	list: IData[]
}

const PageDetail = (props: IProps) => {
	const { router, list } = props
	const name = router.query.name

	// 处理文字点击事件
	const handleTextClick = useCallback(() => {
		window.open(QDLEADER_URL, "_blank", "noopener,noreferrer")
	}, [])

	return (
		<>
			<div onClick={handleTextClick} style={{ cursor: "pointer" }}>
				我是{name}详情页
			</div>

			{list?.map((item) => (
				<div key={item.name} onClick={handleTextClick} style={{ cursor: "pointer" }}>
					<div>{item.name}</div>
					<div>{item.age}</div>
				</div>
			))}
			<div>
				<Link href="/home">
					<span onClick={handleTextClick} style={{ cursor: "pointer" }}>
						返回首页
					</span>
				</Link>
			</div>
			<Footer onTextClick={handleTextClick} />
		</>
	)
}

PageDetail.getInitialProps = async () => {
	try {
		const res = await axios("https://admin-api-cy1w.onrender.com/list")
		console.log("获取结果", res.data.data)
		return { list: res.data.data }
	} catch (error) {
		console.error("获取数据失败", error)
		return { list: [] }
	}
}

export default withRouter(PageDetail)

