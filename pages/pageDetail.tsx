import React from 'react'
import Link from 'next/link'
import Footer from '@/components/footer'

const pageDetail = () => (
  <>
    <div>我是详情页</div>
    <div><Link href="/home">返回首页</Link></div>
    <Footer></Footer>
  </>
)

export default pageDetail

