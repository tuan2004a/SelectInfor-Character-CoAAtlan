"use client";
//selectcChar.tsx
import React from "react";
import { CharacterType } from "@/types/Character";
import 'swiper/css';

interface SelectProps {
    className?: string;
    ItemsData: CharacterType;
    onClick?: any;
}

const SelectChar: React.FC<SelectProps> = ({className, ItemsData, }) => {
    return (
        <div  key={ItemsData.id} className="itemsChar !h-full overflow-hidden">
            <img className="absolute z-10 size-10 top-15 left-1/2 -translate-x-1/2 brightness-0 invert-100 " src={ItemsData?.badge?.badgeView || undefined} alt="" />
            <img className=" scale-110 -translate-y-10 silderChar" src={ItemsData?.bgCharacter?.bgSlide || undefined} alt="ItemsData" />
        </div>
    )
}

export default SelectChar
