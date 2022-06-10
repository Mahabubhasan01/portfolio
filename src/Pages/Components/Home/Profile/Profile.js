import React from "react";
import Typewriter from "typewriter-effect";
import img from "./me.svg";
const Profile = () => {
  return (
    <div className="p-10">
      <section class="text-gray-900 body-font ">
        <h3 className="text-center font-extrabold text-4xl text-pink-500 mt-10">
          About me.
        </h3>
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div class=" md:w-1/2 w-5/6 mb-20 md:mb-0 ">
            <img
              class=" "
              alt="hero"
              src={img}
            />
          </div>
          <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              <span className="font-bold text-5xl">Hi I`m MAHABUB </span>
              <span className="text-pink-500 text-3xl">
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
            </h1>
            <p class="mb-8 leading-relaxed text-xl text-white">
               Attention to designing and programming web pages  Extensive
              using multiple standard programming languages  Comfortable
              understanding of aesthetic and design principals  As soon as
              possible troubleshooting and bug resolutions Evaluation and
              analysis abilities  Good communication skills, including written
              and verbal Strong attention to small details  Like to work as
              part of a team toward a singular goal  Familiar GS, gathering
              information and performing research
            </p>
            <div class="flex justify-center">
              <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg cursor-pointer font-bold">
                Hire me
              </button>
              <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg cursor-pointer font-bold">
                 <a href="https://drive.google.com/file/d/1jij6s5ajuuD06vRP_-teTNOVdNFSz1Ee/view?usp=sharing">Download Resume</a>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Profile;
