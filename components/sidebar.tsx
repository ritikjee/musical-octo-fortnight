import Image from "next/image";
import { BsFire } from "react-icons/bs";
import { AiOutlineHome } from "react-icons/ai";
import { FaRegFileAlt } from "react-icons/fa";
import { LuPieChart } from "react-icons/lu";
import { PiChatCircleTextBold } from "react-icons/pi";
import { IoSettingsOutline } from "react-icons/io5";
import { AiOutlineLogout } from "react-icons/ai";

function Sidebar() {
  return (
    <div className=" h-screen sm:w-20 overflow-hidden  flex items-center flex-col justify-between text-3xl p-1  ">
      <div className="  ">
        <BsFire className="text-[#409BEE] text-xl sm:text-3xl" />
      </div>
      <div className=" text-2xl flex flex-col justify-evenly items-center gap-5 text-white">
        <div className="  hover:bg-[#2C3A58] h-10 w-10 flex justify-center items-center rounded-lg">
          <AiOutlineHome />
        </div>
        <div className="  hover:bg-[#2C3A58] h-10 w-10 flex justify-center items-center rounded-lg">
          <FaRegFileAlt />
        </div>
        <div className="  hover:bg-[#2C3A58] h-10 w-10 flex justify-center items-center rounded-lg">
          <PiChatCircleTextBold />
        </div>
        <div className="  hover:bg-[#2C3A58] h-10 w-10 flex justify-center items-center rounded-lg">
          <PiChatCircleTextBold />
        </div>
        <div className="  hover:bg-[#2C3A58] h-10 w-10 flex justify-center items-center rounded-lg">
          <LuPieChart />
        </div>
        <div className="  hover:bg-[#2C3A58] h-10 w-10 flex justify-center items-center rounded-lg">
          <IoSettingsOutline />
        </div>
      </div>
      <div className=" flex flex-col justify-center items-center gap-5">
        <div className="relative bg-white sm:w-12 w-9 h-9 sm:h-12 overflow-hidden flex justify-center rounded-full">
          <Image
            src="https://s3-alpha-sig.figma.com/img/8188/ea25/526e9a7c831b0e2bab81659c8eb0b0a0?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kKb1Rp4IX1zuiy6QfkWfua1LTcjoqvNzVb4CYGyCRbHjhJHA37vARJ5UIeWUPSVeEDrXC40gSKX7vtBSF-B76XgXNH-zQJuhcxFcIaP-zlsbQ4GLdYDtGLd9EZgiH7CWgrPRLEO1EtZgx8q~eFiQ~maByKEeLaUn4YSlQQpRi7usxNbzYMS-eFRVHenJOBfxJ1Uefg2zIYC7TkjxVthiOIP6-tk8-nj-mVeQWOwKNLPffnoJYhDBGDA2i6PEbcuxi~-9PhqqnVtlRDlNmdnMhlzYGUIJbkyTvDi83Tby8GZDURxjELhq1~p43zpAGcXHAcK3DDRfGL4KipJzmUUOhw__"
            alt="prof_img"
            fill
          />
        </div>
        <div>
          <AiOutlineLogout />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
