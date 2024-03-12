'use client'
import Divider from '@/components/elements/Divider'
import Dropdown from '@/components/elements/Dropdown'
import SimpleCard from '@/components/elements/SimpleCard'
import Typography from '@/components/elements/Typography'
import { RootState } from '@/model/store'
import { Setting, TripleDot } from '@/utils/icons'
import Image from 'next/image'
import React from 'react'
import { useSelector } from 'react-redux'

const TaskDetails = () => {
    const project = useSelector((state: RootState) => state.workspace.project)

    const details = {
        assignee: project.members[2],
        labels: 'None',
        sprint: 'XRC1 Sprint 21',
        startDate: '3/8/2024',
        actualDate: '5/8/2024',
        actualEnd: 'None',
        estimate: '4D',
        timeTracking: { logged: '34 mins logged', status: '1d remaining' },
        reporter: project.members[1]
    }
    return (
        <SimpleCard className='max-w-[350px] min-w-[350px] sticky'>
            <div className='flex items-center justify-between mb-5'>
                <Typography className='font-bold text-xl'>Details</Typography>
                <div className="flex gap-3 items-center">
                    <Setting color='#fff' />
                    <Dropdown
                        color='gray'
                        classNames={{ button: 'px-2', items: 'absolute -left-10 bg-gray-900 w-20 rounded-lg', item: 'rounded-lg text-[12px] text-white hover:text-gray-800' }}
                        options={['view', 'Edit', 'Delete']}
                        Icon={<TripleDot className='w-3 h-3' />} />
                </div>
            </div>
            <Divider />
            <div className='my-3 flex flex-col gap-4'>
                <div className='flex justify-between items-center'>
                    <Typography className='font-bold text-[12px]'>Assignee</Typography>
                    <div className='flex gap-2 items-center'>
                        <Image
                            src={details.assignee.avatar}
                            alt={details.assignee.username}
                            width={30}
                            height={30}
                        />
                        <Typography className='text-[12px] font-semibold text-noble-black-200'>{details.assignee.username}</Typography>
                    </div>
                </div>
                <div className='flex justify-between items-center'>
                    <Typography className='font-bold text-[12px]'>Labels</Typography>
                    <Typography className='text-[12px] text-noble-black-200'>{details.labels}</Typography>
                </div>
                <div className='flex justify-between items-center'>
                    <Typography className='font-bold text-[12px]'>Sprint</Typography>
                    <Typography className='text-[12px] text-theme-greenish'>{details.sprint}</Typography>
                </div>
                <div className='flex justify-between items-center'>
                    <Typography className='font-bold text-[12px]'>Start date</Typography>
                    <Typography className='text-[12px] text-noble-black-200'>{details.startDate}</Typography>
                </div>
                <div className='flex justify-between items-center'>
                    <Typography className='font-bold text-[12px]'>Actual start</Typography>
                    <Typography className='text-[12px] text-noble-black-200'>{details.actualDate}</Typography>
                </div>
                <div className='flex justify-between items-center'>
                    <Typography className='font-bold text-[12px]'>Actual end</Typography>
                    <Typography className='text-[12px] text-noble-black-200'>{details.actualEnd}</Typography>
                </div>
                <div className='flex justify-between items-center'>
                    <Typography className='font-bold text-[12px]'>Original estimate</Typography>
                    <Typography className='text-[12px] text-noble-black-200'>{details.estimate}</Typography>
                </div>
                <div className='flex justify-between items-center'>
                    <Typography className='font-bold text-[12px]'>Time tracking</Typography>
                    <Typography className='text-[12px] text-noble-black-200'>{details.timeTracking.logged}/{details.timeTracking.status}</Typography>
                </div>
                <div className='flex justify-between items-center'>
                    <Typography className='font-bold text-[12px]'>Reporter</Typography>
                    <div className='flex gap-2 items-center'>
                        <Image
                            src={details.assignee.avatar}
                            alt={details.assignee.username}
                            width={30}
                            height={30}
                        />
                        <Typography className='text-[12px] text-noble-black-200'>{details.assignee.username}</Typography>
                    </div>
                </div>
            </div>
        </SimpleCard>
    )
}

export default TaskDetails