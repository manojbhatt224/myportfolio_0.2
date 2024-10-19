import React from 'react'
import { HiArrowRight } from "react-icons/hi";
import { openLink } from "../../helpers/openLink";


const MaterialCard = ({item:{title,des,icon, glink}}) => {
  return (
    <div onClick={()=>{openLink(glink)}} className="w-full px-12 h-100 py-5 rounded-lg shadow-shadowOne flex items-center hover:bg-gradient-to-r hover:from-blue-800 hover:to-blue-900 group bg-gradient-to-b from-black to-[#1e2024] transition-colors duration-100 group">
      <div className="h-100 overflow-y-hidden">
        <div className="flex h-full flex-col  gap-7 translate-y-12 group-hover:translate-y-6 transition-transform duration-500">
          <div className="w-10 h-8 flex flex-row gap-5 justify-between items-center">
        
            {icon ? (
              <span className="text-5xl text-designColor">{icon}</span>
            ) : (
              <>
                <span className="w-full h-[2px] rounded-lg bg-designColor inline-flex"></span>
                <span className="w-full h-[2px] rounded-lg bg-designColor inline-flex"></span>
                <span className="w-full h-[2px] rounded-lg bg-designColor inline-flex"></span>
                <span className="w-full h-[2px] rounded-lg bg-designColor inline-flex"></span>
              </>
            )}
                     <h2 className="text-xl md:text-2xl font-titleFont font-bold text-gray-300">
              {title}
            </h2>
          </div>
          <div className="flex flex-col mt-3 gap-6">
            <p className="base">{des}</p>
            <span className="text-2xl text-designColor">
              <HiArrowRight />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MaterialCard

