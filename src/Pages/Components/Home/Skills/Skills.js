import React from "react";
import Star from "../../../Shared/Star.js";
import Single from "./Single.js";

const Skills = () => {
  return (
    <div>
      <div class="bg-black py-20 lg:pt-[120px] overflow-hidden relative z-10">
        <div class="container xl:max-w-6xl mx-auto px-4">
          <header class="text-center mx-auto  lg:px-20">
            <h2 class="text-2xl leading-normal mb-2 font-bold text-white">
              Tecnologies / Frameworks
            </h2>
            {/* start  */}
            <Star />

            <p class="text-white leading-relaxed font-light text-xl mx-auto pb-2">
              My favorite tecnologies!
            </p>
          </header>
        </div>
        <section class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
          <p className="font-medium p-2 text-3xl text-center shadow-lg bg-slate-800 mt-10 mb-2 rounded-lg text-pink-600">
            {" "}
            Comfortable
          </p>
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Single text={"JAVASCRIPT / ES6"} />
            <Single text={"REACT-JS"} />
            <Single text={"PYTHON / DJANGO"} />
            <Single text={"NODE-JS / EXPRESS-JS"} />
            <Single text={"BOOTSTRAP / TAILWIND"} />
            <Single text={"HTML / CSS"} />
          </div>
          <p className=" p-2 text-pink-600 text-3xl text-center shadow-lg bg-slate-800 mt-10 mb-2 rounded-lg">
            {" "}
            Stack Learning
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Single text={"REST-API / GRAPHQL"} />
            <Single text={"MONGODB / POSTGRESQL"} />
            <Single text={"DAISY-UI / MATERIAL-UI"} />
            <Single text={"DRF / SASS"} />
            <Single text={"NEXT-JS / REACT-NATIVE"} />
            <Single text={"REACT-FORM / FIREBASE"} />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Skills;
