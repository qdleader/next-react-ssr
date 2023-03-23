import React from 'react'
import Link from 'next/link'


const Home = () => (
  <>
    <div>我是首页</div>
    <div><Link href="/pageA"><a>去A页面</a></Link></div>
    <div><Link href="/pageB"><a>去B页面 </a></Link></div>

  </>
)

export default Home

