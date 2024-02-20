import React from 'react'
import { CiSearch } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
import { GoDotFill } from "react-icons/go";
function Header() {
  return (
    <>
      <div className='  items-center py-2  flex justify-evenly'>
        <div>
          <p className=' text-xs sm:text-sm'>Hello,</p>
          <p className=' font-bold text-xs sm:text-lg '>Dr. Colter! </p>
        </div>
        <div className='w-2/3'>
          <div className='  bg-[#2C3A58] flex justify-center items-center h-8 sm:h-10 rounded-2xl p-1'>
            <CiSearch className='text-white  text-lg ' />
            <input type="text" className=' bg-transparent h-full w-full focus:outline-none p-1' placeholder='Search' />
          </div>
        </div>
        <div className=' bg-[#409BEE]  sm:h-10 h-9 w-9 sm:w-10 flex items-center justify-center rounded-md relative'>
          <div>
            <GoDotFill className='text-red-600 text-3xl absolute -top-1 -right-1' />
          </div>
          <IoIosNotificationsOutline className='text-white text-3xl' />
        </div>
      </div>
    </>
  )
}

export default Header