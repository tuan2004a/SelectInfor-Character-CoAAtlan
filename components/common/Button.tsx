import { ReactNode } from "react";

interface CharacterProps{
    className?: string,
    children: ReactNode,
    onClick?: any
}


const Button: React.FC<CharacterProps> = ({children,className,onClick}) => {
    return (
        <button onClick={onClick} className={`${className} relative top-2/6 left-1/2 -translate-y-1/2 translate-x-55  z-10 text-white text-[17px] cursor-pointer font-semibold px-9 py-1.5 leading-normal bg-black/50 border border-gray-400/70`}>
            {children}
        </button>
    )
}

export default Button
