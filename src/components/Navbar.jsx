import React, { useState } from 'react'
import styles from "./Navbar.module.css"
import { IoLogoGithub } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";

const Navbar = () => {
    const [menuIsOpen,setMenuIsOpen] = useState(false)
  return (
      <div className={ styles.navbarParent}>
          <div className={styles.logo}><a href='/'><img className={styles.logoImage} src="https://www.registerkaro.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FLogo.77348f99.png&w=48&q=75" alt="logo" />Register <span className={ styles.karoText}>Karo</span></a></div>
          <div className={styles.infoBtns}>
          <a onClick={() => {
            window.scrollTo(0, 0);
            setMenuIsOpen(false);
            }}>Home</a>
              <a href='#ourServices' onClick={() => setMenuIsOpen(false)}>Our Services</a>
              <a href='#WhyChooseUs' onClick={() => setMenuIsOpen(false)}>Why Choose Us</a>
              <a href='#Reviews' onClick={() => setMenuIsOpen(false)}>Reviews</a>
              <a href='#ContactUs' onClick={() => setMenuIsOpen(false)}>Contact Us</a>
              <a href='#AboutUs' onClick={() => setMenuIsOpen(false)}>About Us</a>
          </div>
          <div className={styles.socialPlatformsBtn}>
              {/* <a href={Bio.github} target='_Blank'><IoLogoGithub className={styles.githubIcon} /></a> */}
              <a href="https://www.linkedin.com/company/registerkaro/?originalSubdomain=in" target='_Blank'><FaLinkedin className={styles.linkedinIcon} /></a>
              {/* <a href={Bio.github} target='_Blank'><BiLogoGmail className={styles.gmailIcon} /></a> */}
              <IoMdMenu onClick={()=>setMenuIsOpen(!menuIsOpen)} className={styles.menubar} />
              {menuIsOpen && <div><div className={ styles.infoBtnsMobile}>
                  <a onClick={window.scrollTo(0, 0)}>Home</a>
                  <a href='#WhyChooseUs'>Why Choose Us</a>
                  <a href='#Blog'>Blog</a>
                  <a href='#ContactUs'>Contact Us</a>
                  <a href='#AboutUs'>About Us</a>
              </div>
                  <div className={styles.mobileSocialLinks}>
                  {/* <a href={Bio.github} target='_Blank'><IoLogoGithub className={styles.githubIconForMobile} /></a> */}
                  <a href="https://www.linkedin.com/company/registerkaro/?originalSubdomain=in" target='_Blank'><FaLinkedin className={styles.linkedinIconForMobile} /></a>
                  </div>
              </div>}
          </div>
    </div>
  )
}

export default Navbar