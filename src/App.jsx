import React from 'react'
import Hero from './components/Hero'

import NewArravials from './components/Collections'
import Tryon from './components/Tryon'
import ElementalSeries from './components/ElementalSeries'
import ProductShowcase from './components/ProductShowcase'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Hero/>
     <NewArravials/>
     <Tryon/>
     <ElementalSeries/>
     <ProductShowcase/>
     <Footer/>
    </div>
  )
}

export default App