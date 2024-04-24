import creditCard from '@/assets/icons/credit-card.svg'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'

export interface IMenu {
  title?: string
  heading?: string
  path?: string
  icon?: string | StaticImport
  tag?: string
}

export const IMenuItems: IMenu[] = [
  {
    heading: 'GENERAL'
  },
  {
    title: 'Billing',
    icon: creditCard,
    path: '/billing'
  }
]
