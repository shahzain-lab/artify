import React from 'react'
{
  /* Components */
}
import VoiceOver from './voiceover'
import TextInput from './textInput'
import Attachment from './attachment'
import { Button } from '@/components/elements/Button'
{
  /* Utils */
}
import { cn } from '@/lib/utils'
import { PaperPlane } from '@/utils/icons'

interface Props {
  className?: string
}

const Prompt = ({ className }: Props) => {
  return (
    <div
      className={cn(
        'no-overlay',
        `fixed bottom-4 shadow-md md:right-5 p-3 md:p-6 dark:bg-noble-black-800 bg-white w-full md:w-[77%] rounded-[20px]`,
        className
      )}
    >
      <div className='flex items-center w-full gap-4'>
        <VoiceOver />
        <TextInput />
        <Attachment />
        <Button color={'gray'}>
          <PaperPlane className="text-gray-600 dark:text-gray-100" />
        </Button>
      </div>
    </div>
  )
}

export default Prompt
