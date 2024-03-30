import { robot, users } from './userDB'
import media1 from '@/assets/generated/spaceship1.png'
import media2 from '@/assets/generated/spaceship2.png'
import media3 from '@/assets/generated/spaceship3.png'
import { IMessage } from '@/interfaces/IMessage.interface'

const projects = [
  {
    id: 1,
    name: 'Orbital Oddysey',
    description: 'Marketing Campaign for a new TV series Launch',
    users: users
  }
]
const date: Date = new Date()
export const chats: IMessage[] = [
  {
    id: 0,
    isHuman: true,
    issuer: users[0],
    message: {
      text: 'Hi, can you help me with some ideas for the show?',
      medias: []
    },
    timeAgo: new Date(date.getTime() - 3 * 60 * 60 * 1000),
    project: projects[0]
  },
  {
    id: 1,
    isHuman: false,
    issuer: robot,
    message: {
      text: 'Of course! What kind of ideas are you looking for?',
      medias: []
    },
    timeAgo: new Date(date.getTime() - 3 * 60 * 60 * 1000),
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
      medias: []
      // Only if its robot's message
      // variants: features
    },
    timeAgo: new Date(),
    project: projects[0]
  },
  {
    id: 4,
    isHuman: true,
    issuer: users[0],
    message: {
      text: 'Hmm, those are good. But I was hoping for something a bit more unique. Maybe a name that relates to the story in some way? What you think @issabel ?',
      medias: []
    },
    timeAgo: new Date(),
    project: projects[0]
  },
  {
    id: 5,
    isHuman: true,
    issuer: users[2],
    message: {
      text: "Good point! Let's see... How about these names: <br/> <b>Cosmic Voyager</b> - <b>Galaxy Explorer</b> - <b>Nova Pioneer</b> <br /> Do any of those spark some inspiration? Also, have you seen this concept art yet? It's absolutely stunning 🔥 🔥 🔥",
      medias: [{ id: 12, src: media2 }]
    },
    timeAgo: new Date(),
    project: projects[0]
  },
  {
    id: 6,
    isHuman: false,
    issuer: robot,
    message: {
      text: 'Sure thing! How about these spaceship names: <br /> <b>Starfire</b> - <b>Celestia</b> - <b>Cosmic Voyager</b> <br /> Here are a few concept arts that also might inspire you. Take a look!',
      medias: [
        {
          id: 2323,
          src: media1
        },
        {
          id: 23,
          src: media2
        },
        {
          id: 3,
          src: media3
        }
      ]
    },
    timeAgo: new Date(date.getTime() - 3 * 60 * 60 * 1000),
    project: projects[0]
  },
  {
    id: 7,
    isHuman: true,
    issuer: users[0],
    message: {
      text: ' Actually, I think I really like <b>Cosmic Voyager</b>. Maybe we could stick with that name and work on designing a more realistic concept art? 🤔',
      medias: []
    },
    timeAgo: new Date(date.getTime() - 3 * 60 * 60 * 1000),
    project: projects[0]
  }
]
