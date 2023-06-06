import React from "react";
import Typewriter from "typewriter-effect";
import Star from "../../../Shared/Star";
import img from "./me.svg";
const Profile = () => {
  return (
    <div className="p-10 bg-slate-900">
      <section className="text-gray-900 body-font">
        <div className="container xl:max-w-6xl mx-auto px-4">
          <header className="text-center mx-auto lg:px-20">
            <Star text="ABOUT ME" />
          </header>
        </div>
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="md:w-1/2 w-5/6 mb-20 md:mb-0">
            <img className="" alt="hero" src={img} />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              <span className="font-bold text-5xl text-white">
                Hi, I'm MAHABUB{" "}
              </span>
              <span className="text-pink-500 text-3xl">
                {" "}
                <Typewriter
                  options={{
                    strings: [
                      "Enthuasiastic Developer",
                      "MERN Stack Developer",
                      "Full Stack Developer",
                      "Hungry Learner",
                    ],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </span>
            </h1>
            <blogquoute className="mb-8 leading-relaxed text-xl text-white">
              As a full-stack web developer, I bring a passion for crafting
              seamless and dynamic digital experiences. With expertise in both
              front-end and back-end technologies, I thrive in creating
              innovative and user-friendly web applications. I excel at
              translating complex requirements into elegant and efficient code,
              utilizing modern frameworks and tools. Committed to delivering
              high-quality solutions, I enjoy collaborating with teams to drive
              impactful results. With a keen eye for detail and a continuous
              drive for learning, I strive to stay at the forefront of web
              development trends, ensuring exceptional results for every
              project.
            </blogquoute>
            <div className="flex justify-center">
              <button className="btn btn-outline text-white font-bold py-2 px-6 rounded-lg text-lg">
                Hire me
              </button>
              <button className="ml-4 btn btn-outline text-white font-bold py-2 px-6 rounded-lg text-lg">
                <a href="Mahabub-hasan.pdf" download="Mahabub-hasan.pdf">
                  Get Resume
                </a>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Profile;
