import { IconType } from "react-icons";


import { SiBootstrap, SiChakraui, SiCss3, SiFirebase, SiHtml5, SiJavascript, SiMapbox, SiMysql, SiNextdotjs, SiOpenai, SiPrisma, SiReact, SiRecoil, SiRedux, SiStripe, SiTailwindcss, SiTypescript, SiVite } from "react-icons/si";

export type ProjectCardProps = {
    projectName: string;
    projectDescription: string;
    projectThumbnail: string;
    codeLink?: string;
    projectCompleted?: boolean;
    projectStack: IconType[];
    isLive: boolean;
    isPublic: boolean
    liveLink?: string;
}

export const projectCardArray: ProjectCardProps[] = [
   

    {
        projectName: "Personal Blog",
        projectDescription: "A personal blog where I write about my journey as a developer, and share my thoughts on tech and life.",
        projectThumbnail: "/wip.png",
        isPublic: false,
        isLive: false,
        projectCompleted: false,
        projectStack: [
            SiNextdotjs,
            SiTypescript,
            SiChakraui,
            SiVite,
        ]
    },

    {
        projectName: "Noire E-Commerce Store ",
        projectDescription: "I'm buidling a fullstack E-Commerce store with a custom CMS, Items, Cart, Search, Filter and Payment validation.",
        projectThumbnail: "/noire.png",
        isPublic: false,
        isLive: false,
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
        projectThumbnail: "/revert.png",
        codeLink: "https://github.com/Joinedthedev/revert-central",
        projectCompleted: false,
        isPublic: true,
        isLive: false,
        projectStack: [
            SiNextdotjs,
            SiTypescript,
            SiChakraui,
            SiRecoil,
        ]

    },

    {
        projectName: "Amazon Clone",
        projectDescription: "A functional amazon clone that mimics the e-commerce giant. I used this project to dive first head into bigger projects and get my hands dirty with firebase.",
        projectThumbnail: "/amazon.png",
        codeLink: " https://github.com/Joinedthedev/amazon-clone",
        projectCompleted: true,
        isPublic: true,
        isLive: true,
        liveLink:"https://amazon-clone-bay-two.vercel.app/",
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
        projectThumbnail: "/FFM.png",
        codeLink: "https://github.com/Joinedthedev/football-manager-app",
        isPublic: true,
        isLive: true,
        liveLink: "https://football-manager-app-woad.vercel.app/",
        projectCompleted: true,
        projectStack: [
            SiReact,
            SiTypescript,
            SiVite,
            SiRedux,
        ]

    },


    {
        projectName: "Budget App",
        projectDescription: "A budget app that allows users to track their expenses and income. You can add, delete, and edit budgets. I built this app to learn more about state management in react.",
        projectThumbnail: "/budget.png",
        codeLink: " https://github.com/Joinedthedev/budget-app",
        projectCompleted: true,
        isPublic: true,
        isLive: true,
        liveLink: "https://budget-app-bice-nu.vercel.app/",
        projectStack: [
            SiReact,
            SiJavascript,
            SiBootstrap,
            SiVite,
        ]


    },

    {
        projectName: "Faculty of Computing Dinner",
        projectDescription: "I was tasked with making an info web page for our final year faculty dinner. It was a fun little project, but only available on mobile.",
        projectThumbnail: "/fcom.png",
        codeLink: "https://github.com/Joinedthedev/fcom-grad-dinner",
        projectCompleted: true,
        isPublic: true,
        isLive: true,
        liveLink: "https://fcom-dinner.vercel.app/",
        projectStack: [
            SiReact,
            SiTypescript,
            SiChakraui,
            SiVite,
        ]


    },



    {
        projectName: "Typescript Hangman",
        projectDescription: "Literally just hang man, but in typescript. This was my first project in typescript. Never looked back after this.",
        projectThumbnail: "/hangman.png",
        codeLink: "https://github.com/Joinedthedev/TypeScript-Hangman",
        projectCompleted: true,
        isPublic: true,
        isLive: true,
        liveLink:"https://type-script-hangman.vercel.app/",
        projectStack: [
            SiReact,
            SiTypescript,
            SiVite,
        ]

    },


    {
        projectName: "Random Gif Generator",
        projectDescription: "Type anything in the search bar and it'll return a relevant gif. I made this when I was first testing api calls in javascript. It's still a fun little project I like to include from time to time.",
        projectThumbnail: "/goku.png",
        codeLink: "https://github.com/Joinedthedev/Random-Gif-Generator",
        projectCompleted: true,
        isPublic: true,
        isLive: true,
        liveLink: " https://joinedthedev.github.io/random-gif-generator/",
        projectStack: [
            SiJavascript,
            SiCss3,
            SiHtml5
        ]
    },



    {
        projectName: "Rock! Paper! Scisscors!",
        projectDescription: "As the title implies, it's the classic playground legend. This was apart of my learning process for JavaScript.",
        projectThumbnail: "/rock.png",
        codeLink: "https://github.com/Joinedthedev/rock-paper-scisscors",
        projectCompleted: true,
        isPublic: true,
        isLive: true,
        liveLink: "https://joinedthedev.github.io/rock-paper-scisscors/",
        projectStack: [
            SiJavascript,
            SiCss3,
            SiHtml5
        ]
    },

    {
        projectName: "Etch-A-Sketch",
        projectDescription: "This was my first time using javascript and learning how to manipulate the dom. It took me a while to figure out but I got it.",
        projectThumbnail: "/etch.png",
        codeLink: "https://github.com/Joinedthedev/Etch-a-sketch",
        projectCompleted: true,
        isPublic: true,
        isLive: true,
        liveLink: "https://joinedthedev.github.io/Etch-a-sketch/",
        projectStack: [
            SiJavascript,
            SiCss3,
            SiHtml5
        ]
    },

    {
        projectName: "Landing Page Project",
        projectDescription: "This was my first official project outside of school. I used html and css to make an apealing landing page about the religion of islam. I remember trying to wrap my head around" +
            "media queries. It was my first time implementing responsive web dev! How far I've come...",
        projectThumbnail: "/landing.png",
        codeLink: "https://github.com/Joinedthedev/Landing-Page-Project/",
        projectCompleted: true,
        isPublic: true,
        isLive: true,
        liveLink: "https://joinedthedev.github.io/Landing-Page-Project/",
        projectStack: [
            SiCss3,
            SiHtml5
        ]
    }



]