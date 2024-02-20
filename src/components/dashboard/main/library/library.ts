import { IUser } from '@/app/app.interface'
import { users } from '../../lib/userDB'
import media1 from '@/assets/generated/spaceship1.png'
import media2 from '@/assets/generated/spaceship2.png'
import media3 from '@/assets/generated/spaceship3.png'
import { StaticImageData } from 'next/image'

export const library = [
    {
        name: 'Images',
        assets: [
            {
                name: 'Captain Drake',
                caption: 'Natural born leader with years of experience in space exploration.',
                medias: [
                    {
                        src: media2
                    },
                    {
                        src: media1
                    },
                    {
                        src: media3
                    },
                ],
                comments: [
                    {
                        author: users[3],
                        text: 'Look like crafting sky like a boomer'
                    }
                ],
                contributors: users.slice(0, 3)
            },
            {
                name: 'Cosmic Voyager',
                caption: 'Main spacecraft used by the crew in the story. It is a highly advanced vessel designed to withstand the harsh conditions of space and capable of traveling vast distances at incredible speeds.',
                medias: [
                    {
                        src: media3
                    },
                    {
                        src: media2
                    },
                    {
                        src: media1
                    },
                ],
                comments: [
                    {
                        author: users[3],
                        text: 'Look like crafting sky like a boomer'
                    }
                ],
                contributors: users.slice(0, -1)
            },
            {
                name: 'Cosmic Voyager',
                caption: 'Main spacecraft used by the crew in the story. It is a highly advanced vessel designed to withstand the harsh conditions of space and capable of traveling vast distances at incredible speeds.',
                medias: [],
                comments: [
                    {
                        author: users[3],
                        text: 'Look like crafting sky like a boomer'
                    }
                ],
                contributors: users.slice(0, -1)
            },
            {
                name: 'Pioneering the Stars',
                caption: 'This marvel of engineering is built to endure the unforgiving realms of space, enabling the crew to traverse vast distances with unprecedented speed.',
                medias: [],
                comments: [
                    {
                        author: users[3],
                        text: 'Look like crafting sky like a boomer'
                    }
                ],
                contributors: users.slice(0, -1)
            },
        ]
    },
    {
        name: 'Documents',
        assets: [
            {
                name: 'Captain Drake',
                caption: 'Natural born leader with years of experience in space exploration.',
                medias: [],
                comments: [
                    {
                        author: users[3],
                        text: 'Look like crafting sky like a boomer'
                    }
                ],
                contributors: users.slice(0, 3)
            },
            {
                name: 'Cosmic Voyager',
                caption: 'Main spacecraft used by the crew in the story. It is a highly advanced vessel designed to withstand the harsh conditions of space and capable of traveling vast distances at incredible speeds.',
                medias: [
                    {
                        src: media3
                    },
                    {
                        src: media2
                    },
                    {
                        src: media1
                    }
                ],
                comments: [
                    {
                        author: users[3],
                        text: 'Look like crafting sky like a boomer'
                    }
                ],
                contributors: users.slice(0, -1)
            },
            {
                name: 'Cosmic Voyager',
                caption: 'Main spacecraft used by the crew in the story. It is a highly advanced vessel designed to withstand the harsh conditions of space and capable of traveling vast distances at incredible speeds.',
                medias: [],
                comments: [
                    {
                        author: users[3],
                        text: 'Look like crafting sky like a boomer'
                    }
                ],
                contributors: users.slice(0, -1)
            },
            {
                name: 'Pioneering the Stars',
                caption: 'This marvel of engineering is built to endure the unforgiving realms of space, enabling the crew to traverse vast distances with unprecedented speed.',
                medias: [],
                comments: [
                    {
                        author: users[3],
                        text: 'Look like crafting sky like a boomer'
                    }
                ],
                contributors: users.slice(0, -1)
            },
        ]
    },
    {
        name: 'Ideas',
        assets: [
            {
                name: 'Captain Drake',
                caption: 'Natural born leader with years of experience in space exploration.',
                medias: [
                    {
                        src: media2
                    },
                    {
                        src: media3
                    },
                    {
                        src: media1
                    },
                ],
                comments: [
                    {
                        author: users[3],
                        text: 'Look like crafting sky like a boomer'
                    }
                ],
                contributors: users.slice(0, 3)
            },
            {
                name: 'Cosmic Voyager',
                caption: 'Main spacecraft used by the crew in the story. It is a highly advanced vessel designed to withstand the harsh conditions of space and capable of traveling vast distances at incredible speeds.',
                medias: [],
                comments: [
                    {
                        author: users[3],
                        text: 'Look like crafting sky like a boomer'
                    }
                ],
                contributors: users.slice(0, -1)
            },
            {
                name: 'Cosmic Voyager',
                caption: 'Main spacecraft used by the crew in the story. It is a highly advanced vessel designed to withstand the harsh conditions of space and capable of traveling vast distances at incredible speeds.',
                medias: [],
                comments: [
                    {
                        author: users[3],
                        text: 'Look like crafting sky like a boomer'
                    }
                ],
                contributors: users.slice(0, -1)
            },
            {
                name: 'Pioneering the Stars',
                caption: 'This marvel of engineering is built to endure the unforgiving realms of space, enabling the crew to traverse vast distances with unprecedented speed.',
                medias: [],
                comments: [
                    {
                        author: users[3],
                        text: 'Look like crafting sky like a boomer'
                    }
                ],
                contributors: users.slice(0, -1)
            },
        ]
    },
]