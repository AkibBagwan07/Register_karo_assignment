import React, { useState, useEffect } from 'react';
import { FaArrowAltCircleLeft } from "react-icons/fa";
import styles from './Reviews.module.css';

const CarouselLeft = ({ swiper }) => {
  const [isBeginning, setIsBeginning] = useState(true); // safe default

  useEffect(() => {
    if (!swiper) return;

    const updateState = () => {
      setIsBeginning(swiper.isBeginning);
    };

    swiper.on("slideChange", updateState);
    updateState(); // initial sync

    return () => {
      swiper.off("slideChange", updateState);
    };
  }, [swiper]);

  return (
    <div className={styles.leftNav}>
      {!isBeginning && (
        <FaArrowAltCircleLeft
          className={styles.Arrow}
          onClick={() => swiper.slidePrev()}
        />
      )}
    </div>
  );
};

export default CarouselLeft;
