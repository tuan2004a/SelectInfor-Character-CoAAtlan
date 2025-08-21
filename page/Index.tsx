"use client";
//index.tsx
import Character from "@/components/Character";
import DetailChar from "@/components/DetailChar";
import SelectChar from "@/components/SelectChar";

import React, { useRef, useState } from "react";
import { useCharacterContext, CharacterProvider } from "@/context/CharacterContext";
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperClass } from "swiper";
import {CharacterType} from "@/types/Character";


const IndexContent = () => {

    const { LoadCharacter, character } = useCharacterContext();
    const ItemsCharacter = character || [];
    

    const swiperRef = useRef<SwiperClass | null>(null);
    const [firstCharData, setFirstCharData] = useState<CharacterType | null>(ItemsCharacter[0]);

    // console.log(firstCharData)

    return (
        <div className="max-w-screen h-screen flex overflow-y-hidden">
            <div className="w-1/3 bg-amber-400 h-full relative">
                <Character ItemsData={firstCharData} className=""/>
            </div>
            <div className="w-2/3 bg-black h-full">
                <Swiper
                    onSwiper={(swiper) => (swiperRef.current = swiper)}
                    onSlideChange={(swiper) => {
                        const index = swiper.realIndex;
                        setFirstCharData(ItemsCharacter[index]); 
                    }}
                    loop={true}
                    loopAdditionalSlides={ItemsCharacter.length}
                    slidesPerGroup={1}
                    centeredSlides={false}
                    grabCursor
                    slidesPerView={4}
                    spaceBetween={0} className="overflow-hidden h-full duration-500">
                    {ItemsCharacter.map((item, index) => (
                        <SwiperSlide key={index}>
                            <SelectChar ItemsData={item} className="" />
                        </SwiperSlide> 
                    ))}    
                    <button onClick={() => swiperRef.current?.slideNext()} className="absolute top-1/2 -translate-y-1/2 right-5 rotate-180 z-50 size-13 flex-center animate-moveX">
                        <img className="h-8" src="/img/btn-prev.webp" alt="" />
                    </button>
                </Swiper>
            </div>
            <div className="max-w-full h-full ">
                <DetailChar className="hidden"/>
            </div>
        </div>
    )
}

const Index: React.FC = () => {
    return (
        <CharacterProvider>
            <IndexContent/>
        </CharacterProvider>
    )
}
export default Index
