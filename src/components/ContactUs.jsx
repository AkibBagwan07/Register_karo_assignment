/* eslint-disable no-unused-vars */
import React from 'react';
import styles from './ContactUs.module.css';
import { motion } from 'framer-motion';
import { MdCancel } from "react-icons/md";

const fadeInLeft = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0 },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0 },
};

const ContactSection = ({ handleOpenAndCloseForm }) => {
  return (
    <div id="ContactUs" className={styles.contactSection}>
      <motion.div
        className={styles.contactInfo}
        variants={fadeInLeft}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
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
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <h2>Contact Us</h2>
        <form>
          <motion.input
            type="text"
            placeholder="Your Name"
            required
            whileFocus={{ scale: 1.03 }}
          />
          <motion.input
            type="email"
            placeholder="Your Email"
            required
            whileFocus={{ scale: 1.03 }}
          />
          <motion.input
            type="tel"
            placeholder="Your Phone"
            required
            whileFocus={{ scale: 1.03 }}
          />
          <motion.textarea
            placeholder="Your Message"
            rows="5"
            required
            whileFocus={{ scale: 1.02 }}
          ></motion.textarea>
          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Send Message
          </motion.button>
        </form>
      </motion.div>

      <motion.div
        className={styles.closeIcon}
        initial={{ opacity: 0, rotate: -180 }}
        animate={{ opacity: 1, rotate: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <MdCancel onClick={handleOpenAndCloseForm} size={28} />
      </motion.div>
    </div>
  );
};

export default ContactSection;
