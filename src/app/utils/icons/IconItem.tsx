'use client'
import React, { FC } from 'react'
import { useTheme } from 'next-themes'
import { Button } from '@/components/elements/Button'

interface Props {
    Icon: ({className}: {className?: string}) => JSX.Element;
}

const IconItem: FC<Props> = ({ Icon }) => {
    const { theme } = useTheme()

    return (
        <Button color={theme === 'dark' ? 'ghost' : 'secondary'}>
            <Icon className='w-8 h-8 dark:text-white text-black' />
        </Button>
    )
}

export default IconItem