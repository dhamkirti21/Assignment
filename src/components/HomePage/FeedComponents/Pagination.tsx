import React from 'react';
import { IoIosArrowForward } from 'react-icons/io';

const paginationData: string[] = [
    "Home",
    "Hosting for all",
    "Hosting",
    "Hosting6",
    "Hosting5",
];

const Pagination = () => {
    return (
        <div className='text-xs flex p-2 '>
            {paginationData.map((page, index) => {
                return (
                    <div key={index} className="flex gap-2 items-center">
                        <p>{page}</p>
                        {index !== paginationData.length - 1 && <IoIosArrowForward />}
                    </div>
                );
            })}
        </div>
    );
};

export default Pagination;
