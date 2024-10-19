import React from 'react'
import { IoLogoJavascript } from "react-icons/io";
import { AiOutlinePython } from "react-icons/ai";
import { SiCplusplusbuilder } from "react-icons/si";
import { SiNodedotjs} from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { SiDjango } from "react-icons/si";

import { GrHtml5 } from "react-icons/gr";
import { TbBrandCss3 } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssLine } from "react-icons/ri";
import { RiBootstrapLine } from "react-icons/ri";

import { TbBrandMongodb } from "react-icons/tb";
import { AiOutlineConsoleSql } from "react-icons/ai";
import { SiMongoose } from "react-icons/si";


const SkillPage = () => {
  return (
    <section id="skill" className="min-h-screen flex flex-col mt-5 py-5 justify-center items-center text-white">
            <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold mb-4">Skills & Technologies</h1>
        <p className="text-xl text-gray-400">Technical Expertise and Soft Skills</p>
      </div>

      {/* Behavioral Skills */}
      <div className="mb-12 w-full">
        <h2 className="text-3xl font-bold text-emerald-300 mb-6 ">Behavioral Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          <div className="skill-item group">
            <div className="skill-icon flex items-center justify-center p-6 bg-gray-800 rounded-full shadow-lg transition-transform transform group-hover:scale-110">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-blue-500" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 12l2 2l2-2m6 0l2 2l2-2m-6-4v8m6-4v4" />
              </svg>
            </div>
            <p className="text-center mt-2 text-lg">Team Collaboration</p>
          </div>

          <div className="skill-item group">
            <div className="skill-icon flex items-center justify-center p-6 bg-gray-800 rounded-full shadow-lg transition-transform transform group-hover:scale-110">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-green-500" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 7v10h16V7H4zm0-2h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V7c0-1.1.9-2 2-2z" />
              </svg>
            </div>
            <p className="text-center mt-2 text-lg">Communication</p>
          </div>

          <div className="skill-item group">
            <div className="skill-icon flex items-center justify-center p-6 bg-gray-800 rounded-full shadow-lg transition-transform transform group-hover:scale-110">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-red-500" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 7l6 6-6 6m6-6H2" />
              </svg>
            </div>
            <p className="text-center mt-2 text-lg">Problem Solving</p>
          </div>

          <div className="skill-item group">
            <div className="skill-icon flex items-center justify-center p-6 bg-gray-800 rounded-full shadow-lg transition-transform transform group-hover:scale-110">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-yellow-500" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 6v6l4 2" />
              </svg>
            </div>
            <p className="text-center mt-2 text-lg">Adaptability</p>
          </div>
        </div>
      </div>

      {/* Technical Skills */}
      <div className="mb-12 w-full">
        <h2 className="text-3xl font-bold text-emerald-300 mb-6">Technical Skills</h2>
        <p className="text-xl text-gray-400 my-3">Programming Language</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 mb-5">
        
        <div className="skill-item group">
            <div className="skill-icon flex items-center justify-center py-6 bg-gray-800 rounded-full shadow-lg transition-transform transform group-hover:scale-110">
              <IoLogoJavascript className="w-10 h-10 text-blue-500" />
            </div>
            <p className="text-center mt-2 text-lg">Javascript</p>
          </div>
           <div className="skill-item group">
            <div className="skill-icon flex items-center justify-center py-6 bg-gray-800 rounded-full shadow-lg transition-transform transform group-hover:scale-110">
              <SiCplusplusbuilder  className="w-10 h-10 text-blue-500" />
            </div>
            <p className="text-center mt-2 text-lg">C/C++</p>
          </div>
          <div className="skill-item group">
            <div className="skill-icon flex items-center justify-center py-6 bg-gray-800 rounded-full shadow-lg transition-transform transform group-hover:scale-110">
              <AiOutlinePython className="w-10 h-10 text-blue-500" />
            </div>
            <p className="text-center mt-2 text-lg">Python</p>
          </div>

          
      </div>
      <p className="text-xl text-gray-400">Backend</p>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 mb-5">
      <div className="skill-item group">
            <div className="skill-icon flex items-center justify-center py-6 bg-gray-800 rounded-full shadow-lg transition-transform transform group-hover:scale-110">
              <SiNodedotjs className="w-10 h-10 text-yellow-500" />
            </div>
            <p className="text-center mt-2 text-lg">Node.js</p>
          </div>
          <div className="skill-item group">
            <div className="skill-icon flex items-center justify-center py-6 bg-gray-800 rounded-full shadow-lg transition-transform transform group-hover:scale-110">
              <SiExpress className="w-10 h-10 text-yellow-500" />
            </div>
            <p className="text-center mt-2 text-lg">Express</p>
          </div>
          <div className="skill-item group">
            <div className="skill-icon flex items-center justify-center p-6 bg-gray-800 rounded-full shadow-lg transition-transform transform group-hover:scale-110">
            
              <SiDjango className="w-10 h-10 text-yellow-500" />
            
            </div>
            <p className="text-center mt-2 text-lg">Django Rest Framework</p>
          </div>
 </div>
      <p className="text-xl text-gray-400">Frontend</p>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 mb-5">
      <div className="skill-item group">
            <div className="skill-icon flex items-center justify-center p-6 bg-gray-800 rounded-full shadow-lg transition-transform transform group-hover:scale-110">
            
              <GrHtml5 className="w-10 h-10 text-green-500" />
            </div>
            
            <p className="text-center mt-2 text-lg">HTML</p>
          </div>
          <div className="skill-item group">
            <div className="skill-icon flex items-center justify-center p-6 bg-gray-800 rounded-full shadow-lg transition-transform transform group-hover:scale-110">
            
              <TbBrandCss3 className="w-10 h-10 text-green-500" />
            
            </div>
            <p className="text-center mt-2 text-lg">CSS</p>
          </div>



          <div className="skill-item group">
            <div className="skill-icon flex items-center justify-center p-6 bg-gray-800 rounded-full shadow-lg transition-transform transform group-hover:scale-110">
          
              <FaReact className="w-10 h-10 text-green-500" />
           
            </div>
            <p className="text-center mt-2 text-lg">React</p>
          </div>
          <div className="skill-item group">
            <div className="skill-icon flex items-center justify-center py-6 bg-gray-800 rounded-full shadow-lg transition-transform transform group-hover:scale-110">
              <RiTailwindCssLine className="w-10 h-10 text-green-500" />
            </div>
            
            <p className="text-center mt-2 text-lg">Tailwind css</p>
          </div>
          <div className="skill-item group">
            <div className="skill-icon flex items-center justify-center p-6 bg-gray-800 rounded-full shadow-lg transition-transform transform group-hover:scale-110">
           
              <RiBootstrapLine className="w-10 h-10 text-green-500" />
            </div>
            
            <p className="text-center mt-2 text-lg">Bootsrap</p>
          </div>
  
 </div>
 <p className="text-xl text-gray-400">Database Language and ODM</p>
 <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 mb-5">

          <div className="skill-item group">
            <div className="skill-icon flex items-center justify-center p-6 bg-gray-800 rounded-full shadow-lg transition-transform transform group-hover:scale-110">
        
              <TbBrandMongodb className="w-10 h-10 text-cyan-500" />
            
            </div>
            <p className="text-center mt-2 text-lg">MongoDB</p>
          </div>

          <div className="skill-item group">
            <div className="skill-icon flex items-center justify-center p-6 bg-gray-800 rounded-full shadow-lg transition-transform transform group-hover:scale-110">
        
              <AiOutlineConsoleSql className="w-10 h-10 text-cyan-500" />
            </div>
 
            <p className="text-center mt-2 text-lg">SQL</p>
          </div>
          <div className="skill-item group">
            <div className="skill-icon flex items-center justify-center p-6 bg-gray-800 rounded-full shadow-lg transition-transform transform group-hover:scale-110">
            <SiMongoose className="w-10 h-10 text-cyan-500" />
            </div>
            <p className="text-center mt-2 text-lg">Mongoose</p>
          </div>
        </div>
        
      </div>

      {/* Concepts */}
      <div className="w-full mb-12">
        <h2 className="text-3xl font-bold text-emerald-300 mb-6">Concepts</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          <div className="skill-item group">
            <div className="skill-icon flex items-center justify-center p-6 bg-gray-800 rounded-full shadow-lg transition-transform transform group-hover:scale-110">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-gray-400" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16v16H4V4zM12 4v16" />
              </svg>
            </div>
            <p className="text-center mt-2 text-lg">Programming & OOP Concepts</p>
          </div>

          <div className="skill-item group">
            <div className="skill-icon flex items-center justify-center p-6 bg-gray-800 rounded-full shadow-lg transition-transform transform group-hover:scale-110">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-gray-500" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16v16H4V4zM12 4v16" />
              </svg>
            </div>
            <p className="text-center mt-2 text-lg">Data Structures & Algorithms</p>
          </div>
          <div className="skill-item group">
            <div className="skill-icon flex items-center justify-center p-6 bg-gray-800 rounded-full shadow-lg transition-transform transform group-hover:scale-110">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-gray-500" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16v16H4V4zM12 4v16" />
              </svg>
            </div>
            <p className="text-center mt-2 text-lg">Database Design</p>
          </div>

          <div className="skill-item group">
            <div className="skill-icon flex items-center justify-center p-6 bg-gray-800 rounded-full shadow-lg transition-transform transform group-hover:scale-110">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-gray-600" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16v16H4V4zM12 4v16" />
              </svg>
            </div>
            <p className="text-center mt-2 text-lg">API Development</p>
          </div>
        </div>
      </div>
  </section>

  )
}

export default SkillPage