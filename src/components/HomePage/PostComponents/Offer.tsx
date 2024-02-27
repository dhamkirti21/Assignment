import React from 'react';

interface OfferProps {
    offer: string | number;
}

const Offer: React.FC<OfferProps> = (props) => {
    let offerText = typeof props.offer === 'string' ? props.offer : `${props.offer}% Off`;

    return (
        <p className="p-1 text-xs w-auto text-center mt-1 text-cyan-800 bg-[#F3F9FF] rounded-md whitespace-nowrap">
            {offerText}
        </p>
    );
};

export default Offer;
