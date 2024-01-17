import { StaticImageData } from "next/image";

export interface IUser {
    profilePic: StaticImageData | string
    fullName: string,
    username: string,
    status: 'ON' | 'OFF',
}