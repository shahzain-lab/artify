import React from 'react'
{
  /* Components */
}
import Link from 'next/link'
import Typography from '@/components/elements/Typography'
{
  /* Images */
}
import Image from 'next/image'
import logo from '@/assets/icons/artificium.svg'

const Elements = () => {
  const elements = [
    { title: 'Alert', path: '/elements/alert', icon: logo },
    { title: 'Card', path: '/elements/card', icon: logo }
  ]
  return (
    <div>
      {elements.map((ele, i) => (
        <Link key={i} href={ele.path}>
          <div key={i} className={`hover:bg-glass-fill rounded-[8px] my-1 px-1 py-4 flex justify-between items-center`}>
            <div className=' flex items-center gap-2'>
              {ele.icon ? <Image src={ele.icon} alt={ele.title || ''} width={20} height={20} className='' /> : null}
              <Typography variant='semibold' className='text-sm text-noble-black-100'>
                {ele.title}
              </Typography>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default Elements
