import { CiCircleCheck, CiCircleInfo, CiFilter } from 'react-icons/ci';
import { RiArrowDropDownLine } from 'react-icons/ri';

const Info = () => {
    return (
        <div className="min-w-[396px] max-w-[900px]">
            <hr className="h-px my-1 border-1 bg-gray-400" />
            <div className="block md:flex sm:flex justify-between gap-32 items-center text-slate-600">
                <div className="block md:flex sm:flex">
                    <div className="flex items-center gap-2 p-2">
                        <CiCircleCheck size="1.5em" />
                        <p className="text-xs">Last Updated - February 14 , 2020</p>
                    </div>
                    <div className="flex items-center gap-2 p-2">
                        <CiCircleInfo size="1.5em" />
                        <p className="text-xs">Advertising Disclosure</p>
                    </div>
                </div>
                <div className="flex items-center text-xs ">
                    <CiFilter
                        size="2.5em"
                        className='relative left-2' />
                    <select
                        name="relevancy"
                        id="filter"
                        className="block appearance-none w-full bg-white text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    >
                        <option value="Top Relevent">Top Relevent</option>
                        <option value="Latest">Latest</option>
                        <option value="Top Relevent">Top Relevent</option>
                    </select>
                    <RiArrowDropDownLine
                        size="2.5em"
                        className="z-10 relative right-6 md:right-10 sm:right-10"
                    />
                </div>
            </div>
            <hr className="h-px my-1 border-1 bg-gray-400" />
        </div>
    );
};

export default Info;
