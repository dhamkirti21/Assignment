import React from 'react'
import { promotions } from "@/constants/promotionalData"
import PromotinalPost from './PromotinalPost'
const Promotion = () => {
    return (
        <div className='p-4'>
            <p className="text-xl">Related deals you might like for</p>
            <div className="block md:flex sm:flex gap-4 mt-6">
                {
                    promotions.map((promotion, index) => {
                        return <PromotinalPost
                            key={index}
                            imgUrl={promotion.imgUrl}
                            limitedOffer={promotion.limitedOffer}
                            title={promotion.title}
                            subtitle={promotion.subtitle}
                            price={promotion.price}
                            offerPrice={promotion.offerPrice}
                            offerPercentage={promotion.offerPercentage}
                        />
                    })
                }
            </div>
        </div>
    )
}

export default Promotion