import React from 'react'
{
  /* Components */
}
import Link from 'next/link'
import Typography from '@/components/elements/Typography'
import { Alert, Card, Rectangle, Tab } from '@/utils/icons'


const Elements = () => {
  const elements = [
    { title: 'Alert', path: '/elements/alert', Icon: Alert },
    { title: 'Button', path: '/elements/button', Icon: Rectangle },
    { title: 'Card', path: '/elements/card', Icon: Card },
    { title: 'Tabs', path: '/elements/tabs', Icon: Tab }
  ]
  return (
    <div>
      {elements.map((ele, i) => (
        <Link key={i} href={ele.path}>
          <div key={i} className={`hover:bg-glass-fill rounded-[8px] my-1 px-1 py-4 flex justify-between items-center`}>
            <div className=' flex items-center gap-2'>
              {ele.Icon ? <ele.Icon className='dark:text-gray-300 text-gray-600 w-5 h-5' /> : null}
              <Typography variant='semibold' className='text-sm dark:text-noble-black-100 text-noble-black-400'>
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
