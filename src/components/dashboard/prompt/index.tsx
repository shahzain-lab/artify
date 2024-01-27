import React from 'react'
import VoiceOver from './voiceover'
import TextInput from './textInput'
import Attachment from './attachment'
import { Button } from '@/components/ui/Button'
import Image from 'next/image'
import paperPlane from '@/assets/icons/paper-plane.svg'
import { cn } from '@/lib/utils'

interface Props {
    className?: string
}

const Prompt = ({ className }: Props) => {
    return (
        <div className={cn(
            `fixed bottom-4 right-5 p-6 bg-dark-800 w-[77%] rounded-[20px]`,
            className
        )}>
            <div className='flex items-center w-full gap-4'>
                <VoiceOver />
                <TextInput />
                <Attachment />
                <Button variant={'gray'}>
                    <Image
                        src={paperPlane}
                        alt='share'
                        width={20}
                        height={20}
                    />
                </Button>
            </div>
        </div>
    )
}

export default Prompt