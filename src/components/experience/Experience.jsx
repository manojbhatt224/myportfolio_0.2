import React from 'react'
import ExperienceCard from './ExperienceCard';
export const experiences = [
    {
        id: 1,
        company:"RAMRO POSTAL SERVICE, Kensas, USA",
        title: "Associate Software Developer",
        des:"Working as a full stack developer using react js and node js express for current project for a digital addressing system.",
        src: "/ramropostal.png",
        duration: "Jul 2024 to Current",
        gitLink: "https://github.com/manojbhatt224/Mobile_Sales_and_Customer_Management_System"
      },
      {
        id: 2,
        company: "LIS NEPAL, Lalitpur, Nepal",
        title: "Software Development Intern",
        des:"Explored Node.js Express and React and implemented Captcha Service Integration Project. Explored python, django and djangorest framework for internal AI project and did various bug fixes and feature addition in frontend react nextjs. SQL, Datawarehousing and ETL concepts as a part of bootcamp. Basic implementation of Docker.",
        src: "/lisnepal.png",
        duration: "Oct 2023 to Jan 2024",
        gitLink: "https://github.com/manojbhatt224/Mobile_Sales_and_Customer_Management_System"
      },
 
  ];

const Experience = () => {
  return (
    <section
      id="experience"
      className="min-h-screen py-5 mt-5 flex flex-col justify-center items-center text-white"
    >
      <div className="flex justify-center items-center text-center">
      <div className="text-center mb-2">
        <h1 className="text-4xl font-extrabold mb-4">Current Experiences</h1>
        <p className="text-xl text-gray-400">With Continous Learning</p>
      </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        {experiences?.map((project)=> <ExperienceCard key={project.id} company={project.company} title={project.title} duration={project.duration} des={project.des} gitsrc= {project.gitLink} imgsrc={project.src}/>)}
      </div>
    </section>
  );
}

export default Experience