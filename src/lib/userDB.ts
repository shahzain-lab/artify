import _robot from '@/assets/avatars/robot.png'
import user1 from '@/assets/avatars/Avatar-1.png'
import user2 from '@/assets/avatars/Avatar-2.png'
import user3 from '@/assets/avatars/Avatar-3.png'
import user4 from '@/assets/avatars/Avatar-4.png'
import user5 from '@/assets/avatars/Avatar-5.png'
import user6 from '@/assets/avatars/Avatar-6.png'
import { IUser, ROLE } from '@/interfaces/IUser.interface'

export const users: IUser[] = [
    {
        profilePic: user1,
        fullName: 'Ryan Lee',
        username: '@ryan',
        status: 'ON',
        role: ROLE.OWNER,
        activity: 'Exploring Library'
    },
    {
        profilePic: user2,
        fullName: 'Lily Patel',
        username: '@lilly-las',
        status: 'ON',
        role: ROLE.EDITOR,
        activity: 'Exploring Library'
    },
    {
        profilePic: user3,
        fullName: 'Harper Singh',
        username: '@singh-hp',
        status: 'OFF',
        role: ROLE.EDITOR,
        activity: 'Away for 20 minutes'
    },
    {
        profilePic: user4,
        fullName: 'David Singh',
        username: '@dv-singh',
        status: 'OFF',
        role: ROLE.EDITOR,
        activity: 'Do not disturb'
    },
    {
        profilePic: user5,
        fullName: 'Mia Park',
        username: '@cute-mia',
        status: 'OFF',
        role: ROLE.EDITOR,
        activity: 'Last visit: 14 hr ago'
    },
    {
        profilePic: user6,
        fullName: 'Ryan Lee',
        username: '@ryan',
        status: 'OFF',
        role: ROLE.EDITOR,
        activity: 'Last visit: 17 hr ago'
    },
]


export const robot = {
    profilePic: _robot,
    fullName: 'Artificium'
}