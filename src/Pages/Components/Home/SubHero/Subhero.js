import React from "react";
import { ImQuill } from "react-icons/im";
import img from "./imge.png";
import Star from "../../../Shared/Star";
import SingleSub from "./SingleSub";
import { GiComputerFan } from 'react-icons/gi';
import {HiOutlineDesktopComputer} from 'react-icons/hi'
import { DiAtom } from "react-icons/di";
import { SiAircanada } from "react-icons/si";
import { SiAmericanairlines } from "react-icons/si";
import { ImUserCheck } from "react-icons/im";


const Subhero = () => {
  return (
    <div className="bg-black">
      <Star />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <SingleSub icon={<GiComputerFan/>} name={'Web Design'}/>
        <SingleSub icon={<HiOutlineDesktopComputer/>} name={'Web Development'}/>
        <SingleSub icon={<DiAtom/>} name={'MERN Stack'}/>
        <SingleSub icon={<SiAircanada/>} name={'Bug Fixing'}/>
        <SingleSub icon={<SiAmericanairlines/>} name={'Clean Code'}/>
        <SingleSub icon={<ImUserCheck/>} name={'Satisfaction'}/>
      </div>
    </div>
  );
};

export default Subhero;
