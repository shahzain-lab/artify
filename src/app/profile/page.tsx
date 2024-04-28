import React from 'react'
{
  /* Image */
}
import Image from 'next/image'
import profilebg from "@/assets/images/profilebg.jpeg"
import profilebg2 from "@/assets/images/profilebg2.jpeg"
import profilebg3 from "@/assets/images/profilebg3.jpeg"
import profilebg4 from "@/assets/images/profilebg4.jpeg"
import boy from "@/assets/images/boy.jpeg"
import boy1 from "@/assets/images/boy1.jpeg"
import boy2 from "@/assets/images/boy2.jpeg"
import boy3 from "@/assets/images/boy3.jpeg"
import cartoon from "@/assets/images/cartoon.png"


const page = () => {
  return (
    <div className='w-[98%] justify-between bg-gray-200 flex md:flex-row flex-col dark:bg-noble-black-600 p-2'>
      <div className='w-[800px] px-2'>
        <div className='bg-blue-400 flex rounded-xl justify-between my-3'>
          <div className='text-white'>
            <div className='text-2xl w-80 p-4 pl-8'>Discover, Collect and Sell Various Extraordinary NFTS</div>
            <div className='gap-3 flex p-4 mb-2 pl-8'>
              <button className='border border-3-white px-4 py-1 rounded-lg'>Start Sale</button>
              <button className='border border-3-white px-4 py-1 rounded-lg'>Learn more</button>
            </div>
          </div>
          <Image className='mr-12' height={100} width={150} alt='cartoon' src={cartoon} />
        </div>
        <div className='flex justify-between m-2 py-2'>
          <span className='text-2xl font-semibold'>Trading Auction</span>
          <div className='gap-7 flex  text-noble-black-400 font-normal text-lg'>
            <span>Art</span>
            <span>Games</span>
            <span>Music</span>
            <span>Sport</span>
            <span>Utility</span>
          </div>
        </div>
        <main className='grid grid-cols-2 gap-5 w-[800px]'>
          <div className='flex flex-col w-[380px]'>

            <Image className='rounded-t-xl w-[380px] h-[147px]' height={180} width={380} alt='bg' src={profilebg} />
            <div className='bg-white rounded-b-xl p-2'>
              <div className='flex flex-col gap-1'>
                <span className='text-noble-black-400 '>Miller Kurt</span>
                <span className='font-medium mb-2 dark:text-black text-lg px-1'>Abstract Light Sky</span>
              </div>
              <div className='flex justify-between text-md'>
                <main className='flex flex-col gap-1 px-1'><span className='text-noble-black-400'>Current Bid</span><span className='font-medium dark:text-black text-lg'>0.85 ETH</span></main>
                <main className='flex flex-col gap-1 px-1'><span className='text-noble-black-400'>Auction Ending In</span><span className='font-medium text-lg dark:text-black'>03h : 26m : 49s</span></main>
              </div>
            </div>
          </div>
          <div className='flex flex-col w-[380px]'>
            <Image className='rounded-t-xl w-[380px] h-[147px]' height={190} width={380} alt='bg' src={profilebg2} />
            <div className='bg-white rounded-b-xl p-2'>
              <div className='flex flex-col gap-1'>
                <span className='text-noble-black-400'>Miller Arty</span>
                <span className='font-medium mb-2 text-lg dark:text-black px-1'>Under Audry Byr</span>
              </div>
              <div className='flex justify-between'>
                <main className='flex flex-col gap-1 px-1'><span className='text-noble-black-400'>Current Bid</span><span className='font-medium dark:text-black text-lg'>0.75 ETH</span></main>
                <main className='flex flex-col gap-1 px-1'><span className='text-noble-black-400'>Auction Ending In</span><span className='font-medium text-lg dark:text-black'>04h : 56m : 49s</span></main>
              </div>
            </div>
          </div>
          <div className='flex flex-col w-[380px]'>
            <Image className='rounded-t-xl w-[380px] h-[147px]' height={180} width={380} alt='bg' src={profilebg3} />
            <div className='bg-white rounded-b-xl p-2'>
              <div className='flex flex-col gap-1'>
                <span className='text-noble-black-400'>Jhonson Kurt</span>
                <span className='font-medium mb-2 text-lg dark:text-black px-1'>Snayt Hytrd Byr</span>
              </div>
              <div className='flex justify-between'>
                <main className='flex flex-col gap-1 px-1'><span className='text-noble-black-400 '>Current Bid</span><span className='font-medium dark:text-black text-lg'>0.80 ETH</span></main>
                <main className='flex flex-col gap-1 px-1'><span className='text-noble-black-400 '>Auction Ending In</span><span className='font-medium text-lg dark:text-black'>07h : 46m : 49s</span></main>
              </div>
            </div>
          </div>
          <div className='flex flex-col w-[380px]'>
            <Image className='rounded-t-xl w-[380px] h-[147px]' height={180} width={380} alt='bg' src={profilebg4} />
            <div className='bg-white rounded-b-xl p-2'>
              <div className='flex flex-col gap-1'>
                <span className='text-noble-black-400'>Miller Kurt</span>
                <span className='font-medium mb-2 text-lg dark:text-black px-1'>Huythd Hyrd Hrty</span>
              </div>
              <div className='flex justify-between '>
                <main className='flex flex-col gap-1 px-1'><span className='text-noble-black-400 '>Current Bid</span><span className='font-medium dark:text-black text-lg'>0.85 ETH</span></main>
                <main className='flex flex-col gap-1 px-1'><span className='text-noble-black-400 text-md'>Auction Ending In</span><span className='font-medium dark:text-black text-lg'>01h : 06m : 49s</span></main>
              </div>
            </div>
          </div>
        </main>
      </div>
      <div>
        <div className='bg-white dark:bg-noble-black-700 rounded-lg my-3 p-4'>
          <div className='flex justify-between pb-5 pt-3'><span className='font-semibold text-xl'>Top Creators</span><span className='text-noble-black-400'>See all</span></div>
          <div className='flex gap-2 flex-col'>
            <main className='flex justify-between gap-5'>
              <div className='flex gap-3 p-1'>
                <Image className='rounded-[100%] h-12 w-12' alt='img' height={100} width={100} src={boy} />
                <div className='flex flex-col'>
                  <span className='font-semibold'>Drawin Shaffer</span>
                  <span className='text-sm font-thin'>@drawin1</span>
                </div>
              </div>
              <button className='px-3 rounded-lg bg-blue-500 text-white'>Following</button>
            </main>
            <main className='flex justify-between gap-5'>
              <div className='flex gap-3 p-1'>
                <Image className='rounded-[100%] h-12 w-12' alt='img' height={100} width={100} src={boy1} />
                <div className='flex flex-col'>
                  <span className='font-semibold'>Drawin Shaffer</span>
                  <span className='text-sm font-thin'>@drawin1</span>
                </div>
              </div>
              <button className='px-3 rounded-lg border border-2-black'>Following</button>
            </main>
            <main className='flex justify-between gap-5'>
              <div className='flex gap-3 p-1'>
                <Image className='rounded-[100%] h-12 w-12' alt='img' height={100} width={100} src={boy2} />
                <div className='flex flex-col'>
                  <span className='font-semibold'>Drawin Shaffer</span>
                  <span className='text-sm font-thin'>@drawin1</span>
                </div>
              </div>
              <button className='px-3 rounded-lg border border-2-black'>Following</button>
            </main>
            <main className='flex justify-between gap-5'>
              <div className='flex gap-3 p-1'>
                <Image className='rounded-[100%] h-12 w-12' alt='img' height={100} width={100} src={boy3} />
                <div className='flex flex-col'>
                  <span className='font-semibold'>Drawin Shaffer</span>
                  <span className='text-sm font-thin'>@drawin1</span>
                </div>
              </div>
              <button className='px-3 rounded-lg border border-2-black'>Following</button>
            </main>
            <main className='flex justify-between gap-5'>
              <div className='flex gap-3 p-1'>
                <Image className='rounded-[100%] h-12 w-12' alt='img' height={100} width={100} src={boy} />
                <div className='flex flex-col'>
                  <span className='font-semibold'>Drawin Shaffer</span>
                  <span className='text-sm font-thin'>@drawin1</span>
                </div>
              </div>
              <button className='px-3 rounded-lg border border-2-black'>Following</button>
            </main>
            <main className='flex justify-between gap-5'>
              <div className='flex gap-3 p-1'>
                <Image className='rounded-[100%] h-12 w-12' alt='img' height={100} width={100} src={boy1} />
                <div className='flex flex-col'>
                  <span className='font-semibold'>Drawin Shaffer</span>
                  <span className='text-sm font-thin'>@drawin1</span>
                </div>
              </div>
              <button className='px-3 rounded-lg border border-2-black'>Following</button>
            </main>
          </div>
        </div>
        <div className='bg-white dark:bg-noble-black-700 rounded-lg'>
          <div className='p-4'>
            <div className='flex justify-between pb-5 pt-3'><span className='font-semibold text-xl'>Trending Collectors</span><span className='text-noble-black-400'>See all</span></div>
            <div className='gap-2 flex flex-col'>
              <main className='flex justify-between gap-5'>
                <div className='flex gap-3 p-1'>
                  <Image className='rounded-[100%] h-12 w-12' alt='img' height={100} width={100} src={boy} />
                  <div className='flex flex-col'>
                    <span className='font-semibold'>Drawin Shaffer</span>
                    <span className='text-sm font-thin'>@drawin1</span>
                  </div>
                </div>
                <button className='px-3 rounded-lg bg-blue-500 text-white'>Following</button>
              </main>
              <main className='flex justify-between gap-5'>
                <div className='flex gap-3 p-1'>
                  <Image className='rounded-[100%] h-12 w-12' alt='img' height={100} width={100} src={boy1} />
                  <div className='flex flex-col'>
                    <span className='font-semibold'>Drawin Shaffer</span>
                    <span className='text-sm font-thin'>@drawin1</span>
                  </div>
                </div>
                <button className='px-3 rounded-lg  border border-2-black'>Following</button>
              </main>
              <main className='flex justify-between gap-5'>
                <div className='flex gap-3 p-1'>
                  <Image className='rounded-[100%] h-12 w-12' alt='img' height={100} width={100} src={boy2} />
                  <div className='flex flex-col'>
                    <span className='font-semibold'>Drawin Shaffer</span>
                    <span className='text-sm font-thin'>@drawin1</span>
                  </div>
                </div>
                <button className='px-3 rounded-lg  border border-2-black'>Following</button>
              </main>
              <main className='flex justify-between gap-5'>
                <div className='flex gap-3 p-1'>
                  <Image className='rounded-[100%] h-12 w-12' alt='img' height={100} width={100} src={boy3} />
                  <div className='flex flex-col'>
                    <span className='font-semibold'>Drawin Shaffer</span>
                    <span className='text-sm font-thin'>@drawin1</span>
                  </div>
                </div>
                <button className='px-3 rounded-lg  border border-2-black'>Following</button>
              </main>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default page
