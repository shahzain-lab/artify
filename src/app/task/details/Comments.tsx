'use client'
import React from 'react'
{
  /* Components */
}
import Comment from '@/components/app/Comment'
import Avatar from '@/components/elements/Avatar'
import Input from '@/components/elements/Input'
import { useSelector } from 'react-redux'
import { RootState } from '@/model/store'
import { Button } from '@/components/elements/Button'
{
  /* Image */
}
import image from '@/assets/avatars/Avatar-7.png'

const Comments = () => {
  const project = useSelector((state: RootState) => state.workspace.project)
  const date: Date = new Date()
  const comments = [
    {
      date: new Date(date.getTime() - 3 * 60 * 60 * 1000),
      title: `<b class="dark:text-neutral-300">${project.members[0].name}</b> shared a file with <b class="text-neutral-300">you</b>`,
      user: project.members[0],
      description: "Let's integrate this beautiful package to stimulate the process"
    },
    {
      date: new Date(date.getTime() - 2 * 60 * 60 * 1000),
      title: `<b class="text-neutral-300">${project.members[1].name}</b>`,
      user: project.members[1],
      description: 'Nice addition to the current task'
    },
    {
      date: new Date(),
      title: `<b class="text-neutral-300">${project.members[0].name}</b> mentioned <b class="text-neutral-300">you</b> in a comment`,
      user: project.members[0],
      description: `developing rapidly keep up your work ${project.members[1].username}`
    }
  ]
  return (
    <>
      <div className='my-3 flex flex-col gap-6 relative'>
        {comments.map((coment, i) => (
          <Comment key={i} coment={coment} />
        ))}
        <div className='w-[1px] h-[300px] border-l border-dashed border-gray-500 absolute left-14'></div>
      </div>
      <div className='flex gap-2'>
        <Avatar image={image} />
        <Input className='dark:bg-noble-black-700 bg-white' placeholder='Enter Your Comment' />
        <Button>Send</Button>
      </div>
    </>
  )
}

export default Comments
