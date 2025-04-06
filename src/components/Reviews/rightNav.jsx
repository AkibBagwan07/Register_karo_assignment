import React, { useState, useEffect } from 'react';
import { FaArrowAltCircleRight } from "react-icons/fa";
import styles from './Reviews.module.css';

const CarouselRight = ({ swiper }) => {
  const [isEnd, setIsEnd] = useState(true); // safe default

  useEffect(() => {
    if (!swiper) return;

    const updateState = () => {
      setIsEnd(swiper.isEnd);
    };

    swiper.on("slideChange", updateState);
    updateState(); // initial sync

    return () => {
      swiper.off("slideChange", updateState);
    };
  }, [swiper]);

  return (
    <div className={styles.rightNav}>
      {!isEnd && (
        <FaArrowAltCircleRight
          className={styles.Arrow}
          onClick={() => swiper.slideNext()}
        />
      )}
    </div>
  );
};

export default CarouselRight;
