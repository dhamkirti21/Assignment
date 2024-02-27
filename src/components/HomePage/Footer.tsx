import { RiArrowDropDownLine } from "react-icons/ri"

const Footer = () => {
    return (
        <div className="flex flex-col md:flex-row sm:flex-row gap-2 md:gap-12 sm:gap-12 pt-6 pb-12 text-slate-200 justify-center  bg-[#212731] mt-4" >
            <div className="p-4">
                <h5 className="text-sm mb-2 text-slate-400">CATOGORIES</h5>
                <div className="flex flex-col gap-3">
                    <p className="text-xs">Web Builder</p>
                    <p className="text-xs">Hosting</p>
                    <p className="text-xs">Data Center</p>
                    <p className="text-xs">Robotic-Automation</p>
                </div>
            </div>
            <div className="p-4">
                <h5 className="text-sm mb-2 text-slate-400">CONTACT</h5>
                <div className="flex flex-col gap-3">
                    <p className="text-xs">Contact</p>
                    <p className="text-xs">Privacy Policy</p>
                    <p className="text-xs">Terms Of Service</p>
                    <p className="text-xs">Categories</p>
                    <p className="text-xs">Categories</p>
                </div>
            </div>
            <div className="p-4">
                <div className="flex mt-0 md:mt-auto sm:mt-auto items-center border border-1 border-slate-400 rounded-xl text-xs ">
                    <select
                        name="relevancy"
                        id="filter"
                        className="block appearance-none w-full bg-transparent text-slate-400 py-3 px-4 pr-8 rounded leading-tight focus:outline-none "
                    >
                        <option value="United States">United States</option>
                        <option value="Italy">Italy</option>
                        <option value="India">India</option>
                    </select>
                    <RiArrowDropDownLine
                        size="2.5em"
                        className="z-10 relative right-6 md:right-10 sm:right-10"
                    />
                </div>
            </div>

        </div>
    )
}

export default Footer