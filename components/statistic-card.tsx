import React from 'react'
import { MdKeyboardArrowDown } from "react-icons/md";

function StatisticsCard() {
    return (
        <>
            <div className=' bg-[#1B2C4F] sm:w-1/2 h-full rounded-3xl p-5 '>
                <div className=' flex justify-between'>
                    <div>
                        <p className=' text-2xl font-bold'>Statistics</p>
                        <p className=' text-sm'>November 2023</p>
                    </div>
                    <div className=' border-[1px] border-[#409BEE] flex justify-center items-center rounded-full w-28 h-10'>
                        Weekly
                        <MdKeyboardArrowDown />
                    </div>
                    <div className='relative'>
                        <div className="icon"></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default StatisticsCard