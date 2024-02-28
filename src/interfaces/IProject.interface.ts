import { IUser } from "./IUser.interface"


export interface IProject {
    id: number
    name: string
    description: string
    users: IUser[]
}