import React from "react";
import { BsGithub } from "react-icons/bs";

const ExperienceCard = ({ title, des, imgsrc, gitsrc, duration, company }) => {
  return (
    <div className="w-full p-3 xl:px-12 h-auto xl:py-8 rounded-lg shadow-shadowOne flex flex-col hover:bg-gradient-to-r hover:from-bodyColor hover: to-[#202327] group bg-gradient-to-b from-gray-900 gray-900 transition-colors duration-1000">
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
      <div className="w-full mt-5 flex flex-col  gap-1">
        <h1 className="text-2xl font-bold">{company}</h1>
        <div>
          <div className="flex items-center justify-between">
            <h3 className="text-base uppercase text-designColor font-normal">
              {title}
              <span className="text-blue-300"> ({duration})</span>
            </h3>
          </div>

          <p className="text-sm tracking-wide mt-3 hover:text-gray-100 duration-300">
            {des}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
