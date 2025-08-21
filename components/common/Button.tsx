import { ReactNode } from "react";

interface CharacterProps{
    className?: string,
    children: ReactNode;
}


const Button: React.FC<CharacterProps> = ({children,className}) => {
    return (
        <button className={`${className} relative top-2/6 left-1/2 -translate-y-1/2 translate-x-55  z-20 text-white text-[17px] cursor-pointer font-semibold px-9 py-1.5 leading-normal bg-black/40 border border-gray-400/70`}>
            {children}
        </button>
    )
}

export default Button
