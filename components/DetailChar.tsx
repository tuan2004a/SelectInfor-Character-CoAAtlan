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
            
        </div>
    );
};

export default DetailChar;
