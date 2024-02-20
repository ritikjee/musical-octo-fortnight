import Image from "next/image";
import ChatCard from "./chat-card";

function Profile() {
  return (
    <>
      <div className=" bg-[#111729] rounded-3xl p-1 pb-10   flex flex-col justify-between items-center">
        <div className=" relative rotate-45  h-28 w-28">
          <div className=" relative  h-28 w-28 flex justify-center items-center border-4 border-b-[#409BEE] border-t-[#151C39] border-l-[#409BEE] border-r-[#409BEE]   rounded-full">
            <div className="  rotate-180  relative">
              <div className=" rotate-90  bg-white  w-20 h-20 overflow-hidden flex justify-center rounded-full">
                <Image
                  src="https://s3-alpha-sig.figma.com/img/8188/ea25/526e9a7c831b0e2bab81659c8eb0b0a0?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kKb1Rp4IX1zuiy6QfkWfua1LTcjoqvNzVb4CYGyCRbHjhJHA37vARJ5UIeWUPSVeEDrXC40gSKX7vtBSF-B76XgXNH-zQJuhcxFcIaP-zlsbQ4GLdYDtGLd9EZgiH7CWgrPRLEO1EtZgx8q~eFiQ~maByKEeLaUn4YSlQQpRi7usxNbzYMS-eFRVHenJOBfxJ1Uefg2zIYC7TkjxVthiOIP6-tk8-nj-mVeQWOwKNLPffnoJYhDBGDA2i6PEbcuxi~-9PhqqnVtlRDlNmdnMhlzYGUIJbkyTvDi83Tby8GZDURxjELhq1~p43zpAGcXHAcK3DDRfGL4KipJzmUUOhw__"
                  alt="prof_img"
                  className=" rotate-45"
                  width={100}
                  height={100}
                />
              </div>
            </div>
          </div>
        </div>
        <div className=" flex flex-col items-center">
          <p className="pt-4">ALIAM COLTER</p>
          <p className="pb-5 text-xs">Physician</p>
        </div>

        <div className=" bg-[#1C2A4E] rounded-3xl w-full p-2 flex items-center justify-between">
          <div>
            <p className=" text-xs sm:text-sm">Active Patients</p>
          </div>
          <div className=" flex  items-center justify-end">
            <div className=" flex items-center justify-end  relative  w-28 sm:w-32  h-10  ">
              <div className="border border-gray-600 absolute left-4 bg-[#E8BBF8] h-8 w-8 rounded-full flex justify-center items-center overflow-hidden">
                <Image
                  src="https://s3-alpha-sig.figma.com/img/8b5a/4720/f1f91378147a1d86fb51b990303d2459?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=paCX3L8cFs3cj~TocfYJsXhe~sX8cJGu28f3m9kLDaDP2NotJKznUOm7CHELo01GUQXWqkmosE4OplePvMZ9GK-ojaOyYYtQXr3ICQFcq2Xx-~o8QqpYc1-xvG7JtkskRrylKEvdRJ5IPRtokEDJcOYd0kzXwpgNGFIXxrbsSdEep2WkvL5YuMVlz-1nhxJ84RyCrEptzH7obVC3TlEqpVPOZm7eNozS34sYUoLrqm0wWgAMgclswbYQ8Lr3n5EAQEOGeb6JIOVDQpLHK6RJpzLVWZwBVu~itXkVqPKVejbsMY25U62i6Fpa5rKSXKQetgLOh5NYQk8yJ3EDGMkmjQ__"
                  width={30}
                  height={30}
                  alt=""
                />
              </div>
              <div className=" border border-gray-600 absolute left-10  bg-[#BBF8F1] h-8 w-8 rounded-full flex justify-center items-center overflow-hidden">
                <Image
                  src="https://s3-alpha-sig.figma.com/img/8014/985c/dae4c93a3cbc0642a8d459d32918c0aa?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jqbU9VOu3LAOdnP92XBBZHwkpeJozYQRjNCBnHYfY7v7Bk4YwqmoyhlJ9vMlDGkpVsey8EL7eAvjwVJvOrLG4OoX99DXRZiv2oHvPKQGAw6rwW-bqquMLeZ3xVh0aQALxGrmd1QOh1sWf47Uro32W04OSp0C-LUuJgrvyIyr9lipgvPdy4pKuvpJE-iaXqOy09M25ckw3aT7NXo0b1kHOAAdA~SoUnMzJZ0ST5ShBrqGMQGBO4kCzOwWqn4~-xciCHwF8Gu940qa2gNLGzuHPG3A93lxgAdP3R9zMmJVwLcDB6aMHnx-sqYFSoK1eUkjXoBpuT7~WftGDKZMqSInNQ__"
                  width={30}
                  height={30}
                  alt=""
                />
              </div>
              <div className=" border border-gray-600 absolute left-16 bg-[#CBF8BB] h-8 w-8 rounded-full flex justify-center items-center overflow-hidden">
                <Image
                  src="https://s3-alpha-sig.figma.com/img/b600/cc80/c5f0dad9ee571a641b107b1231ac6e16?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oMq0tidW6vpvrv~xeFKbhLfwYyCosxDfb96lMss3FcL0cIKghkbzIOdOAC7CU2BawQSxn3CKBKnm2Lricb-26ltKaBHQdzS19sCFwGLffTom96J6AhPKcZEamTb7P9-8SCtdfquEt9WjhKbcd8A7zGV5f1e9RzbZ74ljurcEyT9jxwW0yNlFieJxzvsS-vchWlERobOiVjV3n60GTDC-YWf~9siD9JAM9W6MB0jEYPaPxBKbANBVBGtOlWoxUhaJ-W~keyDveTdIXEBirCDINzb9JqtZlszFuAKpDuhzTWhAEYP9G6JRegQHVAh351mAEe1JFVfSLIXR-nNtXOlgUw__"
                  width={30}
                  height={30}
                  alt="."
                />
              </div>
              <div className=" border border-gray-600  absolute left-20 text-black bg-[#CBF8BB] h-8 w-8 rounded-full flex justify-center items-center overflow-hidden">
                <p>8+</p>
              </div>
            </div>
          </div>
        </div>
        <div className=" w-full">
          <ChatCard />
        </div>
      </div>
    </>
  );
}

export default Profile;
