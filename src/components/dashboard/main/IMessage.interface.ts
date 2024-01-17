import { StaticImageData } from "next/image"
import { IProject } from "./IProject.interface"

interface ISsuer {
    profilePic: StaticImageData | string
    fullName: string
}

interface IMessageBody {
    text: string
    medias: {
        id: number
        src: StaticImageData | string
    }[]
    variants?: IFeature[]
}

export interface IMessage {
    id: number
    isHuman: boolean
    issuer: ISsuer
    message: IMessageBody
    timeAgo: Date
    project: IProject
}

export interface IFeature {
    title: string
    src: string
    tools: {title: string; link: string}[]
}