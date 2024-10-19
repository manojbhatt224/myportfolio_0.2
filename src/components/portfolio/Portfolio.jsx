import React from 'react'
import PortfolioCard from './PortfolioCard';
export const projects = [
    {
        id: 1,
        title: "MOBILE SALES & PURCHASE MANAGEMENT SYSTEM",
        des:"This website tracks the purchase and sales history of any mobile shop with its stock level update.",
        src: "/mobilepurchasesale.png",
        tech: "SQl Database with Hibernate Framework, Java Programming Language, Spring Boot framework, IDE- Spring Tool Suite",
        gitLink: "https://github.com/manojbhatt224/Mobile_Sales_and_Customer_Management_System"
      },
      {
        id: 2,
        title: "Cafe Billing & Management System",
        tech: "SQl Database, C# Programming Language, .NET framework, IDE- Visual Studio Community",
        des:"This is a desktop application that connects the kitchen department with counter and manages orders of the customers and generates bills.",
        src: "/cafemanagement.jpeg",
        gitLink: "https://github.com/manojbhatt224/CAFEMANAGEMENT"
      },
      {
        id: 3,
        title: "Event Management System",
        tech: "NODE_JS, EXPRESS, JSON_FILE_DB, JOTAI STATE MANAGEMENT",
        des:"This project is typically designed to be familiar with jotai state management. ",
        src: "/eventmanagement.png",
        gitLink: "https://github.com/manojbhatt224/event_management"
      },

      
 
  ];

const Portfolio = () => {
  return (
    <section
      id="portfolio"
      className="min-h-screen py-5 mt-5 flex flex-col justify-center items-center text-white"
    >
      <div className="flex justify-center items-center text-center">
      <div className="text-center mb-2">
        <h1 className="text-4xl font-extrabold mb-4">Visit My Portfolio</h1>
        <p className="text-xl text-gray-400">My Projects</p>
      </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        {projects?.map((project)=> <PortfolioCard key={project.id} title={project.title} techs={project.tech} des={project.des} gitsrc= {project.gitLink} imgsrc={project.src}/>)}
      </div>
    </section>
  );
}

export default Portfolio