import React from 'react'

interface Props {
  children?: React.ReactNode
}

const Checkbox = ({ children }: Props) => {
  return (
    <div className='flex items-center'>
      <input
        id='default-checkbox'
        type='checkbox'
        value=''
        className='w-4 h-4 text-blue-600 bg-gray-100 border-noble-black-500 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
      />
      <label htmlFor='default-checkbox' className='ms-2 text-sm font-medium text-gray-900 dark:text-noble-black-500'>
        {children}
      </label>
    </div>
  )
}

export default Checkbox
