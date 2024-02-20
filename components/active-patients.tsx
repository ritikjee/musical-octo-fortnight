import Image from "next/image";
import { IoMdAlarm } from "react-icons/io";

function ActivePatientsCard() {
  return (
    <>
      <div className=" bg-[#1B2C4F] text-xs   rounded-3xl flex flex-col gap-2 p-2">
        <div className=" flex items-center gap-4 justify-evenly">
          <p>08:00 am</p>
          <div className=" relative  h-14  flex  items-center">
            -----------------------------------
            <div className="bg-[#F5E5E5] text-xs text-black left-4 flex absolute rounded-full p-1 ">
              <div className="relative bg-white w-10 h-10 overflow-hidden flex justify-center rounded-full">
                <Image
                  src="https://s3-alpha-sig.figma.com/img/8188/ea25/526e9a7c831b0e2bab81659c8eb0b0a0?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kKb1Rp4IX1zuiy6QfkWfua1LTcjoqvNzVb4CYGyCRbHjhJHA37vARJ5UIeWUPSVeEDrXC40gSKX7vtBSF-B76XgXNH-zQJuhcxFcIaP-zlsbQ4GLdYDtGLd9EZgiH7CWgrPRLEO1EtZgx8q~eFiQ~maByKEeLaUn4YSlQQpRi7usxNbzYMS-eFRVHenJOBfxJ1Uefg2zIYC7TkjxVthiOIP6-tk8-nj-mVeQWOwKNLPffnoJYhDBGDA2i6PEbcuxi~-9PhqqnVtlRDlNmdnMhlzYGUIJbkyTvDi83Tby8GZDURxjELhq1~p43zpAGcXHAcK3DDRfGL4KipJzmUUOhw__"
                  alt="prof_img"
                  width={30}
                  height={30}
                />
              </div>
              <div>
                <p className=" font-bold ">Mark Jaxon</p>
                <div className=" flex text-xs items-center gap-1">
                  <IoMdAlarm />
                  <p>08:00-09:00 am</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className=" flex items-center justify-evenly">
          <p>08:00 am</p>
          <div className=" relative  h-14 flex justify-end items-center">
            -----------------------------------
            <div className="bg-[#E5F5E6]  text-black  flex absolute rounded-full p-1 ">
              <div className="relative bg-white w-10 h-10 overflow-hidden flex justify-center rounded-full">
                <Image
                  src="https://s3-alpha-sig.figma.com/img/8188/ea25/526e9a7c831b0e2bab81659c8eb0b0a0?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kKb1Rp4IX1zuiy6QfkWfua1LTcjoqvNzVb4CYGyCRbHjhJHA37vARJ5UIeWUPSVeEDrXC40gSKX7vtBSF-B76XgXNH-zQJuhcxFcIaP-zlsbQ4GLdYDtGLd9EZgiH7CWgrPRLEO1EtZgx8q~eFiQ~maByKEeLaUn4YSlQQpRi7usxNbzYMS-eFRVHenJOBfxJ1Uefg2zIYC7TkjxVthiOIP6-tk8-nj-mVeQWOwKNLPffnoJYhDBGDA2i6PEbcuxi~-9PhqqnVtlRDlNmdnMhlzYGUIJbkyTvDi83Tby8GZDURxjELhq1~p43zpAGcXHAcK3DDRfGL4KipJzmUUOhw__"
                  alt="prof_img"
                  width={30}
                  height={30}
                />
              </div>
              <div>
                <p className=" font-bold">Mark Jaxon</p>
                <div className=" flex text-xs items-center gap-1">
                  <IoMdAlarm />
                  <p>08:00-09:00 am</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className=" flex items-center justify-evenly">
          <p>08:00 am</p>
          <div className=" relative  h-14 flex justify-start items-center">
            -----------------------------------
            <div className="bg-[#C9F3EC] text-black  flex absolute rounded-full p-1 ">
              <div className="relative bg-white w-10 h-10 overflow-hidden flex justify-center rounded-full">
                <Image
                  src="https://s3-alpha-sig.figma.com/img/8188/ea25/526e9a7c831b0e2bab81659c8eb0b0a0?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kKb1Rp4IX1zuiy6QfkWfua1LTcjoqvNzVb4CYGyCRbHjhJHA37vARJ5UIeWUPSVeEDrXC40gSKX7vtBSF-B76XgXNH-zQJuhcxFcIaP-zlsbQ4GLdYDtGLd9EZgiH7CWgrPRLEO1EtZgx8q~eFiQ~maByKEeLaUn4YSlQQpRi7usxNbzYMS-eFRVHenJOBfxJ1Uefg2zIYC7TkjxVthiOIP6-tk8-nj-mVeQWOwKNLPffnoJYhDBGDA2i6PEbcuxi~-9PhqqnVtlRDlNmdnMhlzYGUIJbkyTvDi83Tby8GZDURxjELhq1~p43zpAGcXHAcK3DDRfGL4KipJzmUUOhw__"
                  alt="prof_img"
                  width={30}
                  height={30}
                />
              </div>
              <div>
                <p className=" font-bold">Mark Jaxon</p>
                <div className=" flex text-xs items-center gap-1">
                  <IoMdAlarm />
                  <p>08:00-09:00 am</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className=" flex items-center justify-evenly">
          <p>08:00 am</p>
          <div className=" relative  h-14 flex  justify-center items-center">
            -----------------------------------
            <div className="bg-[#111729] w-3/4 text-black  flex absolute rounded-full p-1 ">
              <div className=" w-full justify-center flex text-white">
                Break Time
              </div>
            </div>
          </div>
        </div>

        <div className=" flex items-center justify-evenly">
          <p>08:00 am</p>
          <div className=" relative  h-14 flex  items-center">
            -----------------------------------
            <div className="bg-[#F5E5E5]  text-black right-4 flex absolute rounded-full p-1 ">
              <div className="relative bg-white w-10 h-10 overflow-hidden flex justify-center rounded-full">
                <Image
                  src="https://s3-alpha-sig.figma.com/img/8188/ea25/526e9a7c831b0e2bab81659c8eb0b0a0?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kKb1Rp4IX1zuiy6QfkWfua1LTcjoqvNzVb4CYGyCRbHjhJHA37vARJ5UIeWUPSVeEDrXC40gSKX7vtBSF-B76XgXNH-zQJuhcxFcIaP-zlsbQ4GLdYDtGLd9EZgiH7CWgrPRLEO1EtZgx8q~eFiQ~maByKEeLaUn4YSlQQpRi7usxNbzYMS-eFRVHenJOBfxJ1Uefg2zIYC7TkjxVthiOIP6-tk8-nj-mVeQWOwKNLPffnoJYhDBGDA2i6PEbcuxi~-9PhqqnVtlRDlNmdnMhlzYGUIJbkyTvDi83Tby8GZDURxjELhq1~p43zpAGcXHAcK3DDRfGL4KipJzmUUOhw__"
                  alt="prof_img"
                  width={30}
                  height={30}
                />
              </div>
              <div>
                <p className=" font-bold">Mark Jaxon</p>
                <div className=" flex text-xs items-center gap-1">
                  <IoMdAlarm />
                  <p>08:00-09:00 am</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ActivePatientsCard;
