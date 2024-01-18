import _robot from '@/assets/avatars/robot.png'
import user1 from '@/assets/avatars/Avatar-6.png'
import user2 from '@/assets/avatars/Avatar-6.png'
import { IUser, ROLE } from '../main/IUser.interface'

export const users: IUser[] = [
    {
        profilePic: user1,
        fullName: 'Ryan Lee',
        username: '@ryan',
        status: 'ON',
        role: ROLE.OWNER
    },
    {
        profilePic: user2,
        fullName: 'Mia Park',
        username: '@cute-mia',
        status: 'OFF',
        role: ROLE.EDITOR
    },
]


export const robot = {
    profilePic: _robot,
    fullName: 'Artificium'
}