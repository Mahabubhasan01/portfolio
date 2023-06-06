import React from "react";
import Star from "../../../Shared/Star";
import Single from "./Single";

const Skills = () => {
  const skillsData = [
    { text: "HTML", val: "90%" },
    { text: "CSS", val: "80%" },
    { text: "STYLED COM..", val: "80%" },
    { text: "BOOTSTRAP", val: "90%" },
    { text: "TAILWIND", val: "85%" },
    { text: "DAISY-UI", val: "90%" },
    { text: "JAVASCRIPT", val: "80%" },
    { text: "PYTHON", val: "75%" },
    { text: "REACT", val: "85%" },
    { text: "DJANGO", val: "85%" },
    { text: "NODE", val: "60%" },
    { text: "EXPRESS", val: "70%" },
    { text: "NEXT", val: "" },
    { text: "GRAPHQL", val: "70%" },
    { text: "RESTFUL APIS", val: "80%" },
    { text: "DJANGO APIS", val: "80%" },
    { text: "MONGODB", val: "85%" },
    { text: "POSTGRESQL", val: "70%" },
    { text: "FIREBASE", val: "70%" },
    { text: "HEROKU", val: "80%" },
  ];

  return (
    <div>
      <div className="bg-black py-20 lg:pt-[120px] overflow-hidden relative">
        <div className="container xl:max-w-6xl mx-auto px-4">
          <header className="text-center mx-auto lg:px-20">
            <Star text="Technologies & Frameworks" />
          </header>
        </div>
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4">
          <p className="font-medium p-2 text-3xl text-center shadow-lg bg-slate-800 text-pink-600 mt-10 mb-2 rounded-lg">
            Comfortable
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
            {skillsData.map((skill, index) => (
              <Single key={index} text={skill.text} val={skill.val} />
            ))}
          </div>
          <p className="p-2 text-3xl text-center shadow-lg bg-slate-800 text-pink-600 mt-10 mb-2 rounded-lg">
            Stack Learning
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
            <Single text="REDUX" val="40%" />
            <Single text="NEXT" val="50%" />
            <Single text="SCSS" val="40%" />
            <Single text="SASS" val="40%" />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Skills;
