import React from "react";
import profilepic from "../assets/profilepic.jpg";
import { AiFillGithub, AiFillLinkedin, AiFillInstagram } from "react-icons/ai";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <div id="home">
      <div className=" max-w-[1200px] h-auto mx-auto flex flex-col-reverse sm:flex-row justify-center items-center">
        <div className=" flex flex-col my-auto mx-auto p-6 text-center sm:text-left w-full sm:w-3/4 md:w-1/2 lg:w-2/3 xl:w-2/4">
          <p className="md:text-5xl sm:text-3xl text-2xl font-bold text-gray-200">
            Hi, I'm Tushar
          </p>

          <div className="md:text-5xl sm:text-3xl text-2xl font-bold text-gray-200">
            and I know{" "}
            <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-4 text-white">
              <TypeAnimation
                sequence={[
                  "",
                  1000,
                  "React",
                  1000,
                  "Tailwind CSS",
                  1000,
                  "Express",
                  1000,
                  "Node.js",
                  1000,
                  "AWS",
                  1000,
                  "JavaScript",
                  1000,
                  "HTML & CSS",
                  1000,
                  "MongoDB",
                  1000,
                  "SQL",
                  1000,
                  "Git & GitHub",
                  1000,

                  "REST APIs",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </h1>
          </div>

          <div className="flex justify-center items-center">
            <p className="md:text-5xl sm:text-4xl text-xl font-bold text-gray-200"></p>
          </div>
          <div className="text-5xl flex justify-center md:justify-start xl:justify-start gap-16 my-7 text-purple-600 hover:cursor-pointer">
            <a href="https://www.linkedin.com/in/tushar-mondal-a78b0a219/">
              {" "}
              <AiFillLinkedin />
            </a>
            <a href="https://github.com/ImmortalSoul21">
              <AiFillGithub />
            </a>
            <a>
              <AiFillInstagram />
            </a>
          </div>
          <div className="relative inline-flex group my-3 justify-center md:justify-start xl:justify-start">
            <div className="absolute inset-0 flex justify-center sm:justify-start">
              <div className="w-[190px] transition-all duration-1000 opacity-70 bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt z-0"></div>
            </div>
            <a
              href="https://apricot-angelita-45.tiiny.site/"
              title="Download CV"
              role="button"
              className="z-10 w-[190px] h-[60px] relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-primary-color font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
            >
              Download CV
            </a>
          </div>
        </div>

        <div className="my-auto">
          <img
            className="w-[300px] h-[300px] rounded-full"
            src={profilepic}
            alt="profilepic"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
