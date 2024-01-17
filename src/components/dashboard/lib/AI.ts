import commentCirclePrimary from '@/assets/icons/comment-circle-primary.svg'
import codeBlue from '@/assets/icons/code-blue.svg'
import pencilPurple from '@/assets/icons/pencil-purple.svg'
import bulbYellow from '@/assets/icons/bulb-yellow.svg'
import { IFeature } from '../main/IMessage.interface'

export const features: IFeature[] = [
    {
        title: 'Creative Assets',
        src: commentCirclePrimary,
        tools: [
            { title: 'UI wireframe', link: '' },
            { title: 'Brochure design', link: '' },
            { title: 'Social media', link: '' },
            { title: 'Brand guidelines', link: '' },
        ]
    },
    {
        title: 'Developer Tools',
        src: codeBlue,
        tools: [
            { title: 'API Integration', link: '' },
            { title: 'Test automation', link: '' },
            { title: 'DB optimization', link: '' },
            { title: 'Code review', link: '' },
        ]
    },
    {
        title: 'Content Creation',
        src: pencilPurple,
        tools: [
            { title: 'Product description', link: '' },
            { title: 'E-mail copy', link: '' },
            { title: 'Whitepaper', link: '' },
            { title: 'Press release', link: '' },
        ]
    },
    {
        title: 'Idea Generation',
        src: bulbYellow,
        tools: [
            { title: 'Hashtag ideas', link: '' },
            { title: 'Brainstorming', link: '' },
            { title: 'Trend analysis', link: '' },
            { title: 'Social media posts', link: '' },
        ]
    },
]