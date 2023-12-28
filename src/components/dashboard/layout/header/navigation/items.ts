import artificium from '@/assets/icons/artificium.svg'
import commentCircle from '@/assets/icons/comment-circle.svg'
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
        title: 'Artificium',
        icon: artificium,
        path: '/search-tab',
        active: true
    },
    {
        title: 'Chat',
        icon: commentCircle,
        path: '/search-tab',
        active: false,
    },
    {
        title: 'Library',
        icon: folder,
        path: '/search-tab',
        active: false,
    },
]