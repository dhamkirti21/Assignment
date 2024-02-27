import { ReactNode } from "react";

type Highlight = string | ReactNode;

export interface postProps {
    serialno: number,
    title: string,
    rating: number,
    ratingRemark: string,
    description: string,
    imageTitle: string,
    mainHighlight: Highlight,
    lovereason: string[]
    offer: number,
    specialBadge: ReactNode
}

export interface promotionalProps {
    imgUrl: string,
    limitedOffer: boolean,
    title: string,
    subtitle: string,
    price: number,
    offerPrice: number,
    offerPercentage: number

}