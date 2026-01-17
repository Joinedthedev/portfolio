export type experienceTimeLineProps = {
    nameOfCompany: string;
    position: string;
    date: string;
    logo: string;
    description: string;
    location: string;
    companyLink?: string;
    extraButton?: null;
}

export const experiences: experienceTimeLineProps[] = [

    
    {
        position: "Frontend Engineer",
        nameOfCompany: "Tsari 360 Consulting",
        location: "Abuja, FCT",
        date: "July 2025-Present",
        logo: "/tsari.jpg",
        description: "Thinking strategically and reimagining industries one line of code at a time. #Ad Astra",
        companyLink: "https://tsari.co"
    },



    {
        position: "Frontend Engineer Intern",
        nameOfCompany: "CompSciLib",
        location: "Deleware USA, Remote",
        date: "Jan 2024-Apr 2024",
        logo: "/CSL.jpg",
        description: " Engineered dynamic flashcards and an interactive drag and drop quiz based on user selected course" +
            " content for a platform with 90k+ users using React, Typescript, and Next",
        companyLink: "https://www.compscilib.com/"


    },

    {
        position: "Frontend Engineer Intern",
        nameOfCompany: "Inclusive Islam",
        location: "South Korea, Remote",
        date: "Apr 2023-Nov 2023",
        logo: "/inclusiveislam_logo.jpg",
        description: "Collaborated with design and data team to create a Muslim Matching Making service using HTML, CSS, PHP, and Wordpress.",
        
    },

    {
        position: "Software Engineer Intern",
        nameOfCompany: "Universal Basic Education Commission",
        location: "Abuja, Nigeria",
        date: "Jun 2022- Oct 2023",
        logo: "/ubecLogo.png",
        description: "Built a C# and WinForms data entry application that improved data collection efficiency for school principals across 50 schools" +
            " in Nigeria, provided technical support resolving computer based issues, and contributed to fixing critical bugs through code reviews and debugging.",
        companyLink: "https://ubec.gov.ng/"
    },

    {
        position: "Student Ambassador",
        nameOfCompany: "Nile University of Nigeria",
        location: "Abuja, Nigeria",
        date: "Jan 2022- Jun 2024",
        logo: "/nileUni.jpg",
        description: "Helped over 100+ new students learn about Computer Science concepts. " +
            "Gave introductions on Data Structures and Algorithms, Web Programming, Object Oriented Programming ",
        companyLink: "https://nileuniversity.edu.ng/"

    },


]