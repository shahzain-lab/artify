import React from 'react'
import CardLayer from '@/components/elements/CardLayer'
import { Tab, Tabs } from '@/components/elements/Tabs'
import { Artificium, Danger, Plus, Warning } from '@/utils/icons'

const page = () => {
  return (
    <div className='pr-6'>
      <CardLayer title='Default tabs' className='w-full'>
        <Tabs defaultTab={0} orientation='horizontal' className='w-full'>
          {[1, 2, 3].map((_, i) => (
            <Tab key={i} id={i} title={`Tab ${i + 1}`}>
              Content of Tab {i + 1}
            </Tab>
          ))}
        </Tabs>
      </CardLayer>
      <div className='grid grid-cols-2 w-full gap-5 my-5'>
        <CardLayer title='Coloured tabs'>
          <Tabs defaultTab={0} orientation='horizontal' className='w-full'>
            {[1, 2, 3].map((_, i) => (
              <Tab key={i} id={i} color='green' title={`Tab ${i + 1}`}>
                Content of Tab {i + 1}
              </Tab>
            ))}
          </Tabs>
          <Tabs defaultTab={0} orientation='horizontal' className='w-full'>
            {[1, 2, 3].map((_, i) => (
              <Tab key={i} id={i} color='primary' title={`Tab ${i + 1}`}>
                Content of Tab {i + 1}
              </Tab>
            ))}
          </Tabs>
          <Tabs defaultTab={0} orientation='horizontal' className='w-full'>
            {[1, 2, 3].map((_, i) => (
              <Tab key={i} id={i} color='secondary' title={`Tab ${i + 1}`}>
                Content of Tab {i + 1}
              </Tab>
            ))}
          </Tabs>
          <Tabs defaultTab={0} orientation='horizontal' className='w-full'>
            {[1, 2, 3].map((_, i) => (
              <Tab key={i} id={i} color='warning' title={`Tab ${i + 1}`}>
                Content of Tab {i + 1}
              </Tab>
            ))}
          </Tabs>
        </CardLayer>
        <CardLayer title='Icon tabs' className=''>
          <Tabs defaultTab={0} orientation='horizontal' className='w-full'>
            {[1, 2, 3].map((_, i) => (
              <Tab
                key={i}
                id={i}
                Icon={<Plus color='#fff' />}
                className='justify-start'
                color='green'
                title={`Tab ${i + 1}`}
              >
                Content of Tab {i + 1}
              </Tab>
            ))}
          </Tabs>
          <Tabs defaultTab={0} orientation='horizontal' className='w-full'>
            {[1, 2, 3].map((_, i) => (
              <Tab key={i} id={i} color='primary' Icon={<Artificium color='#eee' />} title={`Tab ${i + 1}`}>
                Content of Tab {i + 1}
              </Tab>
            ))}
          </Tabs>
          <Tabs defaultTab={0} orientation='horizontal' className='w-full'>
            {[1, 2, 3].map((_, i) => (
              <Tab
                key={i}
                id={i}
                Icon={<Danger color='#fff' />}
                className='justify-start'
                color='light'
                title={`Tab ${i + 1}`}
              >
                Content of Tab {i + 1}
              </Tab>
            ))}
          </Tabs>
          <Tabs defaultTab={0} orientation='horizontal' className='w-full'>
            {[1, 2, 3].map((_, i) => (
              <Tab key={i} id={i} color='warning' Icon={<Warning color='#fff' />} title={`Tab ${i + 1}`}>
                Content of Tab {i + 1}
              </Tab>
            ))}
          </Tabs>
        </CardLayer>
      </div>
      <div className='grid grid-cols-2 gap-5 my-5'>
        <CardLayer title='Different index'>
          <Tabs defaultTab={0} orientation='horizontal' className='w-full'>
            {[1, 2, 3].map((_, i) => (
              <Tab key={i} id={i} color='green' title={`Tab ${i + 1}`}>
                Content of Tab {i + 1}
              </Tab>
            ))}
          </Tabs>
          <Tabs defaultTab={1} orientation='horizontal' className='w-full'>
            {[1, 2, 3].map((_, i) => (
              <Tab key={i} id={i} color='primary' title={`Tab ${i + 1}`}>
                Content of Tab {i + 1}
              </Tab>
            ))}
          </Tabs>
          <Tabs defaultTab={2} orientation='horizontal' className='w-full'>
            {[1, 2, 3].map((_, i) => (
              <Tab key={i} id={i} color='secondary' title={`Tab ${i + 1}`}>
                Content of Tab {i + 1}
              </Tab>
            ))}
          </Tabs>
          <Tabs defaultTab={1} orientation='horizontal' className='w-full'>
            {[1, 2, 3].map((_, i) => (
              <Tab key={i} id={i} color='warning' title={`Tab ${i + 1}`}>
                Content of Tab {i + 1}
              </Tab>
            ))}
          </Tabs>
        </CardLayer>
        <CardLayer title='Outline index' className=''>
          <Tabs defaultTab={0} orientation='horizontal' className='w-full'>
            {[1, 2, 3].map((_, i) => (
              <Tab key={i} id={i} variant='underline' color='green' title={`Tab ${i + 1}`}>
                Content of Tab {i + 1}
              </Tab>
            ))}
          </Tabs>
          <Tabs defaultTab={0} orientation='horizontal' className='w-full'>
            {[1, 2, 3].map((_, i) => (
              <Tab key={i} id={i} variant='underline' color='primary' title={`Tab ${i + 1}`}>
                Content of Tab {i + 1}
              </Tab>
            ))}
          </Tabs>
          <Tabs defaultTab={0} orientation='horizontal' className='w-full'>
            {[1, 2, 3].map((_, i) => (
              <Tab key={i} id={i} variant='underline' color='secondary' title={`Tab ${i + 1}`}>
                Content of Tab {i + 1}
              </Tab>
            ))}
          </Tabs>
          <Tabs defaultTab={0} orientation='horizontal' className='w-full'>
            {[1, 2, 3].map((_, i) => (
              <Tab key={i} id={i} variant='underline' color='warning' title={`Tab ${i + 1}`}>
                Content of Tab {i + 1}
              </Tab>
            ))}
          </Tabs>
        </CardLayer>
      </div>
    </div>
  )
}

export default page
