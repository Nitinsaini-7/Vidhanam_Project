import React from 'react'
import Hero from '../components/Hero'
import Essential from '../components/Essentails/Essential'
// import HowItWorks from './HowItWorks'
import Testimonials from './Testimonials'
import Blog from './blog/Blog'
import Faqs from './faqs/Faqs'

const Home = () => {
  return (
    <div>
      <Hero/>
      <Essential/>
      {/* <HowItWorks/> */}
      <Testimonials/>
      <Blog/>
      <Faqs/>
    </div>
  )
}

export default Home