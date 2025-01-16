import { IconType } from "react-icons";
import FFM from "../assets/FFM.png";
import amazon from "../assets/amazon.png";
import revert from "../assets/revert.png"
import noire from "../assets/noire.png"
import hangman from "../assets/hangman.png"
import budget from "../assets/budget.png"
import wip from "../assets/wip.png"
import goku from "../assets/goku.png"

import { SiReact, SiTypescript, SiVite, SiRedux, SiNextdotjs, SiRecoil, SiChakraui, SiJavascript, SiFirebase, SiStripe, SiTailwindcss, SiPrisma, SiMysql, SiBootstrap } from "react-icons/si";
export type ProjectCardProps = {
    projectName: string;
    projectDescription: string;
    projectThumbnail: string;
    projectLink: string;
    projectCompleted?: boolean
    projectStack: IconType[]
}

export const projectCardArray: ProjectCardProps[] = [

    {
        projectName: "Noire E-Commerce Store ",
        projectDescription: "A fullstack E-Commerce for a client that sells lingerie and other women wear. ",
        projectThumbnail: noire,
        projectLink: "",
        projectCompleted: false,
        projectStack: [
            SiReact,
            SiTypescript,
            SiNextdotjs,
            SiTailwindcss,
            SiMysql,
            SiPrisma,
        ]
    },

    {
        projectName: "Revert Central",
        projectDescription: "A community platform for reverts to Islam to connect, learn, and discuss together. My passion project. ",
        projectThumbnail: revert,
        projectLink: "https://github.com/Joinedthedev/revert-central",
        projectCompleted: false,
        projectStack: [
            SiReact,
            SiTypescript,
            SiNextdotjs,
            SiChakraui,
            SiRecoil,


        ]


    },

    {
        projectName: "Amazon Clone",
        projectDescription: "A functional amazon clone that mimics the e-commerce giant. I used this project to dive head first in and learn react",
        projectThumbnail: amazon,
        projectLink: " https://github.com/Joinedthedev/amazon-clone,",
        projectCompleted: true,
        projectStack: [
            SiReact,
            SiJavascript,
            SiFirebase,
            SiVite,
            SiStripe,


        ]


    },

    {
        projectName: "Fantasy Football Manager",
        projectDescription: "A web application that allows users to create and manage their own fantasy football team.",
        projectThumbnail: FFM,
        projectLink: "https://football-manager-app-woad.vercel.app/",
        projectCompleted: true,
        projectStack: [
            SiReact,
            SiTypescript,
            SiVite,
            SiRedux,


        ]


    },

    {
        projectName: "Personal Blog",
        projectDescription: "A personal blog where I write about my journey as a developer, and share my thoughts on tech and life.",
        projectThumbnail: wip,
        projectLink: " https://github.com/Joinedthedev/budget-app,",
        projectCompleted: false,
        projectStack: [
            SiNextdotjs,
            SiJavascript,
            SiBootstrap,
            SiVite,
        ]


    },

    {
        projectName: "Budget App",
        projectDescription: "A budget app that allows users to track their expenses and income. You can add, delete, and edit budgets. I built this app to learn more about state management in react.",
        projectThumbnail: budget,
        projectLink: " https://github.com/Joinedthedev/budget-app,",
        projectCompleted: true,
        projectStack: [
            SiReact,
            SiJavascript,
            SiBootstrap,
            SiVite,
        ]


    },

    {
        projectName: "Typescript Hangman",
        projectDescription: "Literally just hang man, but in typescript. This was my first project in typescript. Never looked back after this.",
        projectThumbnail: hangman,
        projectLink: "https://github.com/Joinedthedev/TypeScript-Hangman",
        projectCompleted: true,
        projectStack: [
            SiReact,
            SiTypescript,



        ]

    },


    {
        projectName: "Random Gif Generator",
        projectDescription: "I made this when I was first testing api calls in javascript. It's still a fun little oroject I like to include from time to time",
        projectThumbnail: goku,
        projectLink: "https://github.com/Joinedthedev/Random-Gif-Generator",
        projectCompleted: true,
        projectStack: [
            SiJavascript

        ]

    }
]