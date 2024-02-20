import React from 'react'
import { FaArrowTrendUp } from "react-icons/fa6";
import { IoIosMore } from "react-icons/io";

function ConsultationCard() {
    return (
        <>
            <div className=' bg-[#1B2C4F] p-5 flex flex-col justify-between rounded-3xl'>
                <div className=' flex flex-col gap-3'>
                    <div className=' flex justify-between w-full'>
                    <div>
                        <p className=' text-xs'>Consultation</p>
                        <p className=' text-xl font-bold'>82/100</p>
                    </div>
                    <div className=' text-2xl text-black'>
                        <IoIosMore />
                    </div>
                    </div>
                    
                </div>
                <div className=' flex  items-end justify-between'>
                <div className='p-1 rounded-3xl h-10 flex items-center justify-center w-20 bg-[#2C3A58]'>
                        <p>82%</p>
                        <FaArrowTrendUp />
                    </div>

                    <div className=' border-[12px] border-t-white border-b-[#409BEE] border-l-[#409BEE] border-r-[#409BEE] rotate-45 h-16 w-16 rounded-full'></div>

                </div>
            </div>
        </>)
}

export default ConsultationCard