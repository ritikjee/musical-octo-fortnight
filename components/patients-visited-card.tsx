import React from 'react'
import { FaArrowTrendUp } from "react-icons/fa6";

function PatientsvisitedCard() {
  return (
    <div className='bg-[#1B2C4F]  flex justify-between  rounded-3xl '>
      <div className=' p-5'>
        <p className=' text-xl font-bold'>42 </p>
        <p className=' text-sm font-bold'>Patients Visited</p>
        <p className=' text-xs'>This month</p>
      </div>
      <div className='bg-[#2C3A58] w-1/3  rounded-r-3xl flex justify-center items-center'>
        <div className=' px-8 '>
          <div className='bg-[#409BEE80] w-16 text-[#409BEE80] h-9 rounded-t-full'>

          </div>
          <div className=' bg-[#409BEE] rounded-b-full flex justify-center items-center h-16 flex-col'>
            <FaArrowTrendUp className='text-white text-3xl' />
            <p>70%</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PatientsvisitedCard