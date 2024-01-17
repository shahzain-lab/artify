import { robot, users } from "./userDB";
import media1 from '@/assets/generated/spaceship1.png'
import media2 from '@/assets/generated/spaceship2.png'
import media3 from '@/assets/generated/spaceship3.png'
import { IMessage } from "../main/IMessage.interface";
import { features } from "./AI";

const projects = [
    {
        id: 1,
        name: 'Orbital Oddysey',
        description: 'Marketing Campaign for a new TV series Launch',
        users: users
    },
]
const date: any = new Date()
export const chats: IMessage[] = [
    {
        id: 0,
        isHuman: true,
        issuer: users[0],
        message: {
            text: "Hi, can you help me with some ideas for the show?",
            medias: []
        },
        timeAgo: new Date(date - 3 * 60 * 60 * 1000),
        project: projects[0]
    },
    {
        id: 1,
        isHuman: false,
        issuer: robot,
        message: {
            text: "Of course! What kind of ideas are you looking for?",
            medias: []
        },
        timeAgo: new Date(date - 3 * 60 * 60 * 1000),
        project: projects[0]
    },
    {
        id: 2,
        isHuman: true,
        issuer: users[0],
        message: {
            text: "I'm not sure, maybe something related to the spaceship?",
            medias: []
        },
        timeAgo: new Date(),
        project: projects[0]
    },
    {
        id: 3,
        isHuman: false,
        issuer: robot,
        message: {
            text: "Okay, let's explore some options related to the spaceship. Here are some things I can do for you:",
            medias: [],
            // Only if its robot's message
            variants: features
        },
        timeAgo: new Date(),
        project: projects[0]
    }
]