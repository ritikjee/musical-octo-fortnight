import Image from "next/image";
import { FaPhone } from "react-icons/fa6";
import { IoMicOutline } from "react-icons/io5";
import { FiSend } from "react-icons/fi";

function ChatCard() {
  return (
    <>
      <div className=" bg-[#1C2A4E] flex flex-col gap-3 sm:gap-1 mt-9 text-xs sm:text-sm sm:p-5  rounded-3xl">
        <div className=" flex w-full justify-between p-2 border-b border-gray-200">
          <div className=" flex gap-2">
            <div className="relative bg-white sm:w-12  sm:h-12 w-9 h-9 overflow-hidden flex justify-center rounded-full">
              <Image
                src="https://s3-alpha-sig.figma.com/img/8188/ea25/526e9a7c831b0e2bab81659c8eb0b0a0?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kKb1Rp4IX1zuiy6QfkWfua1LTcjoqvNzVb4CYGyCRbHjhJHA37vARJ5UIeWUPSVeEDrXC40gSKX7vtBSF-B76XgXNH-zQJuhcxFcIaP-zlsbQ4GLdYDtGLd9EZgiH7CWgrPRLEO1EtZgx8q~eFiQ~maByKEeLaUn4YSlQQpRi7usxNbzYMS-eFRVHenJOBfxJ1Uefg2zIYC7TkjxVthiOIP6-tk8-nj-mVeQWOwKNLPffnoJYhDBGDA2i6PEbcuxi~-9PhqqnVtlRDlNmdnMhlzYGUIJbkyTvDi83Tby8GZDURxjELhq1~p43zpAGcXHAcK3DDRfGL4KipJzmUUOhw__"
                alt="prof_img"
                width={30}
                height={30}
              />
            </div>
            <div>
              <p className=" font-bold">Alexa Max</p>
              <p className=" text-xs">Active 5 min ago</p>
            </div>
          </div>
          <div className=" bg-[#2C3A58] sm:h-10 sm:w-10 w-9 h-9  flex justify-center items-center rounded-full text-[#409BEE]">
            <FaPhone />
          </div>
        </div>
        <div className=" flex flex-col justify-center items-center gap-5  ">
          <div>
            <div className="  flex gap-2 ">
              <div className=" flex items-end justify-center">
                <div className="relative bg-white sm:w-12  sm:h-12 w-9 h-9 overflow-hidden flex justify-center rounded-full">
                  <Image
                    src="https://s3-alpha-sig.figma.com/img/8188/ea25/526e9a7c831b0e2bab81659c8eb0b0a0?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kKb1Rp4IX1zuiy6QfkWfua1LTcjoqvNzVb4CYGyCRbHjhJHA37vARJ5UIeWUPSVeEDrXC40gSKX7vtBSF-B76XgXNH-zQJuhcxFcIaP-zlsbQ4GLdYDtGLd9EZgiH7CWgrPRLEO1EtZgx8q~eFiQ~maByKEeLaUn4YSlQQpRi7usxNbzYMS-eFRVHenJOBfxJ1Uefg2zIYC7TkjxVthiOIP6-tk8-nj-mVeQWOwKNLPffnoJYhDBGDA2i6PEbcuxi~-9PhqqnVtlRDlNmdnMhlzYGUIJbkyTvDi83Tby8GZDURxjELhq1~p43zpAGcXHAcK3DDRfGL4KipJzmUUOhw__"
                    width={30}
                    height={30}
                    alt="prof_img"
                  />
                </div>
              </div>
              <div className=" flex flex-col gap-2">
                <div className=" bg-[#F1F1F1] w-28 text-xs  flex text-black rounded-xl p-1 ">
                  <p>Hi, Doctor. </p>
                </div>

                <div className=" bg-[#F1F1F1] w-44 sm:w-48 text-xs text-black rounded-xl p-1 ">
                  I got knee jerk. What should i do right now?
                </div>
              </div>
            </div>
            <div>
              <p className=" text-xs ml-14 mt-1">tue 02:32pm</p>
            </div>
          </div>

          <div>
            <div className=" flex gap-2">
              <div className=" flex flex-col items-end gap-2">
                <div className=" bg-[#F1F1F1] sm:w-48 text-black rounded-xl p-1 ">
                  Hi, Alexa.
                </div>

                <div className=" bg-[#F1F1F1] text-xs  w-44 sm:w-56 text-black rounded-xl p-1 ">
                  This help maintain balance and posture. dont worry.
                </div>
              </div>
              <div className=" flex items-start justify-center">
                <div className="relative bg-white sm:w-12  sm:h-12 w-9 h-9 overflow-hidden flex justify-center rounded-full">
                  <Image
                    src="https://s3-alpha-sig.figma.com/img/8188/ea25/526e9a7c831b0e2bab81659c8eb0b0a0?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kKb1Rp4IX1zuiy6QfkWfua1LTcjoqvNzVb4CYGyCRbHjhJHA37vARJ5UIeWUPSVeEDrXC40gSKX7vtBSF-B76XgXNH-zQJuhcxFcIaP-zlsbQ4GLdYDtGLd9EZgiH7CWgrPRLEO1EtZgx8q~eFiQ~maByKEeLaUn4YSlQQpRi7usxNbzYMS-eFRVHenJOBfxJ1Uefg2zIYC7TkjxVthiOIP6-tk8-nj-mVeQWOwKNLPffnoJYhDBGDA2i6PEbcuxi~-9PhqqnVtlRDlNmdnMhlzYGUIJbkyTvDi83Tby8GZDURxjELhq1~p43zpAGcXHAcK3DDRfGL4KipJzmUUOhw__"
                    alt="prof_img"
                    fill
                  />
                </div>
              </div>
            </div>
            <div>
              <p className=" text-xs ml-36 mt-1">tue 02:32pm</p>
            </div>
          </div>
        </div>

        <div className=" bg-[#2C3A58] flex p-2 items-center rounded-3xl">
          <IoMicOutline className=" text-2xl" />
          <input
            type="text"
            className="bg-transparent w-full h-full focus:outline-none"
            placeholder="Type your text......"
          />
          <div className="bg-[#409BEE] h-10 w-10 rounded-lg flex items-center justify-center">
            <FiSend className=" text-2xl" />
          </div>
        </div>
      </div>
    </>
  );
}

export default ChatCard;
