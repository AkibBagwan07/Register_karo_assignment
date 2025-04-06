import React from 'react'
import styles from "./OurServices.module.css"
import { education } from '../../data/constants'
import { VerticalTimeline }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Cards from './OurServicesCard/Cards';

const Education = () => {
    return (
        <div id='ourServices' className={styles.experienceSection}>
            <p className={styles.title}>Our Services</p>
            <p className={ styles.description}>Our Client Services Team is always happy to talk to you about what is best for your needs. Contact our team to find out if we are the right fit for you.</p>
            <VerticalTimeline>
                {education.map((education,idx) =>
                    < Cards education={education} index={ idx} />
                )}
            </VerticalTimeline></div>
    )
}
export default Education