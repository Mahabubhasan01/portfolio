import React from "react";

const Single = ({ text, val }) => {
  return (
    <div className="w-full bg-gray-900 rounded-lg shadow-lg p-5 flex flex-col justify-center items-center">
      <div className="mb-8">
        <div
          className="radial-progress bg-accent text-accent-content border-4 border-accent"
          style={{ "--size": "3.5rem", "--value":"80" }}
        >
          {val}
        </div>
      </div>
      <div className="text-center">
        <p className="text-lg text-white font-semibold">{text}</p>
        <p className="text-base text-pink-300 font-normal">
          _______________________
        </p>
      </div>
    </div>
  );
};

export default Single;
