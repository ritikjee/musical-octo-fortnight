import Image from "next/image";
import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import { IoIosNotifications, IoMdAlarm } from "react-icons/io";

function TeamMeetingCard() {
  return (
    <>
      <div className=" bg-[#1B2C4F] p-5  flex flex-col  gap-2 rounded-3xl">
        <div className=" flex justify-between">
          <div>
            <div>
              <p className=" font-bold text-xl">Team Meeting</p>
            </div>
            <div className=" flex text-xs items-center gap-1">
              <IoMdAlarm />
              <p>05:00-06:00</p>
            </div>
          </div>
          <div className=" bg-[#2C3A58] h-14 w-14 flex items-center justify-center rounded-md relative">
            <IoIosNotifications className=" text-3xl text-[#409BEE]" />
          </div>
        </div>
        <div className=" flex justify-between">
          <div>
            <div className=" flex relative w-40 h-10  ">
              <div className="border border-gray-600 absolute bg-[#E8BBF8] h-10 w-10 rounded-full flex justify-center items-center overflow-hidden">
                <Image
                  src="https://s3-alpha-sig.figma.com/img/1f57/a2de/ab9c3c9fbfc3530a82a1c7798081fb84?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GKVoYVA5KXJruEBXgLGu0Lgp70MQR-R34CZ1SJIvgG5otki935rOa78UMMq69ENa5ZrD5~ZrGQdAGlYuX~ODNk73HuA2ZM1M4BFFmLY3TMD2HX92zd6lJ0YQyuLHiGKe9hW5Uv1912yLoyO2iV8Xg3y7Hn20XAi6ukH~x-BC0gexB3inMyOpIklyqCb~PufnhpyS-vVTHTHfemH5CgG6E2z8pJ~8Ajm0nmfhGU2VgjWI8~qg44SzEiEk1ZrvXHAkDKhGdZVjAcN783vNb6~NQDD3l1dNYJzjwmpQgHWN7H0drEsjHBTpPewG0BWhkBrsFSXFxGsy5wlUgTbuQVPSgA__"
                  height={30}
                  width={30}
                  alt="avatar-image"
                />
              </div>
              <div className=" border border-gray-600 absolute left-7  bg-[#BBF8F1] h-10 w-10 rounded-full flex justify-center items-center overflow-hidden">
                <Image
                  src="https://s3-alpha-sig.figma.com/img/5a4e/063a/657a9761fafc59051e7854809d98f287?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=eYdQxb8xdKafq0GwGruXCwZybYwcc5cuK8Exbt0MdfOEncfwxDwORC0jxBl7D~DTvaEI~A5jWCftQouzXVRie6zWo-FXIKP9iKSzzl7ocFD3ofjFf8LjZhHZJ0dts7fsj~Nvq4rJ8pNvA1Lckft3X6eIkValUKJIj5lMI0xpJuOeSco3y8lKqxV5THzsl6vLavK9xcaPbU35bw-d7slzEh2iTF4sUe05Un6~YyvD3QgdAk16~PY9vTvRt5fRQae~FBhuD9QySBwTh9h~xIQeyCbststvmHDWCSWPzmRpJ7DpLb035ap1q3Ingu7N5CGibEA2g7YfzGmOv8rWU7jpSQ__"
                  width={30}
                  height={30}
                  alt="avatar-image"
                />
              </div>
              <div className=" border border-gray-600 absolute left-14 bg-[#CBF8BB] h-10 w-10 rounded-full flex justify-center items-center overflow-hidden">
                <Image
                  src="https://s3-alpha-sig.figma.com/img/ecc3/f4d5/8ea858251bb3a26c2c6991921dc7e074?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IMTyOXe~oC9C~qrTlroukAItaTha4wUK5j5l4qSQoUejoUt29PAcZBvv0L5womA8vi3ZOh~t8dxJZ4FTaP7MihWpxx48CcZh48bwfngjSuRg1v19GK3HjBZFoaIMST3jRnlyrhweIEtVJhlIvyvo8QHaCltAKFQaq1iueyWlecHLyO-z~NlmoC8D4aR8TXYYqzUDWfffjMUAOgSsX2wa3qnLIKnH4JCgZJqUaRzerNXo2t9hMkTYuOzhwmxGZ5QRq8bdZfn0e14VLy1qdj4r2bFEfPzOXyd8em4YsABPvx5M9hFSkBtl3mX-iQlbgDPO8Nb3bP4s2GyyQ2NcxZBwiA__"
                  width={30}
                  height={30}
                  alt="avatar-image"
                />
              </div>
              <div className=" border border-gray-600  absolute left-20 text-black bg-[#CBF8BB] h-10 w-10 rounded-full flex justify-center items-center overflow-hidden">
                <p>4+</p>
              </div>
            </div>
          </div>
          <div className=" bg-[#409BEE] text-black w-14 h-10 flex justify-center items-center p-1 rounded-xl">
            <FaArrowRight className=" text-xl" />
          </div>
        </div>
      </div>
    </>
  );
}

export default TeamMeetingCard;
