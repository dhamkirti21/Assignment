import React from 'react'

const Subscribe = () => {
    return (
        <div className='p-2 flex flex-col md:flex-row sm:flex-row gap-2 md:gap-24 sm:gap-24  items-center'>
            <div>
                <h2 className='text-left text-2xl'>Sign up and get exclusive special deals</h2>
            </div>
            <div className="bg-white flex p-1 h-full items-center  mt-3 sm:mt-0 md:mt-0 w-full md:w-3/4 sm:w-3/4 rounded-md">
                <input
                    type="text"
                    name="search"
                    id="Search"
                    className="outline-1 rounded-l-xl border w-3/4 border-1 focus:outline-0 h-[50px] placeholder:pl-4 "
                />
                <button className='w-1/4 h-[50px] text-white bg-[#1B88F4] rounded-r-xl' >Sign Up</button>
            </div>
        </div>
    )
}

export default Subscribe