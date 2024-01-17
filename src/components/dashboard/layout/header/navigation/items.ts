import artificium from '@/assets/icons/artificium.svg'
import commentCircle from '@/assets/icons/comment-circle.svg'
import getStarted from '@/assets/icons/get-started.svg'
import folder from '@/assets/icons/folder.svg'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'

export interface IMenu {
    title: string
    path?: string
    active: boolean
    icon?: string | StaticImport 
    tag?: string
  }
  
export const IMenuItems: IMenu[] = [
    {
        title: 'Get Started',
        icon: getStarted,
        active: false
    },
    {
        title: 'Artificium',
        icon: artificium,
        active: true
    },
    {
        title: 'Chat',
        icon: commentCircle,
        active: false,
    },
    {
        title: 'Library',
        icon: folder,
        active: false,
    },
]