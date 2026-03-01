import type { SVGAttributes } from "react";
import { SiBootstrap, SiChakraui, SiCss3, SiFirebase, SiHtml5, SiJavascript, SiMysql, SiNextdotjs, SiPhp, SiReact, SiTailwindcss, SiTypescript } from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";

export type SkillProps = {
    name: string;
    logo: IconType
    description: string;
};

type IconType = (props: SVGAttributes<SVGElement>) => JSX.Element;

export const skillsArray: SkillProps[] = [
    {
        name: "React",
        logo: SiReact,
        description: "React is a JavaScript library for building user interfaces or UI components."
    },
    {
        name: "JavaScript",
        logo: SiJavascript,
        description: "JavaScript is a high-level, interpreted programming language that conforms to the ECMAScript specification."
    },
    {
        name: "TypeScript",
        logo: SiTypescript,
        description: "TypeScript is a strict syntactical superset of JavaScript that adds optional static typing to the language."
    },
    {
        name: "Next.js",
        logo: SiNextdotjs,
        description: "Next.js is an open-source React front-end development web framework that enables functionality such as server-side rendering and generating static websites for React based web applications."
    },
   
    {
        name: "HTML",
        logo: SiHtml5,
        description: "HTML is the standard markup language for documents designed to be displayed in a web browser."
    },
    {
        name: "CSS",
        logo: SiCss3,
        description: "Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language such as HTML."
    },
    
    {

        name: "C#",
        logo: TbBrandCSharp,
        description: "C# is a general-purpose, multi-paradigm programming language encompassing strong typing, lexically scoped, imperative, declarative, functional, generic, object-oriented, and component-oriented programming disciplines."

    },

    {
        name: "PHP",
        logo: SiPhp,
        description: "PHP is a popular general-purpose scripting language that is especially suited to web development."
    },

    {
        name: "Firebase",
        logo: SiFirebase,
        description: "Firebase is a platform developed by Google for creating mobile and web applications."
    },


    {
        name: "SQL",
        logo: SiMysql,
        description: "SQL is a domain-specific language used in programming and designed for managing data held in a relational database management system."

    },


    {
        name: "Bootstrap",
        logo: SiBootstrap,
        description: "Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development."
    },

    { 
        name: "Tailwind CSS",
        logo: SiTailwindcss,
        description: "Tailwind CSS is a utility-first CSS framework for rapidly building custom designs."
    },
    
    {
        name: "Chakra UI",
        logo: SiChakraui,
        description: "Chakra UI is a simple, modular and accessible component library that gives you the building blocks you need to build your React applications."
    },

]
