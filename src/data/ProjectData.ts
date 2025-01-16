import { IconType } from "react-icons";
import FFM from "../assets/FFM.png";
import amazon from "../assets/amazon.png";
import revert from "../assets/revert.png"
import { SiReact, SiTypescript, SiVite, SiRedux, SiNextdotjs, SiRecoil, SiChakraui, SiJavascript, SiFirebase, SiStripe } from "react-icons/si";
export type ProjectCardProps = {
    projectName: string;
    projectDescription: string;
    projectThumbnail: string;
    projectLink: string;
    projectCompleted?: boolean
    projectStack:IconType[]
}

export const projectCardArray: ProjectCardProps[] = [

    {
        projectName:"Fantasy Football Manager",
        projectDescription:"A web application that allows users to create and manage their own fantasy football team.",
        projectThumbnail: FFM,
        projectLink:"https://football-manager-app-woad.vercel.app/",
        projectCompleted:true,
        projectStack:[
            SiReact,
            SiTypescript,
            SiVite,
            SiRedux,
        
    
        ]


    },

    {
        projectName:"Revert Central",
        projectDescription:"A community platform for reverts to Islam to connect, learn, and discuss together. My passion project. ",
        projectThumbnail: revert,
        projectLink:"https://github.com/Joinedthedev/revert-central",
        projectCompleted:false,
        projectStack:[
            SiReact,
            SiTypescript,
            SiNextdotjs,
            SiChakraui,
            SiRecoil,
        
    
        ]

        
    },

    {
        projectName:"Amazon Clone",
        projectDescription:"A functional amazon clone that mimics the e-commerce giant. I used this project to dive head first in and learn react",
        projectThumbnail: amazon,
        projectLink:" https://github.com/Joinedthedev/amazon-clone,",
        projectCompleted:true,
        projectStack:[
            SiReact,
            SiJavascript,
            SiFirebase,
            SiVite,
            SiStripe,
        
    
        ]

        
    },
]