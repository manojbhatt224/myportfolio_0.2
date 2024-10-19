import React from "react";
import Card from "./Card";

import { SiBackendless } from "react-icons/si";
import { SiFrontendmentor } from "react-icons/si";
import { BsDatabaseCheck } from "react-icons/bs";
import { FaMobile} from "react-icons/fa";
import { AiOutlineDeploymentUnit } from "react-icons/ai";
import { IoBookOutline } from "react-icons/io5";
// Features Data
export const featuresData = [
    {
        id: 1,
        icon: <SiFrontendmentor/>,
        title: "Front End Development",
        des: "I can build frontend using REACT library with modern state management tools like RTK (redux tool kit) and has knowledge of UI frameworks like bootstrap and tailwind css.",
      },
      {
        id: 2,
        icon: <SiBackendless/>,
        title: "Back End Development",
        des: "Being familier with python and javascript, I can work with django, node js, express and mongoose  as well as sql for backend.",
      },
      {
        id: 3,
        icon: <IoBookOutline/>,
        title: "Online/Parttime Teaching",
        des: "Being a knowledge sharing personality, I like to discuss and contribute in sharing skills and knowledge.",
      },
      
    {
      id: 4,
      icon: <FaMobile />,
      title: "Mobile Development",
      des: "By being familiar with react rapidly, I can make mobile apps using modern powerful react-native.",
    },
    {
      id: 5,
      icon: <BsDatabaseCheck />,
      title: "Database Design",
      des: "With a strong grasp of database modeling and normalization principles, sql and mongodb(mongoose), I can create efficient, scalable database schemas that ensure data integrity and optimal performance.",
        },
        {
          id: 6,
          icon: <AiOutlineDeploymentUnit />,
          title: "Basic Deployment Concepts",
          des: "Basic knowledge on deployment and hosting using CI/CID on netlify.",
            },
  ];

const Features = () => {
  return (
    <section
      id="features"
      className="min-h-screen py-5 mt-5 flex flex-col justify-center items-center text-white"
    >
      <div className="flex flex-col gap-4 font-titleFont mb-2">
      <div className="text-center mb-2">
        <h1 className="text-4xl font-extrabold mb-4">Features</h1>
        <p className="text-xl text-gray-400">What do I do?</p>
      </div>
    </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
        {featuresData.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </div>
    </section>
  );
};

export default Features;