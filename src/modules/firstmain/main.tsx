import Image from "next/image"
import shape from "@/assets/images/shape.jpeg"
import file from "@/assets/images/file.png"
import player from "@/assets/images/player.png"
import home from "@/assets/images/home.jpeg"
import star from "@/assets/images/star.jpeg"
import insta from "@/assets/images/insta.jpeg"
import bunch from "@/assets/images/bunch.jpeg"


function Main() {
  return (
    <div className="bg-white md:ml-5 dark:bg-noble-black-800 rounded-md">
      <main className="px-2 pb-6">
        <div>
          <span className="text-gray-400 pt-2 flex">Hello Dave, Welcome back</span>
          <h2 className="flex text-2xl font-semibold pt-2 pb-4 dark:text-white">Your Dashboard is updated</h2>
        </div>
        <div className="grid grid-col-1 md:grid-cols-3 gap-3">
          <div className="flex flex-col items-center gap-5 py-4 dark:text-gray-700 bg-pink-100 rounded-md">
            <Image height={200} width={220} alt="img" src={shape} />
            <main className="flex justify-between gap-10">
              <span className="flex flex-col items-center">
                <span className="font-semibold text-lg">Latest Uploades</span>
                <span className="text-sm">987 total files</span>
              </span>
              <button className="bg-blue-900 px-3 text-white dark:text-white rounded-lg shadow-3xl">+</button>
            </main>
          </div>

          {/* 2nd */}
          <div className="grid md:px-2 gap-2 dark:text-gray-600">
            <div className=" bg-gray-100 px-12 md:px-8 py-2 items-center flex gap-9 md:gap-6 rounded-lg">
              <div className="flex flex-col">
                <span>Projects avail</span>
                <div className="flex flex-col">
                  <span className="font-semibold">Open Projects</span>
                  <span className="font-thin text-sm">3d tasks remaining</span>
                </div>
                <span>Complete tasks</span>
              </div>
              <Image height={60} width={60} alt="file" src={file} />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-gray-100 rounded-lg items-center flex flex-col py-4">
                <Image width={40} height={40} alt="playyer" src={player} />
                <h3 className="font-semibold text-lg">Latest Media</h3>
                <span className="font-thin text-sm">222 media files</span>
              </div>
              <div className="bg-blue-900 shadow-2xl rounded-lg text-white flex flex-col items-center py-4">
                <Image className="rounded-md" width={36} height={36} alt="img" src={home} />
                <h3 className="font-semibold text-lg">Urgent to do</h3>
                <span className="font-thin text-sm">High media files</span>
              </div>
            </div>
          </div>
          {/* 3rd */}
          <div>
            <div className="bg-blue-500 rounded-lg" >
              <main className="flex flex-col w-40 text-white pt-6 pl-5 gap-3">
                <div className="text-2xl font-semibold">What's your plan ?</div>
                <div className="font-thin text-sm">Looks like a shady day</div>
                <div className="text-2xl font-thin">36*</div>
              </main>
              <div className=" flex justify-end p-4 pb-5 relative items-center"><div className="p-6 flex bg-white rounded-l-3xl rounded-b-3xl"><button className="flex px-4 py-2 text-xl bg-blue-700 rounded-[100%] text-white">+</button></div></div>
            </div>
          </div>
        </div>
        {/*  */}
        <div>
          <main className="text-2xl font-semibold py-3 dark:text-white">Latest Updates</main>

          <div className="grid grid-col-1 md:grid-cols-3 gap-4">
            {/*  */}
            <div>
              <div className="grid grid-cols-2 pt-3 gap-2 dark:text-white">
                <button className="px-2 py-1 rounded-full text-sm hover:bg-blue-300 border dark:hover:bg-noble-black-600 border-blue-400">Addition</button>
                <button className="px-2 py-1 rounded-full text-sm hover:bg-blue-300 border dark:hover:bg-noble-black-600 border-blue-400">Upcoming tasks</button>
              </div>

              <div className=" gap-2 px-2 py-4 flex flex-col">
                <div className="flex justify-between pt-3">
                  <div className="flex gap-3">
                    <Image className="h-[42px] w-[45px] rounded-lg" width={50} height={50} alt="img" src={star} />
                    <div className="flex flex-col dark:text-white">
                      <span className="text-lg">Starbucks</span>
                      <span className="text-[13px]">Find Money</span>
                    </div>
                  </div>
                  <span className="text-green-300 flex items-center">+987.00</span>
                </div>

                <div className="flex justify-between">
                  <div className="flex gap-3">
                    <Image className="h-[42px] w-[45px] rounded-lg" width={50} height={50} alt="img" src={insta} />
                    <div className="flex flex-col dark:text-white">
                      <span className="text-lg">Instagram</span>
                      <span className="text-[13px]">Tech bussiness</span>
                    </div>
                  </div>
                  <span className="text-red-300 flex items-center">-656.00</span>
                </div>

                <div className="flex justify-between">
                  <div className="flex gap-3">
                    <Image className="h-[42px] w-[45px] rounded-lg" width={50} height={50} alt="img" src={bunch} />
                    <div className="flex flex-col dark:text-white">
                      <span className="text-lg">Bunch app</span>
                      <span className="text-[13px]">IT bases</span>
                    </div>
                  </div>
                  <span className="text-red-300 flex items-center">+390.00</span>
                </div>
              </div>
            </div>

            {/*  */}
            <div>
              <div className="bg-pink-200 shadow-2xl border-[20px]  border-orange-400  justify-center items-center flex md:h-[265px] md:w-[265px] text-center w-[330px] h-[330px] rounded-[100%] dark:text-black py-5">
                <div className="px-1 flex flex-col">
                  <span className="text-4xl">89%</span>
                  <span className="text-sm">Task completetion rate</span>
                </div>
              </div>
            </div>

            {/*  */}
            <div className="flex items-center py-20 md:py-1 flex-col justify-center gap-1 rounded-xl bg-purple-600 shadow-2xl text-white">
              <span className="text-sm">Great Job You Saved</span>
              <span className="text-3xl font-bold">$ 5,000</span>
              <span className="text-sm">Points Earned : 10,000</span>
            </div>


          </div>
        </div>
      </main>
    </div>
  )
}


export default Main