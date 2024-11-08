import React from 'react'
import Home from './components/home'

import PremiumProducts from './components/product'
import About from './components/about'
import Footer from './components/footer'
import Fproduct from './components/fproduct'

function page() {
  return (
    <div>
      <Home/>
      <Fproduct/>
      <PremiumProducts/>
      <About/>
      <Footer/>
    </div>
  )
}

export default page