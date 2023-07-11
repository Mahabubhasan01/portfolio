import React from "react";

const SingleSub = ({ icon, name,intro }) => {
  return (
    <div className=" ">
      <div className="m-auto  w-96 items-center justify-center overflow-hidden rounded-2xl bg-gray-900  shadow-xl">
        <div className="h-24"></div>
        <div className="-mt-20 flex justify-center bg-gray-900">
          <p className="p-5 border-2 rounded-full border-slate-400 ">
            <span className="text-7xl text-pink-500 shadow-xl">{icon}</span>
          </p>
        </div>
        <div className="">
          <div className="mt-5 mb-1 px-3 text-center text-2xl">{name}</div>

          <blockquote>
            <p className="mx-2 mb-7 text-center text-base">
              {intro}
            </p>
          </blockquote>
        </div>
      </div>
    </div>
  );
};

export default SingleSub;
