import React from "react";

interface StarRatingProps {
    starsCount: number;
    style: string;
}

const StarRating: React.FC<StarRatingProps> = ({ starsCount, style }) => {
    return (
        <div className="flex space-x-1">
            {[...Array(starsCount)].map((_, index) => (
                <span key={index} className={`text-[#FFEA74]  ${style}`}>
                    ★
                </span>
            ))}
        </div>
    );
};

export default StarRating;