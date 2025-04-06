import React from 'react'
import styles from "./WhyChooseUs.module.css"
import Tilt from 'react-parallax-tilt';
import { CiCircleCheck } from "react-icons/ci";

const Skills = () => {
  return (
      <div id='WhyChooseUs' className={styles.whyChooseUsParent}>
          <div><p className={styles.title}>Why Choose Us</p>
          <p className={styles.description}>Our All-In-One Platform And Team Of Experts will help direct you in the right path and ensure that your business starts the right way in record time.</p>
          <div className={styles.whyChooseUsContainer}>
             <Tilt><div className={ styles.whyChooseUs}>
                      <div className={ styles.whyChooseUsItemParent}>
                      <div className={styles.whyChooseUsItem}>
                          <CiCircleCheck className={styles.checkImage} />
                              <p className={ styles.skillName}>Affordable</p>
                      </div>
                      <div className={styles.whyChooseUsItem}>
                          <CiCircleCheck className={styles.checkImage} />
                              <p className={ styles.skillName}>Compliance Ensured</p>
                      </div><div className={styles.whyChooseUsItem}>
                          <CiCircleCheck className={styles.checkImage} />
                              <p className={ styles.skillName}>Simplified Process</p>
                      </div><div className={styles.whyChooseUsItem}>
                          <CiCircleCheck className={styles.checkImage} />
                              <p className={ styles.skillName}>On-time Service</p>
                      </div>
                      <div className={styles.whyChooseUsItem}>
                          <CiCircleCheck className={styles.checkImage} />
                              <p className={ styles.skillName}>Instant Response</p>
                      </div>
                      <div className={styles.whyChooseUsItem}>
                          <CiCircleCheck className={styles.checkImage} />
                              <p className={ styles.skillName}>Industry Experts</p>
                          </div>
                          </div>    
                  </div></Tilt>
              </div>
          </div>
          </div>
  )
}

export default Skills