"use client"
import React, { ReactNode } from 'react'
import Image from 'next/image'
import { RiArrowDropDownLine } from "react-icons/ri";
import web from "@/assets/images/web.jpg"
import Star from './PostComponents/Star';
import Reason from './FeedComponents/Reason';
import { postProps } from '@/constants/Interface';
import Offer from './PostComponents/Offer';


const Post = (props: postProps) => {



    return (
        <div className="block p-4 rounded-md md:flex sm:flex gap-2 shadow-sm mb-4">
            <React.Fragment>
                <p className='absolute border size-6 border-1 overflow-hidden border-slate-300 text-slate-500 rounded-full text-center'>{props.serialno}</p>
                <div className=' mt-12'>
                    <Image
                        src={web}
                        alt="post-thumbnail"
                        width={141}
                        className='p-2 ml-auto mr-auto'
                        height={103}
                    />
                    <p className="text-xs pt-2 text-center hidden md:block sm:block text-slate-500">{props.imageTitle}</p>
                </div>
            </React.Fragment>
            <div className='text-left text-slate-700 p-2 max-w-sm leading-4'>
                <p className='text-xs'><span className='font-semibold'>{props.title}- </span>{props.description}</p>
                {
                    (props.offer !== 0) && <p className="p-1 text-xs w-1/6 text-center mt-1 text-cyan-800 bg-[#F3F9FF] rounded-md whitespace-nowrap">
                        {props.offer}% Off
                    </p>
                }
                <p className='font-bold text-xs pt-2'>Main Highlight: </p>
                <p className="text-xs p-2">
                    {props.mainHighlight}
                </p>
                {
                    (props.lovereason.length !== 0) && <Reason reason={props.lovereason} />
                }
                <p className="text-xs pt-2 flex items-center text-blue-500">
                    Show More
                    <RiArrowDropDownLine size="1.25em" />
                </p>
            </div>
            <div className='flex flex-col justify-between'>
                <div className="flex flex-col pb-4 gap-1 bg-[#F3F9FF] text-center ml-auto mr-auto w-full md:w-3/4 sm:w-3/4  rounded-b-md">
                    <p className="text-4xl text-cyan-800 mt-2">{props.rating}</p>
                    <p className="text-xs text-cyan-800">{props.ratingRemark}</p>
                    <Star rating={props.rating} />
                </div>
                <div className='mt-3 md:mt-0 sm:mt-0'>
                    <button className='h-16 md:h-10 sm:h-10 w-full md:w-40 sm:w-40 text-white hover:bg-[#68a3dd] bg-[#1B88F4] rounded-xl' >View</button>
                </div>
            </div>

        </div>
    )
}

export default Post