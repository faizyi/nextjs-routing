import React from 'react'
import Header from './../_lib/components/header/header'
import Footer from './../_lib/components/footer/footer'
export default function Layout({children}) {
  return (
    <div>
        <Header/>
        {children}
        <Footer/>
    </div>
  )
}
