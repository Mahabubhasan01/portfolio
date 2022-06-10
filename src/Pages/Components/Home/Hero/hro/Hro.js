import React from "react";
import svg from "./img.svg";
import "./hro.css";
import Typewriter from "typewriter-effect";

const Hro = () => {
  return (
    <div className=" h-screen">
      <section class="text-gray-600 body-font">
        <div class="container  mx-auto flex px-5  md:flex-row flex-col items-center mt-24">
          <div class=" flex-1 lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left  md:mb-0 items-center text-center">
            <p class="title-font sm:text-4xl text-3xl mb-2 font-medium text-white">
              {/* Before they sold out
              <br class="hidden lg:inline-block" />
              readymade gluten */}
              Hi I`m MAHABUB
              <span className="text-pink-500">
                {" "}
                <Typewriter
                  options={{
                    strings: [
                      "Web Designer",
                      "Web Developer",
                      "Tech Lover",
                      "Hungry Learner",
                    ],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </span>
            </p>
            <p class="my-3  text-white w-3/4">
              My extensive experience with designing and developing websites
              using Front-end HTML, CSS, Tailwind, Sass, Bootstrap, Daisy-UI,
              Material UI, and Javascript. React-JS. The back-end for Node-JS,
              Express-JS, Rest-API, and JWT. And also familiarity with Python,
              Django, Next-JS, and React-Native
            </p>
            <div class="flex justify-center">
              <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg cursor-pointer font-bold">
                Hire me
              </button>
              <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg cursor-pointer font-bold">
                <a href="https://drive.google.com/file/d/1jij6s5ajuuD06vRP_-teTNOVdNFSz1Ee/view?usp=sharing">
                  Download Resume
                </a>
              </button>
            </div>
          </div>
          <div class=" md:w-1/2  flex-1">
            <img class="mt-3" alt="hero" src={svg} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hro;
