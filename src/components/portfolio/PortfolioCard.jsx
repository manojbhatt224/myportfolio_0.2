import React from 'react'
import { BsGithub } from "react-icons/bs";


const PortfolioCard = ({ title, des, imgsrc, gitsrc, techs }) => {
  return (
    <div className="w-full p-4 xl:px-12 h-auto xl:py-10 rounded-lg shadow-shadowOne flex flex-col hover:bg-gradient-to-r hover:from-bodyColor hover:to-[#202327] group bg-gradient-to-b from-gray-900 gray-900 transition-colors duration-1000">
      <div className="w-full h-[80%] overflow-hidden rounded-lg">
        <img
          className="w-full h-60 object-scale-down group-hover:scale-110 duration-300 cursor-pointer"
          src={imgsrc}
          alt="src"
          loading="lazy"
          style={{ filter: "blur(20px)", transition: "filter 0.3s ease" }}
          onLoad={(e) => (e.currentTarget.style.filter = "blur(0)")}
        />
      </div>
      <div className="w-full mt-5 flex flex-col  gap-6">
        <div>
          <div className="flex items-center justify-between">
            <h3 className="text-base uppercase text-designColor font-normal">
              {title}
            </h3>
            <div className="flex gap-2 ">
              <a href={gitsrc} className="hover:bg-blue-500 hover:text-black text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer">
                <BsGithub className=""/>
              </a>
       
            </div>
          </div>
          <p className="text-sm tracking-wide mt-3 text-blue-300">{techs}</p>
          <p className="text-sm tracking-wide mt-3 hover:text-gray-100 duration-300">
            
            {des}
          </p>
        </div>
      </div>
    </div>
  );
}

export default PortfolioCard