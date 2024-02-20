import Image from "next/image";
import React from "react";
import { FaArrowRight } from "react-icons/fa6";

function UpcomingEventsCard() {
  return (
    <>
      <div className=" bg-[#1B2C4F]  flex flex-col gap-2 p-2 rounded-3xl">
        <div className=" flex  gap-5 items-center">
          <div className=" bg-[#409BEE] text-black w-9 flex justify-center items-center rounded-full">
            <FaArrowRight className=" text-xl" />
          </div>
          <p className="text-xs sm:text-sm">Upcoming Events</p>
        </div>
        <div className=" flex gap-5">
          <div className=" border-4 border-white rounded-full md:w-20 w-10 h-10 md:h-20 flex justify-center items-center">
            <div>
              <div className="relative bg-white  md:w-12 w-6 h-6 md:h-12 overflow-hidden flex justify-center rounded-full">
                <Image
                  src="https://s3-alpha-sig.figma.com/img/8b5a/4720/f1f91378147a1d86fb51b990303d2459?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=paCX3L8cFs3cj~TocfYJsXhe~sX8cJGu28f3m9kLDaDP2NotJKznUOm7CHELo01GUQXWqkmosE4OplePvMZ9GK-ojaOyYYtQXr3ICQFcq2Xx-~o8QqpYc1-xvG7JtkskRrylKEvdRJ5IPRtokEDJcOYd0kzXwpgNGFIXxrbsSdEep2WkvL5YuMVlz-1nhxJ84RyCrEptzH7obVC3TlEqpVPOZm7eNozS34sYUoLrqm0wWgAMgclswbYQ8Lr3n5EAQEOGeb6JIOVDQpLHK6RJpzLVWZwBVu~itXkVqPKVejbsMY25U62i6Fpa5rKSXKQetgLOh5NYQk8yJ3EDGMkmjQ__"
                  alt="prof_img"
                  fill
                />
              </div>
            </div>
          </div>
          <div>
            <p className=" text-sm sm:text-xl font-bold">Aliza Shah</p>

            <div className=" text-xs">⏰ 08:00-09:00 am</div>
            <div className=" bg-[#2C3A58] text-xs px-2 rounded-3xl p-1">
              Visited 7 days ago
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UpcomingEventsCard;
