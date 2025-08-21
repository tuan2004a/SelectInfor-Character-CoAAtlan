import { useState, useEffect, useRef } from "react";
import { Swiper as SwiperClass } from "swiper";

export const useActiveSlide = () => {
    const swiperRef = useRef<SwiperClass | null>(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const handleSlideChange = (swiper: SwiperClass) => {
        setActiveIndex(swiper.realIndex);
    };

    return {
        swiperRef,
        activeIndex,
        handleSlideChange,
    };
};
