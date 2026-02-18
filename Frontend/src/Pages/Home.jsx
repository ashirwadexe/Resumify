import React from 'react'
import Banner from '../Components/Home/Banner'
import Hero from '../Components/Home/Hero'
import Features from '../Components/Home/Features'
import Testimonial from '../Components/Home/Testimonial'
import CallToAction from '../Components/Home/CallToAction'
import Footer from '../Components/Home/Footer'
import FAQs from '../Components/Home/FAQs'
import HowItWorks from '../Components/Home/HowItWorks'
import ImageSlider from '../Components/Home/ImageSlider'

const Home = () => {
  return (
    <div>
      <Banner/>
      <Hero/>
      <ImageSlider/>
      <Features/>
      <HowItWorks/>
      <Testimonial/>
      <FAQs/>
      <CallToAction/>
      <Footer/>
    </div>
  )
}

export default Home