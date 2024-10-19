import React from "react";

const AboutPage = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col justify-center items-center text-white px-1 lg:px-20 py-12"
    >
      {/* Header Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-extrabold mb-4">About Me</h1>
        <p className="text-xl text-gray-400">
          Passionate Software Developer & Lifelong Learner
        </p>

      </div>

      <div className="flex flex-col-reverse lg:flex-row items-center justify-center gap-5 mb-16">
        <div className="w-full lg:w-2/3">
          <h2 className="text-3xl font-bold text-emerald-300 py-5 sm:px-10">
            My Passion for Software Development
          </h2>
          <p className="text-lg text-gray-300 mb-4 py-5 sm:px-10">
            I've been passionate about software development from a young age. My interest towards computer was influenced from grade 7 when I started to explore computer as a typist in my brother's photocopier's.
            I have been motivated with the thrill of solving complex problems and creating innovative
            solutions drives me every day from the school time playing with QBASIC and HTML in grade 10. I love working with cutting-edge
            technologies and continuously improving my skills. Whether it's
            building a new application or contributing to open-source projects,
            I am always eager to take on new challenges.
          </p>
          <hr className="bg-slate-900"/>
        </div>
        <div className="w-full lg:w-1/3 flex items-center justify-center">
          <img
            src="/cover.jpg"
            alt="Coding"
            className="rounded-full border-4 border-emerald-300 shadow-lg"
             loading="lazy"
             style={{ filter: "blur(20px)", transition: "filter 0.3s ease" }}
             onLoad={(e) => e.currentTarget.style.filter = "blur(0)"}
          />
        </div>
        <hr className="bg-slate-900"/>
      </div>

 
      <div className="mb-5">

        <h2 className="text-3xl font-bold text-emerald-300 mb-2">
          My Educational Journey
          <hr className="bg-slate-900"/>
        </h2>

      </div>

        <div className="w-full  flex flex-col justify-between gap-2 bg-gray-800 p-1 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-emerald-200 ">
            SLC (School Leaving Certificate)
          </h2>
          <div className="flex flex-col sm:flex-row gap-5 justify-center p-1">
          <img
            src="/sunrise.jpg"
            alt="High School"
            className="sm:w-1/3 object-cover rounded-lg mb-4"
          />
          <p className="text-lg text-gray-300 sm:w-2/3">
            Attended <span className="text-blue-400">Sunrise Secondary School, Mahendranagar</span>, where I developed a strong foundation in English speaking,
            science and mathematics. Participated in various coding clubs and
            competitions, including international <span className="text-blue-400">COFAS (Computer Olympiad Fair & Seminar) </span> organized by one of the world's largest schools City Montessori School, Lucknow which fueled my interest in software development.
            I express my gratitude to this school for providing me cooperative learning environment with self growth.
            I passed my SLC from this school in <span className="text-blue-400">2016 AD</span> with gpa <span className="text-blue-400">3.80.</span> <br/>
            <a href="https://www.collegenp.com/college/sunrise-public-secondary-school-kanchanpur/" className="underline text-blue-500">Click to see about school</a>
          </p>
          </div>
        </div>

        <div className="w-full  flex flex-col justify-between gap-2 bg-gray-800 p-1 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-emerald-200 ">
            ISC (Intermediate of Science)
          </h2>
          <div className="flex flex-col sm:flex-row gap-5 justify-center p-1">
          <img
            src="/radiant.jpeg"
            alt="High School"
            className="sm:w-1/3 object-cover rounded-lg mb-4"
          />
          <p className="text-lg text-gray-300 sm:w-2/3">
            With aim to be in the field of engineering, attended <span className="text-blue-400">Radiant Public Secondary School, Mahendranagar</span>, where I developed a strong foundation in 
            core concepts of science branches. I was blessed with high quality of education in this college from well experienced and gold medalist professors with great vision. Though, there was
            no computer subject as optional, I learnt great things from the aspect of branches of science. I passed my I.Sc. from this school in <span className="text-blue-400">2018 AD</span> with gpa <span className="text-blue-400">3.34.</span> <br/>
            <a href="https://radiantmnr.edu.np/" className="underline text-blue-500">Click to see about school</a>
          </p>
          </div>
        </div>
        <div className="w-full  flex flex-col justify-between gap-2 bg-gray-800 p-1 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-emerald-200 ">
            BE Computer
          </h2>
          <div className="flex flex-col sm:flex-row gap-5 justify-center p-1">
          <img
            src="/nast.jpeg"
            alt="High School"
            className="sm:w-1/3 object-cover rounded-lg mb-4"
          />
          <p className="text-lg text-gray-300 sm:w-2/3">
            With aim to be a successful computer engineer, attended <span className="text-blue-400">National Academy of 
              Science & Technology (NAST), Dhangadhi</span>, where I developed a strong foundation in core concepts 
              related to compute engineering whereby developing my programming skills as well as presentation skills. 
              Under the guidance and supervision, I had the opportunity to engage in diverse and challenging projects 
              that honed my technical skills and problem-solving abilities. One of my key achievements was leading a 
              team project to develop an innovative software solution that addressed real-world issues. 
              I was blessed with high quality of education in this college. I passed my BE Computer from this college 
              in <span className="text-blue-400">2023 AD</span> (corana gap included) with gpa <span className="text-blue-400">3.66.</span> <br/>
              <a href="https://nast.edu.np/" className="underline text-blue-500">Click to see about college</a>
          </p>
          </div>
        </div>

       
    </section>
  );
};

export default AboutPage;
