import React from "react";

interface SelectProps {
    className?: string;
}

const SelectChar: React.FC<SelectProps> = ({className}) => {
    return (
        <div className={`${className} h-full`}>
            <ul className="grid grid-cols-5 h-full *:size-full *:overflow-hidden *:flex *:items-center *:justify-center *:grayscale *:brightness-53 *:bg-[#161616]">

            </ul>
        </div>
    )
}

export default SelectChar
