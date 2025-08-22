"use client";

import React from "react";

interface DetailProps {
    className?: string;
}

const DetailChar: React.FC<DetailProps> = ({ className }) => {
    return (
        <div className={`${className} relative size-full flex-col-center bg-no-repeat bg-center bg-cover space-y-6` } style={{ backgroundImage: "url('/img/bgChar/bgDetail/Mystrix-bg-detail.png')" }}>
            <div className="flex items-center justify-end -translate-x-40 space-x-3 first:w-20 ">
                <img src="/img/badge/badgeDetail/Mystrix-badge-detail.png" alt="" />
                <p className="text-6xl text-white font-bold leading-normal">Mystrix</p>
            </div>
            <img className="h-80 object-cover" src="/img/bgText/textDetail/Mystrix-textDetail.png" alt="" />
            <div className="text-white p-7 max-w-2xl bg-black/30 *:leading-normal last:text-sm absolute top-1/2 right-1/2 translate-y-1/2 z-80">
            {/* <div className="text-white p-7 max-w-2xl bg-black/30 *:leading-normal last:text-sm -translate-x-50 -translate-y-20 !z-100"> */}
                <h4 className="border-b border-gray-500 pb-3 mb-3 text-xl font-medium">Weapons are more trustworthy than people!</h4>
                <p>An enigmatic woman from Rhine Advanced Military Academy's Espionage Division. Exuding an elegant yet lethal presence, this thorned rose weaves through darkness like a phantom, leaving nothing but gunsmoke and whispers in her wake.</p>
            </div>
        </div>
    );
};

export default DetailChar;
