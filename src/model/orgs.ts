import { StaticImageData } from 'next/image'
import projects from './projects'
import { IProject } from '@/interfaces/app.interface'
{
  /* Images */
}
import space1 from '@/assets/avatars/Avatar-8.png'
{
  /* Utils */
}
import { uid } from '@/lib/utils'

const orgFormat = (id: string, name: string, logo: StaticImageData, membersCount: number, projects: IProject[]) => {
  return {
    id,
    name,
    logo,
    membersCount,
    projects
  }
}

export const orgs = [orgFormat(uid(), 'Intellisys', space1, 12, projects)]

export default orgs
