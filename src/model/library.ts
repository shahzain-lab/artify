import { StaticImageData } from "next/image";
import { ILibraryAsset, IComments, IUser } from "@/app/app.interface";
import users from "./users";
import media1 from '@/assets/generated/spaceship1.png'
import media2 from '@/assets/generated/spaceship2.png'
import media3 from '@/assets/generated/spaceship3.png'

const libraryFormat = (
    name: string,
    assets: ILibraryAsset[],
) => {
    return {
        name,
        assets
    }
}

const assetFormat = (
    name: string,
    caption: string,
    medias: { src: StaticImageData }[],
    comments: IComments[],
    contributors: IUser[]
) => {
    return {
        name,
        caption,
        medias,
        comments,
        contributors
    }
}

export const library = [
    libraryFormat(
        'Images',
        [
            assetFormat(
                'Captain Drake',
                'Natural born leader with years of experience in space exploration.',
                [
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
                [
                    {
                        author: users[3],
                        text: 'Look like crafting sky like a boomer'
                    }
                ],
                users.slice(0, 3)
            ),
            assetFormat(
                'Cosmic Voyager',
                'Main spacecraft used by the crew in the story. It is a highly advanced vessel designed to withstand the harsh conditions of space and capable of traveling vast distances at incredible speeds.',
                [
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
                [
                    {
                        author: users[3],
                        text: 'Look like crafting sky like a boomer'
                    }
                ],
                users.slice(6, 10)
            ),
            assetFormat(
                'Cosmic Voyager',
                'Main spacecraft used by the crew in the story. It is a highly advanced vessel designed to withstand the harsh conditions of space and capable of traveling vast distances at incredible speeds.',
                [],
                [
                    {
                        author: users[3],
                        text: 'Look like crafting sky like a boomer'
                    }
                ],
                users.slice(4, -1)
            ),
            assetFormat(
                'Pioneering the Stars',
                'This marvel of engineering is built to endure the unforgiving realms of space, enabling the crew to traverse vast distances with unprecedented speed.',
                [],
                [
                    {
                        author: users[3],
                        text: 'Look like crafting sky like a boomer'
                    }
                ],
                users.slice(1, 7)
            )
        ]
    ),
    libraryFormat(
        'Documents',
        [
            assetFormat(
                'Captain Drake',
                'Natural born leader with years of experience in space exploration.',
                [],
                [
                    {
                        author: users[3],
                        text: 'Look like crafting sky like a boomer'
                    }
                ],
                users.slice(1, 5)
            ),
            assetFormat(
                'Cosmic Voyager',
                'Main spacecraft used by the crew in the story. It is a highly advanced vessel designed to withstand the harsh conditions of space and capable of traveling vast distances at incredible speeds.',
                [
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
                [
                    {
                        author: users[3],
                        text: 'Look like crafting sky like a boomer'
                    }
                ],
                users.slice(5, 10)
            ),
            assetFormat(
                'Cosmic Voyager',
                'Main spacecraft used by the crew in the story. It is a highly advanced vessel designed to withstand the harsh conditions of space and capable of traveling vast distances at incredible speeds.',
                [],
                [
                    {
                        author: users[3],
                        text: 'Look like crafting sky like a boomer'
                    }
                ],
                users.slice(4, -1)
            ),
            assetFormat(
                'Pioneering the Stars',
                'This marvel of engineering is built to endure the unforgiving realms of space, enabling the crew to traverse vast distances with unprecedented speed.',
                [],
                [
                    {
                        author: users[3],
                        text: 'Look like crafting sky like a boomer'
                    }
                ],
                users.slice(2, 9)
            )
        ]
    ),
    libraryFormat(
        'Ideas',
        [
            assetFormat(
                'Captain Drake',
                'Natural born leader with years of experience in space exploration.',
                [
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
                [
                    {
                        author: users[3],
                        text: 'Look like crafting sky like a boomer'
                    }
                ],
                users.slice(2, -1)
            ),
            assetFormat(
                'Cosmic Voyager',
                'Main spacecraft used by the crew in the story. It is a highly advanced vessel designed to withstand the harsh conditions of space and capable of traveling vast distances at incredible speeds.',
                [],
                [
                    {
                        author: users[3],
                        text: 'Look like crafting sky like a boomer'
                    }
                ],
                users.slice(5, -1)
            ),
            assetFormat(
                'Cosmic Voyager',
                'Main spacecraft used by the crew in the story. It is a highly advanced vessel designed to withstand the harsh conditions of space and capable of traveling vast distances at incredible speeds.',
                [],
                [
                    {
                        author: users[3],
                        text: 'Look like crafting sky like a boomer'
                    }
                ],
                users.slice(7, -1)
            ),
            assetFormat(
                'Pioneering the Stars',
                'This marvel of engineering is built to endure the unforgiving realms of space, enabling the crew to traverse vast distances with unprecedented speed.',
                [],
                [
                    {
                        author: users[3],
                        text: 'Look like crafting sky like a boomer'
                    }
                ],
                users.slice(0, -1)
            )
        ]
    )
]

export default library;