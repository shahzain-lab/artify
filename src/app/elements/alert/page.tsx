import React from 'react'
import Alert from '@/components/elements/Alert'
import CardLayer from '@/components/elements/CardLayer'
import { IAlertProps } from '@/interfaces/IElements.interface'

const page = () => {
  const alerts: IAlertProps[] = [
    { title: 'Warning!', message: 'This action cannot be undone.', type: 'warning' },
    { title: 'Something went wrong!', message: 'Please try again later.', type: 'danger' },
    { title: 'Success!', message: 'Your changes have been saved.', type: 'success' },
    { title: 'Good To Know', message: 'You can use me in informative places', type: 'idea/FYI' },
    { title: 'Warning!', message: 'This action cannot be undone.', type: 'success' }
  ]
  return (
    <main>
      <CardLayer title='Solid'>
        <div className='flex flex-col gap-2 w-full'>
          {alerts.map((alert) => (
            <Alert key={alert.title} {...alert} theme='solid' />
          ))}
        </div>
      </CardLayer>
      <div className='grid md:grid-cols-2 gap-2 mt-2 w-full'>
        <CardLayer title='Default'>
          <div className='flex flex-col gap-2 rounded-[10px] w-full'>
            {alerts.map((alert) => (
              <Alert key={alert.title} {...alert} />
            ))}
          </div>
        </CardLayer>
        <CardLayer title='Border'>
          <div className='flex flex-col gap-2 w-full'>
            {alerts.map((alert) => (
              <Alert key={alert.title} {...alert} theme='bordered' />
            ))}
          </div>
        </CardLayer>
      </div>
      <div className='grid md:grid-cols-2 gap-2 mt-2 w-full'>
        <CardLayer title='Vertical'>
          <div className='flex flex-col gap-2 w-full'>
            {alerts.map((alert) => (
              <Alert key={alert.title} {...alert} theme='solid' variant='vertical' />
            ))}
          </div>
        </CardLayer>
        <CardLayer title='Bordered'>
          <div className='flex flex-col gap-2 w-full'>
            {alerts.map((alert) => (
              <Alert key={alert.title} {...alert} theme='bordered' variant='vertical' />
            ))}
          </div>
        </CardLayer>
      </div>
    </main>
  )
}

export default page
