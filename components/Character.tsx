import React from 'react'

interface CharacterProps{
    className?: string
}

const Character: React.FC<CharacterProps> = ({className}) => {
    return (
        <div className={`${className}`}>
            <img src="#" alt="" />
        </div>
    )
}

export default Character