import React from 'react'
import { CiSearch } from 'react-icons/ci'

function Header() {
    return (
        <React.Fragment>
            <div className="flex flex-wrap w-full bg-slate-800 p-4 gap-4 md:gap-12 sm:gap-12 items-center justify-center">
                <div className="bg-white flex p-1 items-center gap-2 mt-3 sm:mt-0 md:mt-0 w-full md:w-1/4 sm:w-1/4 rounded-md">
                    <CiSearch size="2em" className='ml-2' />
                    <input
                        type="text"
                        name="search"
                        id="Search"
                        className="outline-1 focus:outline-0 placeholder:pl-2"
                    />
                </div>
                <div className="flex p-2 justify-center items-center gap-12 text-xs md:text-md sm:text-md text-slate-200">
                    <h4>Categories</h4>
                    <h4>Website Builders</h4>
                    <h4>Today's deals</h4>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Header