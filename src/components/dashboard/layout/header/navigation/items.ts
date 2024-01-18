import artificium from '@/assets/icons/artificium.svg'
import commentCircle from '@/assets/icons/comment-circle.svg'
import getStarted from '@/assets/icons/get-started.svg'
import folder from '@/assets/icons/folder.svg'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'

export interface IMenu {
    title: string
    path?: string
    icon?: string | StaticImport 
    tag?: string
  }
  
export const IMenuItems: IMenu[] = [
    {
        title: 'Get Started',
        icon: getStarted
    },
    {
        title: 'Artificium',
        icon: artificium
    },
    {
        title: 'Chat',
        icon: commentCircle
    },
    {
        title: 'Library',
        icon: folder
    },
]