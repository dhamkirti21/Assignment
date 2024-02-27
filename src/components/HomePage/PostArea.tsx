import React from "react"
import Info from "./FeedComponents/Info";
import Tools from "./FeedComponents/Tools";
import Pagination from "./FeedComponents/Pagination";
import Post from "./Post";
import { posts } from "@/constants/postData";
import Promotion from "./Promotinals/Promotion";
import Subscribe from "./Subscribe";

const PostArea = () => {
    return (
        <React.Fragment>
            <div className="block md:flex sm:flex mt-6 w-full min-w-[256px] text-slate-700 justify-center">
                <div className="gap-2">
                    <div className="pb-4 pt-8 pl-2 ">
                        <h1 className="text-2xl sm:text-4xl md:text-4xl">
                            Best Website Builder in US
                        </h1>
                    </div>
                    <Info />
                    <Tools />
                    <Pagination />
                    <div className="p-6">
                        {
                            posts.map((data, index) => {
                                return <Post
                                    serialno={data.serialno}
                                    title={data.title}
                                    rating={data.rating}
                                    offer={data.offer}
                                    lovereason={data.lovereason}
                                    ratingRemark={data.ratingRemark}
                                    description={data.description}
                                    mainHighlight={data.mainHighlight}
                                    imageTitle={data.imageTitle}
                                    key={index}
                                />
                            })
                        }
                    </div>
                    <Promotion />
                    <Subscribe />
                </div>
            </div>
        </React.Fragment>
    )
}

export default PostArea