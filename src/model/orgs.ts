import { uid } from "@/lib/utils";
import space1 from '@/assets/avatars/Avatar-8.png';
import { StaticImageData } from "next/image";
import projects from "./projects";
import { IProject } from "@/app/app.interface";

const orgFormat = (
    id: string,
    name: string,
    logo: StaticImageData,
    membersCount: number,
    projects: IProject[]
) => {
    return {
        id,
        name,
        logo,
        membersCount,
        projects
    }
}

export const orgs = [
    orgFormat(
        uid(),
        'Intellisys',
        space1,
        12,
        projects
    )
]

export default orgs;