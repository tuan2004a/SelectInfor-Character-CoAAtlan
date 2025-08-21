import { ReactNode } from "react";

interface CharacterProps{
    className?: string,
    children: ReactNode;
}


const Button: React.FC<CharacterProps> = ({children,className}) => {
    return (
        <button className={`${className}  `}>
            {children}
        </button>
    )
}

export default Button
