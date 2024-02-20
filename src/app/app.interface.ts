import { StaticImageData } from "next/image";

export interface IOrg {
    id: string,
    name: string,
    logo: StaticImageData,
    membersCount: number,
    projects: IProject[]
}

export interface IProject {
    title: string,
    desc: string,
    logo: StaticImageData,
    members: IUser[]
}

export interface IUser {
    name: string
    username: string 
    avatar: StaticImageData
    active: 'ON' | 'OFF'
    status: string
}

export interface IComments {
    text: string
    author: IUser
}

export interface ILibraryAsset {
    name: string
    caption: string
    medias: {src: StaticImageData}[]
    comments: IComments[]
    contributors: IUser[]
}

export interface ILibrary {
    name: string
    assets: ILibraryAsset[]
}