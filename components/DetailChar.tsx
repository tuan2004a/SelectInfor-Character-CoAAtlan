import React from "react";

interface DetailProps {
    className?: string;
}

const DetailChar: React.FC<DetailProps> = ({ className }) => {
    return (
        <div className={className}>
            Detail Character
        </div>
    );
};

export default DetailChar;
