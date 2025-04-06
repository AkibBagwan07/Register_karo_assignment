import React from 'react'
import styles from "./Body.module.css"
import Hero from "./Hero"
import WhyChooseUs from "./WhyChooseUs"
import OurServices from "./OurServices/OurServices"
import CompaniesComponent from "./Companies"
import Reviews from './Reviews/Reviews'
import Footer from "./Footer"
import ContactSection from './ContactUs'

const Body = () => {
  return (
      <div className={styles.bodyParent}>
      <Hero />
      <WhyChooseUs />
      <OurServices />
      <CompaniesComponent/>
      <ContactSection/>
      <Reviews /> 
      <Footer/>
    </div>
  )
}

export default Body