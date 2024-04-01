import type { Metadata } from 'next'
import Headers from '@/modules/project/header'

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className='flex flex-col w-full md:w-[79%] p-2'>
      <Headers />
      {/* <div className='w-full md:w-[79%] pb-28 relative'> */}
      {children}
      {/* </div> */}
    </div>
  )
}
