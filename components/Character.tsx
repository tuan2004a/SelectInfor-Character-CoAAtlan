"use client";
//Character.tsx
import { CharacterType } from '@/types/Character';
import React from 'react'

interface CharacterProps{
    className?: string;
    ItemsData: CharacterType | null;
    isOpenDetail?: boolean
}

const Character: React.FC<CharacterProps> = ({ className, ItemsData,isOpenDetail }) => {

    if (!ItemsData) return null;
    // console.log(ItemsData)

    return (    
        <div className={`${className} slideItemsData absolute size-full inset-0 bg-no-repeat bg-center bg-cover`} style={{backgroundImage: `url(${ItemsData.bgCharacter.bgView})`}}>
            <img className='absolute top-1/2 right-0 bg-cover -translate-y-1/2' src={ItemsData.textBg.textView} alt="" />
            <img className='absolute top-13 left-7 bg-cover size-40' src={ItemsData.badge.badgeView} alt="" />
            <img className={`${ItemsData?.name} ease-in-out absolute !w-full scale-200 duration-500 transition-all  ${isOpenDetail == true ? "z-30 !min-w-1/3 translate-x-200 ease-in-out" : `z-10`}  `} src={ItemsData.characterImg} alt="" />
            <img className='absolute top-1/2 left-1/2 -translate-x-1/2 z-10 h-60' src={ItemsData.textBg.textHeroGame} alt="" />
        </div>
    )
}

export default Character