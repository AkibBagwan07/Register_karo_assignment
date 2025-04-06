import React, { useEffect, useRef, useState } from 'react';
import styles from './Reviews.module.css';
import { reviews } from '../../data/constants';
import { Navigation, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import CarouselLeft from './leftNav';
import CarouselRight from './rightNav';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import { FaQuoteLeft } from 'react-icons/fa';
import CardBackground from "./ThreeJs"
 
const Reviews = () => {
  const swiperRef = useRef(null);
  const [swiperInstance, setSwiperInstance] = useState(null);

  useEffect(() => {
    if (swiperRef.current && swiperRef.current.swiper) {
      setSwiperInstance(swiperRef.current.swiper);
    }
  }, []);

  return (
    <div id="Reviews" className={styles.reviewsParent}>
      <div className={styles.Heading}>
        <p className={styles.title}>Happy Customers</p>
        <p className={styles.description}>
          RegisterKaro is used by tens of thousands of founders to start, manage, and grow their business
        </p>
      </div>

      <div className={styles.wrapper}>
        <Swiper
          ref={swiperRef}
          centeredSlides={true}
          initialSlide={0}
          modules={[Navigation, Autoplay]}
          slidesPerView={1}
          spaceBetween={40}
          allowTouchMove
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          className={styles.swiperContainer}
        >
          {reviews.map((item, index) => (
            <SwiperSlide key={index} className={styles.swiperSlide}>
              <div className={styles.card}>
                  <CardBackground /> 
                <FaQuoteLeft size={30} color="#facc15" />
                <div className={styles.details}>
                  <p className={styles.reviewsTitle}>
                    <span className={styles.postedByLabel}>Posted on </span>
                    <span className={styles.postedByCompany}>{item.postedOn}</span>
                  </p>
                  <p className={styles.projectDescription}>{item.comment}</p>
                  <div className={styles.tagsContainer}>
                    <p className={styles.tags}>{item.name}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {swiperInstance && (
          <>
            <div className={styles.leftNav}>
              <CarouselLeft swiper={swiperInstance} />
            </div>
            <div className={styles.rightNav}>
              <CarouselRight swiper={swiperInstance} />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Reviews;
