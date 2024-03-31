import { StaticImageData } from 'next/image'
import users from './users'
import { IUser } from '@/interfaces/app.interface'
{
  /* Images */
}
import sqaure from '@/assets/icons/squarePrime.svg'
import circle from '@/assets/icons/circlePrime.svg'
import octa from '@/assets/icons/octagonPrime.svg'
import tri from '@/assets/icons/triPrime.svg'

const projectFormat = (title: string, desc: string, logo: StaticImageData, members: IUser[]) => {
  return {
    title,
    desc,
    logo,
    members
  }
}

export const projects = [
  projectFormat('Orbital Oddysey', 'Marketing Campaign for a new TV series Launch', sqaure, users.slice(0, 5)),
  projectFormat(
    'Digital Product Launch',
    'Executing a successful introduction of a new digital product to the market.',
    circle,
    users.slice(3, 7)
  ),
  projectFormat(
    'Brand Refresh',
    'Revitalizing the brand identity to enhance market relevance and appeal.',
    octa,
    users.slice(5)
  ),
  projectFormat(
    'Social Media Strategy',
    'Developing an effective social media engagement and growth.',
    tri,
    users.slice(1, 6)
  )
]

export default projects
