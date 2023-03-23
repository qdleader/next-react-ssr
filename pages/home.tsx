import React from 'react'
import Link from 'next/link'
import Router from 'next/router'

const Home = () => (
  <>
    <div>我是首页</div>
    <div><Link href="/pageA">去A页面</Link></div>
    <div><Link href="/pageB">去B页面 </Link></div>
    <button onClick={()=>{Router.push('/pageC')}}>去C页面</button>
  </>
)

export default Home

