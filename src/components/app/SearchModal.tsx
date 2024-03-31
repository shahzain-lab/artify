import React, { useState } from 'react'
{
  /* Components */
}
import ModalLayer from '../elements/ModalLayer'
import Input from '../elements/Input'
import { Button } from '../elements/Button'
import Typography from '../elements/Typography'
{
  /* Utils */
}
import {
  Backlog,
  Comment,
  Cross,
  Document,
  GetStarted,
  Image as ImageIcon,
  Project,
  Resource,
  UserPlus
} from '@/utils/icons'

interface SearchModalProps {
  isOpen?: boolean
  children?: React.ReactNode
}

const SearchModal: React.FC<SearchModalProps> = ({ isOpen = false, children }) => {
  const [isModalOpen, setIsModalOpen] = useState(isOpen)

  const handleOpen = () => setIsModalOpen(true)

  const tabClass = 'text-blue-500 w-4 h-4 md:w-5 md:h-5'

  const tabs = [
    {
      title: 'Workspaces',
      elements: [
        { title: 'Get Started', icon: <GetStarted className={`${tabClass}`} /> },
        { title: 'Invite', icon: <UserPlus className={`${tabClass}`} /> },
        { title: 'Projects', icon: <Project className={`${tabClass}`} /> },
        { title: 'Resources', icon: <Resource className={`${tabClass}`} /> }
      ]
    },
    {
      title: 'Library',
      elements: [
        { title: 'Docs', icon: <Document className={`${tabClass}`} /> },
        { title: 'Medias', icon: <ImageIcon className={`${tabClass}`} /> },
        { title: 'Comments', icon: <Comment className={`${tabClass}`} /> },
        { title: 'Files', icon: <Backlog className={`${tabClass}`} /> }
      ]
    }
  ]
  const recent = ['How to create library', 'Laila Stephan (member)']

  return (
    <>
      <div className='cursor-pointer' onClick={handleOpen}>
        {children}
      </div>
      {isModalOpen && (
        <ModalLayer setIsOpen={setIsModalOpen} position='top'>
          <div className='flex justify-between items-center'>
            <h5 className='text-xl font-medium'>Search the Dashboard</h5>
          </div>
          <div className='mt-4'>
            {/* Search Input (UI only, no functionality) */}
            <div className='flex gap-2 items-center'>
              <Input placeholder='Search ...' className='bg-gray-800  text-white outline-none pl-2 border-none' />
              <Button>Search</Button>
            </div>
            <p className='text-gray-500 text-sm mt-2'>
              This is a simulated search experience. It does not perform real web searches.
            </p>
            <div className='flex justify-around my-10'>
              {tabs.map((tab, i) => (
                <div key={i} className='flex items-start flex-col gap-3 md:w-64'>
                  <Typography className='text-sm text-gray-200'>{tab.title}</Typography>
                  {tab.elements.map((item) => (
                    <div
                      key={item.title}
                      className='py-2 px-4 text-[12px] md:text-sm flex items-center gap-3 w-full transition duration-150 border cursor-pointer hover:bg-[#3e3bfc2c] text-blue-500 rounded-lg hover:border-blue-500 border-gray-800'
                    >
                      {item.icon}
                      {item.title}
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div>
              <Typography className='text-sm text-gray-200'>Recent Search</Typography>
              <div className='flex gap-2 my-4 items-center'>
                {recent.map((rec) => (
                  <div
                    key={rec}
                    className='py-1.5 px-4 text-[12px] md:text-sm flex items-center gap-3 transition duration-150 border cursor-pointer hover:bg-[#3e3bfc2c] text-blue-500 rounded-lg hover:border-blue-500 border-gray-800'
                  >
                    {rec}
                    <Cross className='w-4 h-4 hover:text-blue-500' />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ModalLayer>
      )}
    </>
  )
}

export default SearchModal
