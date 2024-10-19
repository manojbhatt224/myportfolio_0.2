import React from "react";
import { FaFacebookF, FaGithub, FaLinkedinIn, FaReact } from "react-icons/fa";
import { SiNodedotjs} from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";

const HomePage = () => {
  return (
    <section
      id="home"
      className="flex min-h-screen sm: flex-col-reverse md:flex-row lg:flex-row py-2 justify-center items-center text-white"
    >
      <header className="flex flex-col items-center justify-center  text-slate-200 py-24 px-6 lg:mr-5">
        <div className="flex flex-col gap-3 mr-0 sm:mr-10 text-center justify-center items-center">
          <p className="text-1.5xl font-bold ">Hey! I am</p>
          <p className="font-extrabold text-5xl text-emerald-200">
            Manoj Bhatt
          </p>
          <h2 className="text-1xl sm:text-2xl font-semibold text-emerald-200 mb-6">
            Enthusiastic Learner, Digital Innovator & Web Designer
          </h2>

          <p className="text-lg text-stone-300 mb-8 max-w-2xl mx-auto">
            Welcome to my personal space where innovation meets excellence. As a
            passionate creator of cutting-edge solutions and stunning web
            designs, I am dedicated to turning your digital vision into reality.
            Let’s work together to craft impactful and beautiful solutions for
            your business.
          </p>
          <div className="w-full flex flex-row gap-5 lg:gap-0 justify-evenly">
            <div className="flex flex-col justify-center items-center">
              <h2 className="text-base uppercase font-titleFont mb-4">
                <u>Find me in</u>
              </h2>
              <div className="flex gap-4">
                <a href="https://www.facebook.com/manojbhatt224" className="bannerIcon rounded-full p-2 hover:bg-blue-400">
                  <FaFacebookF />
                </a>
                <a href="https://github.com/manojbhatt224" className="bannerIcon rounded-full p-2 hover:bg-blue-400">
                  <FaGithub />
                </a>
                <a href="https://www.linkedin.com/in/manoj-bhatt-b00217134" className="bannerIcon rounded-full p-2 hover:bg-blue-400">
                  <FaLinkedinIn />
                </a>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center">
              <h2 className="text-base uppercase font-titleFont mb-4">
                <u>BEST SKILL ON</u>
              </h2>
              <div className="flex gap-4">
              <span className="bannerIcon rounded-full p-2 hover:bg-blue-400">
                  <IoLogoJavascript />
                </span>
                <span className="bannerIcon rounded-full p-2 hover:bg-blue-400">
                  <FaReact />
                </span>
                <span className="bannerIcon rounded-full p-2 hover:bg-blue-400">
                  <SiNodedotjs />
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="flex flex-col justify-center items-center gap-5">
        <div className="home-pic sm:w-[425px] sm:h-[400px] w-[325px] h-[300px] rounded-full border-1 border-white shadow-sm ring-1 ring-offset-1 ring-gray-300">
          <img
            src="/cover.jpg"
            className="rounded-full sm:w-[425px] sm:h-[400px] w-[325px] h-[300px] z-[20]"
            
            alt="Manoj Bhatt"
            loading="lazy"
            style={{ filter: "blur(20px)", transition: "filter 0.3s ease" }}
            onLoad={(e) => (e.currentTarget.style.filter = "blur(0)")}
          />
        </div>

        <span className="border-b-1 border-white text-3xl text-emerald-200">
          Code-Learn-Innovate
        </span>
      </div>
    </section>
  );
};

export default HomePage;
