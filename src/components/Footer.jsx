import React from 'react'
import styles from "./Footer.module.css"
import { FaYoutube } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
      <div id='AboutUs' className={ styles.wrapper}>
          <div className={ styles.grid}>
              <div >
                  <h3 className={ styles.Headers}>About Us</h3>
                  <p>we are a team dedicated to provide best services to our customers</p>
              </div>
              <div>
                  <h3 className={ styles.Headers}>Quick Links</h3>
                  <ul>
                      <li><a href='#ourServices'>Our Services</a></li>
                      <li><a href='#WhyChooseUs'>Why Choose Us</a></li>
                      <li><a href='#Reviews'>Reviews</a></li>
                      <li><a href='#ContactUs'>Contact Us</a></li>
                      <li><a href='#AboutUs'>About Us</a></li>
                  </ul>
              </div>
              <div>
                  <h3 className={ styles.Headers}>Follow Us</h3>
                  <ul className={styles.socialLinks}>
                      <li><a target='_blank' href="https://www.facebook.com/RegisterKaro1/"><FaFacebook size={25}/></a></li>
                      <li><a target='_blank' href="https://www.instagram.com/registerkaro_/"><FaInstagramSquare size={25}/></a></li>
                      <li><a target='_blank' href="https://mobile.twitter.com/registerkaro"><FaTwitter size={25}/></a></li>
                      <li><a target='_blank' href="https://www.youtube.com/@registerkaro7245"><FaYoutube size={25} /></a></li>
                  </ul>
              </div>
          </div>
          <hr style={{margin:"0 5%"}}/>
          <p>&copy; 2025 Register Karo. All Rights Reserved</p>
    </div>
  )
}

export default Footer