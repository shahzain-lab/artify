import Alert from '@/components/elements/Alert'
import { IAlertProps } from '@/interfaces/IElements.interface'
import React from 'react'

const page = () => {
    const alerts: IAlertProps[] = [
        { title: 'Warning!', message: 'This action cannot be undone.', type: 'warning' },
        { title: 'Something went wrong!', message: 'Please try again later.', type: 'danger' },
        { title: 'Success!', message: 'Your changes have been saved.', type: 'success' },
        { title: 'Good To Know', message: 'You can use me in informative places', type: 'idea/FYI' },
        { title: 'Warning!', message: 'This action cannot be undone.', type: 'success' },
      ]
    return (
        <main>
            <div className="flex flex-col gap-2 border border-dashed rounded-[10px] border-noble-black-300 bg-noble-black-500 p-3 w-full">
                {alerts.map((alert) => (
                    <Alert
                        key={alert.title}
                        {...alert}
                        theme="solid"
                    />
                ))}
            </div>
            <div className="grid md:grid-cols-2 gap-2 mt-2 w-full">
                <div className="flex flex-col gap-2 border border-dashed rounded-[10px] border-noble-black-300 bg-noble-black-500 p-2">
                    {alerts.map((alert) => (
                        <Alert
                            key={alert.title}
                            {...alert}
                        />
                    ))}
                </div>
                <div className="flex flex-col gap-2 border border-dashed rounded-[10px] border-noble-black-300 bg-noble-black-500 p-2">
                    {alerts.map((alert) => (
                        <Alert
                            key={alert.title}
                            {...alert}
                            theme="bordered"
                        />
                    ))}
                </div>
            </div>
            <div className="grid md:grid-cols-2 gap-2 mt-2 w-full">
                <div className="flex flex-col gap-2 border border-dashed rounded-[10px] border-noble-black-300 bg-noble-black-500 p-2">
                    {alerts.map((alert) => (
                        <Alert
                            key={alert.title}
                            {...alert}
                            theme="solid"
                            variant="vertical"
                        />
                    ))}
                </div>
                <div className="flex flex-col gap-2 border border-dashed rounded-[10px] border-noble-black-300 bg-noble-black-500 p-2">
                    {alerts.map((alert) => (
                        <Alert
                            key={alert.title}
                            {...alert}
                            theme="bordered"
                            variant="vertical"
                        />
                    ))}
                </div>
            </div>
        </main>
    )
}

export default page