{
  /* Images */
}
import avatar5 from '@/assets/avatars/Avatar-12.png'
import avatar6 from '@/assets/avatars/Avatar-13.png'
import avatar7 from '@/assets/avatars/Avatar-14.png'
import avatar8 from '@/assets/avatars/Avatar-15.png'
import avatar9 from '@/assets/avatars/Avatar-16.png'
import avatar10 from '@/assets/avatars/Avatar-17.png'
import avatar11 from '@/assets/avatars/Avatar-18.png'
import avatar12 from '@/assets/avatars/Avatar-19.png'
import { StaticImageData } from 'next/image'

const userFormat = (name: string, username: string, avatar: StaticImageData, active: 'ON' | 'OFF', status: string) => {
  return {
    name,
    username,
    avatar,
    active,
    status
  }
}

export const users = [
  userFormat('Martin Mallen', '@m.m20', avatar8, 'ON', 'Exploring Library'),
  userFormat('Liza George', '@g-liza', avatar7, 'ON', 'Exploring Library'),
  userFormat('Isabella Chen', '@issa', avatar12, 'ON', 'Exploring Library'),
  userFormat('Andrew Garcia', '@garci28', avatar10, 'ON', 'Exploring Library'),
  userFormat('Mia Park', '@cute-mia', avatar10, 'OFF', ''),
  userFormat('David Singh', '@d-singh', avatar5, 'ON', 'Exploring Library'),
  userFormat('Lily Patel', '@lilly-pt', avatar6, 'OFF', 'Do not disturb'),
  userFormat('Emily Liu', '@emily253', avatar7, 'ON', 'Exploring Library'),
  userFormat('Lucas Ortiz', '@locus-1', avatar8, 'OFF', ''),
  userFormat('Marcus Chen', '@chen-dev', avatar9, 'OFF', ''),
  userFormat('Harper Singh', '@happy-singh', avatar10, 'OFF', 'Do not disturb'),
  userFormat('Adam Green', '@adam-dude', avatar11, 'ON', 'Exploring'),
  userFormat('Ryan Lee', '@ryn-lee', avatar12, 'ON', 'Exploring')
]

export default users
