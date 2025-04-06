import React from 'react'
import {  VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import styles from "./Cards.module.css"

const Cards = ({ education,index}) => {
  return (
      <div>
          {index % 2 === 0 ?
              <VerticalTimelineElement
                  position={"right"}
                  contentStyle={{
                      background: "#1d1836",
                      color: "#fff",
                      boxShadow: "rgba(23,92,230,0.15) 0px 4px 24px",
                      backgroundColor: "rgba(17,25,40,0.83)",
                      border: "1px solid rgba(255,255,255,0.125)",
                      borderRadius: "8px"
                  }}
                  contentArrowStyle={{ borderRight: '7px solid rgba(255,255,255 0.3)' }}
                  date={education.date}
                  dateClassName={ styles.dateForRightPositionElem }
                  iconStyle={{ background: 'white', color: '#fff' }}
                  icon={<img className={styles.image} alt={education.school} src={education.img} />}>
                  <div className={styles.cardParent}>
                      <img className={styles.cardImage} alt={education.school} src={education.img} />
                      <div className={ styles.services}>
                          <h3 className={styles.company}>Service : {education.service}</h3>
                      </div>
                  </div>
              </VerticalTimelineElement> :
               <VerticalTimelineElement
                  position={"left"}
                  className={ styles.leftElem}
                  contentStyle={{
                      background: "#1d1836",
                      color: "#fff",
                      boxShadow: "rgba(23,92,230,0.15) 0px 4px 24px",
                      backgroundColor: "rgba(17,25,40,0.83)",
                      border: "1px solid rgba(255,255,255,0.125)",
                      borderRadius: "8px"
                  }}
                  contentArrowStyle={{ borderRight: '7px solid rgba(255,255,255 0.3)' }}
                  date={education.date}
                  dateClassName={ styles.dateForLeftPositionElem }
                  iconStyle={{ background: 'white', color: '#fff' }}
                  icon={<img className={styles.image} alt={education.company} src={education.img} />}>
                       <div className={styles.cardParent}>
                      <img className={styles.cardImage} alt={education.school} src={education.img} />
                      <div className={ styles.services}>
                          <h3 className={styles.company}>Service : {education.service}</h3>
                      </div>
                  </div>
              </VerticalTimelineElement>
              }
          </div>
  )
}

export default Cards