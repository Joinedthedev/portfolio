export type experienceTimeLineProps = {
    nameOfCompany: string;
    position: string;
    date: string;
    logo: string;
    description: string;
    location: string;
    companyLink?: string;
}

export const experiences: experienceTimeLineProps[] = [

    {
        position: "Fullstack Engineer",
        nameOfCompany: "Freelancer",
        location: "Remote",
        date: "Nov 2024- Present",
        logo: "/Professional.jpg",
        description: "Working on various projects solving problems for clients by building software."
    },



    {
        position: "Frontend Engineer Intern",
        nameOfCompany: "CompSciLib",
        location: "Deleware USA, Remote",
        date: "Jan 2024- Apr 2024",
        logo: "/CSL.jpg",
        description: " Engineered dynamic flashcards and an interactive drag and drop quiz based on user selected course" +
            " content for a platform with 85k+ users using React, Typescript, and Next",
        companyLink: "https://www.compscilib.com/"


    },

    {
        position: "Web Developer Intern",
        nameOfCompany: "Inclusive Islam",
        location: "South Korea, Remote",
        date: "Apr 2023-Nov 2023",
        logo: "/inclusiveislam_logo.jpg",
        description: "Collaborated with design and data team to create a Muslim Matching Making service using HTML, CSS, Javascript, and Wordpress."

    },

    {
        position: "Software Engineer Intern",
        nameOfCompany: "Universal Basic Education Commission",
        location: "Abuja, Nigeria",
        date: "Jun 2022- Oct 2023",
        logo: "/ubecLogo.png",
        description: "Collaborated with design and data team to create a Muslim Matching Making service using HTML, CSS, Javascript, and Wordpress."

    },

    {
        position: "Student Ambassador",
        nameOfCompany: "Nile University of Nigeria",
        location: "Abuja, Nigeria",
        date: "Jan 2022- Jun 2024",
        logo: "/nileUni.jpg",
        description: "Relevant Coursework : Data Structures and Algorithms, Web Programming, Algorithms & Complexity Analysis, Object Oriented Programming "

    },


]