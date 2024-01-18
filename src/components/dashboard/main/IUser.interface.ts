import { StaticImageData } from "next/image";

export enum ROLE {
    OWNER,
    EDITOR,
    VIEWER
}

export interface IUser {
    profilePic: StaticImageData | string
    fullName: string,
    username: string,
    status: 'ON' | 'OFF',
    role: ROLE
}