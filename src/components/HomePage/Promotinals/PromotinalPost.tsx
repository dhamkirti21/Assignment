import { promotionalProps } from '@/constants/Interface'
import React from 'react'
import ImageComponent from './ImageComponent'
import Offer from '../PostComponents/Offer'

const PromotinalPost = (props: promotionalProps) => {

    return (
        <div className='w-full p-2 max-w-sm rounded-md shadow-sm mb-4'>
            <ImageComponent imageUrl={props.imgUrl} />
            <div className="flex gap-1 ml-2 whitespace-nowrap">
                <Offer offer={props.offerPercentage} />
                {props.limitedOffer && <Offer offer="Limited Offer" />}
            </div>
            <p className="text-xs font-bold text-center pt-2">{props.title}</p>
            <p className="text-xs  text-left p-2">{props.subtitle}</p>
            <div className="flex items-center gap-[0.2px]">
                <p className="text-sm  p-2">${props.offerPrice}</p>
                <p className="text-xs text-slate-400 p-1 pt-2">${props.price}</p>
                <p className="text-xs text-red-400  p-1 pt-2">{`(${props.offerPercentage}% Off)`}</p>
            </div>
            <div>
                <button className='h-10 mt-1 w-full text-white hover:bg-[#68a3dd] bg-[#1B88F4] rounded-xl' >View Deal</button>
            </div>
        </div>
    )
}

export default PromotinalPost