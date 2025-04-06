/* eslint-disable no-unused-vars */
import React from 'react';
import styles from './ContactUs.module.css';
import { motion } from 'framer-motion';
import { MdCancel } from "react-icons/md";

const fadeInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0 },
};

const ContactSection = ({ handleOpenAndCloseForm}) => {
  return (
    <div id='ContactUs' className={styles.contactSection}>
      <motion.div
        className={styles.contactInfo}
        variants={fadeInLeft}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.8 }}
      >
        <h2>Let's Connect</h2>
        
        <div className={styles.infoItem}>
          <h3>📍 Office</h3>
          <p>2nd Floor, Phoenix Park,<br />Hyderabad, Telangana 500081</p>
        </div>

        <div className={styles.infoItem}>
          <h3>📞 Phone</h3>
          <p>+91 98765 43210</p>
        </div>

        <div className={styles.infoItem}>
          <h3>🕒 Hours</h3>
          <p>Mon - Fri: 10AM - 6PM</p>
        </div>

        <div className={styles.infoItem}>
          <h3>✉️ Email</h3>
          <p>hello@creative.com</p>
        </div>
      </motion.div>

      <motion.div
        className={styles.contactForm}
        variants={fadeInRight}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.8 }}
      >
        <h2>Contact Us</h2>
        <form>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <input type="tel" placeholder="Your Phone" required />
          <textarea placeholder="Your Message" rows="5" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </motion.div>
              <div className={styles.closeIcon}>
    <MdCancel onClick={handleOpenAndCloseForm} size={28} />
  </div>
    </div>
  );
};

export default ContactSection;
