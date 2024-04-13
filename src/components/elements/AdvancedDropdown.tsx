'use client'
import React, { FC, useState } from 'react'
import Typography from './Typography'
import Divider from './Divider'
import Avatar from './Avatar'

interface IHeader {
  title?: React.ReactNode | string
  tag?: React.ReactNode | string
}

interface IList {
  icon?: JSX.Element
  title?: React.ReactNode | string
  desc?: React.ReactNode | string
}

interface Props {
  children: React.ReactNode
  header?: IHeader
  list?: IList[]
  footer?: React.ReactNode
}

const AdvancedDropdown: FC<Props> = ({ children, header, list, footer }) => {
  const [open, setOpen] = useState(false)
  return (
    <div className='relative'>
      <button onClick={() => setOpen(!open)}>{children}</button>
      {open && (
        <div className='absolute bg-white dark:text-white dark:bg-noble-black-700 shadow-lg border border-gray-100 dark:border-gray-600 text-black right-0 w-72 md:w-80 p-3 rounded-md'>
          {header && (
            <div className='flex border-b border-gray-300 mb-2 pb-2 justify-between items-center'>
              <Typography className='text-lg'>{header.title}</Typography>
              <span className='px-3 py-1 rounded-full bg-[#5bf14166]'>{header.tag}</span>
            </div>
          )}
          <Divider />
          {list &&
            list.map((lst, i) => (
              <div key={i} className='flex gap-2 py-3 items-center'>
                <Avatar size='small' letter='l' />
                <div className='flex flex-col'>
                  <Typography variant='semibold' className='text-gray-600 dark:text-white'>{lst.title}</Typography>
                  <span className="text-[12px]">{lst.desc}</span>
                </div>
              </div>
            ))}
          <Divider />
          {footer && <div className='w-full py-3'>{footer}</div>}
        </div>
      )}
    </div>
  )
}

export default AdvancedDropdown
