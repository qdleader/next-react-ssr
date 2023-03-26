import React from 'react'
import Link from 'next/link'
import Footer from '@/components/footer'
import { withRouter } from 'next/router'
import { WithRouterProps } from 'next/dist/client/with-router'

import axios from 'axios'

interface iData {
  name: string,
  age: 18
}
interface iProps extends WithRouterProps{
  name: string
  list:iData[]
}
const pageDetail = (props:iProps) => {
  const { router ,list} = props
  const name = router.query.name
  
  return (
    <>
      <div>我是{name}详情页</div>
      
      {
        list?.map((item) => (
          <div	key={item.name}>
             <div>{item.name}</div>
             <div>{item.age}</div>
          </div>
        ))}
      <div><Link href="/home">返回首页</Link></div>
      <Footer></Footer>
    </>
  )
} 

pageDetail.getInitialProps = async () => {

  let res = await axios('https://admin-api-cy1w.onrender.com/list')
  console.log("获取结果", res.data.data);
  return { list : res.data.data };
  // const promise = new Promise((resolve) => {
  //   axios('https://admin-api-cy1w.onrender.com/list').then((res: { data: { data: unknown } }) => {
  //     console.log("获取结果", res.data.data);
  //     resolve(res.data)
  //   })
  // })
  // return await promise
}

export default withRouter(pageDetail)

