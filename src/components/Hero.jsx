/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import styles from "./Hero.module.css"
import Typewriter from "typewriter-effect"
import HeroBgAnimation from "../HeroBgAnimation"
import {headContentAnimation, headContainerAnimation, headTextAnimation } from '../utils/motion' 
import Tilt from 'react-parallax-tilt';
import { motion } from "framer-motion"
import ContactSection from './ContactUs'

const Hero = () => {
  const [openForm, setOpenForm] = useState(false)
  
  const handleOpenAndCloseForm = () => (
    setOpenForm(!openForm)
  )

  // console.log(openForm)

  return (<div>{openForm ? <ContactSection handleOpenAndCloseForm={ handleOpenAndCloseForm} /> :
    <motion.div {...headContainerAnimation} id='About' className={styles.heroParent}>
      <motion.div {...headContentAnimation} className={styles.heroAnimationBg}><HeroBgAnimation /></motion.div>
      <div className={styles.heroImageParent}>
        <Tilt>  <img className={styles.heroImage} src="https://www.registerkaro.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero_model.1595b1c8.webp&w=1080&q=75" alt="Hero image" /></Tilt>
      </div>
      <motion.div {...headTextAnimation} className={styles.infoParent}>
        <p className={styles.name}>Hi, we are <br />Register Karo</p>
        <p className={styles.roles}>Our Services <span>
          <Typewriter options={{
            strings: ["Company Formation", "Company Secretarial Services", "Virtual Office Address", "Annual Compliance", "VAT Registration",
              "Payroll Services", "Bookkeeping Services", "Live Online Webinars & Workshops"
            ],
            autoStart: true,
            loop: true
          }} />
        </span></p>
        <motion.p {...headContentAnimation} className={styles.decription}>An online business compliance platform that helps entrepreneurs and other individuals with various, registrations, tax filings, and other legal matters.</motion.p>
        <button onClick={handleOpenAndCloseForm} className={styles.resumeBtn}>Get Started</button>
      </motion.div>
    
    </motion.div>}</div> 
  )
}

export default Hero