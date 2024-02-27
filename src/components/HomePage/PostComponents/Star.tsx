import React from 'react';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';

interface StarProps {
    rating: number;
}

const Star: React.FC<StarProps> = ({ rating }) => {
    const totalStars = 5;
    const filledStars = Math.floor(rating); // Get the integer part of the rating
    const hasHalfStar = rating % 1 !== 0; // Check if there's a fractional part

    return (
        <div className='flex gap-[0.5px] justify-center'>
            {[...Array(totalStars)].map((_, index) => {
                if (index < filledStars) {
                    return <FaStar key={index} color="#ffc107" size="0.67em" />;
                } else if (hasHalfStar && index === filledStars) {
                    return <FaStarHalfAlt key={index} color="#ffc107" size="0.67em" />;
                } else {
                    return <FaStar key={index} color="#e4e5e9" size="0.67em" />;
                }
            })}
        </div>
    );
};

export default Star;
