import React from "react";
import Card from "./MaterialCard";



import { GrTechnology } from "react-icons/gr";
// Features Data
export const featuresData = [
    {
        id: 1,
        icon: <GrTechnology/>,
        glink: "https://docs.google.com/document/d/12FA064S39QJpJcvTTvoZp6LPDxbvFGNzy8_BRZiQ8w4/edit?usp=drive_link", 
        title: "IT in Banking",
        des: "BCA-Purwanchal University- 7th Semester",
      },
  ];

const Materials = () => {
  
  return (
    <section
      id="materials"
      className="min-h-screen py-5 mt-5 flex flex-col justify-center items-center text-white"
    >
      <div className="flex flex-col gap-4 font-titleFont mb-2">
      <div className="text-center mb-2">
        <h1 className="text-4xl font-extrabold mb-4">Some Resource Materials</h1>
        <p className="text-xl text-gray-400">Explore Resources!</p>
      </div>
    </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
        {featuresData.map((item) => (
          <Card item={item} key={item.id}/>
        ))}
      </div>
    </section>
  );
};

export default Materials;