"use client";

import React from "react";
import { CharacterType } from '@/types/Character';


interface DetailProps {
    className?: string;
    firstCharData?: CharacterType | null | undefined 
}


const DetailChar: React.FC<DetailProps> = ({ firstCharData }) => {
    
    console.log(firstCharData)

    return (
        <div className="size-full ">
            <div className={`relative size-full flex-col-center bg-no-repeat bg-center bg-cover space-y-6` } style={{ backgroundImage: `url(${firstCharData?.bgCharacter?.bgDetail})` }}>
                <div className="flex items-center justify-end -translate-x-40 space-x-3 first:w-20 ">
                    <img src={firstCharData?.badge?.badgeDetail} alt="" />
                    <p className="text-6xl text-white font-bold leading-normal">{firstCharData?.name}</p>
                </div>
                <img className="h-80 object-cover" src={firstCharData?.textBg?.textDetail} alt="" />
            </div>
            <div className="text-white p-7 max-w-2xl bg-black/30 *:leading-normal last:text-sm absolute top-1/2 right-1/2 translate-y-1/2">
                <h4 className="border-b border-gray-500 pb-3 mb-3 text-xl font-medium">Weapons are more trustworthy than people!</h4>
                <p>An enigmatic woman from Rhine Advanced Military Academy's Espionage Division. Exuding an elegant yet lethal presence, this thorned rose weaves through darkness like a phantom, leaving nothing but gunsmoke and whispers in her wake.</p>
            </div>
        </div>
            
    );
};

export default DetailChar;
