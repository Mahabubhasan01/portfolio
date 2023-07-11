import React from "react";
import { GiComputerFan } from "react-icons/gi";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { DiAtom } from "react-icons/di";
import { SiAircanada, SiAmericanairlines } from "react-icons/si";
import { ImUserCheck } from "react-icons/im";
import Star from "../../../Shared/Star";
import SingleSub from "./SingleSub";
const Subhero = () => {
  const subItems = [
    {
      icon: <GiComputerFan />,
      name: "Web Design",
      intro:
        "Craft a visually stunning and engaging intro using dynamic animations, bold typography, and vibrant colors to captivate users from the moment they arrive on your website.",
    },
    {
      icon: <HiOutlineDesktopComputer />,
      name: "Web Development",
      intro:
        "Embark on a transformative web development journey with cutting-edge technologies, stunning designs, and seamless user experiences that captivate and inspire.",
    },
    {
      icon: <DiAtom />,
      name: "MERN Stack",
      intro:
        "Unlock limitless possibilities with the power of MERN Stack, a dynamic combination of MongoDB, Express, React, and Node.js, for robust and scalable web applications.",
    },
    {
      icon: <SiAircanada />,
      name: "Bug Fixing",
      intro:
        "Elevate your web development prowess with our expert bug-fixing skills. Deliver flawless websites that captivate users and leave no room for errors or glitches.",
    },
    {
      icon: <SiAmericanairlines />,
      name: "Clean Code",
      intro:
        "Code speaks volumes! Experience the power of clean code, delivering efficiency, maintainability, and a solid foundation for exceptional web development.",
    },
    {
      icon: <ImUserCheck />,
      name: "Satisfaction",
      intro:
        "Your satisfaction is our priority! Delight users with intuitive interfaces, seamless interactions, and an exceptional web experience tailored to their needs.Crafting experiences exceed expectations.",
    },
  ];

  return (
    <div className="bg-black">
      <Star text="ABILITIES & OBJECTIVES" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
        {subItems.map((item, index) => (
          <SingleSub
            key={index}
            icon={item.icon}
            name={item.name}
            intro={item.intro}
          />
        ))}
      </div>
    </div>
  );
};

export default Subhero;
