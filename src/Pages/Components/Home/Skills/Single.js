import React from "react";

const Single = ({ text }) => {
  return (
    <div class="w-full bg-gray-900 rounded-lg shadow-lg p-12 flex flex-col justify-center items-center">
      <div class="mb-8">
        <div
          class="radial-progress bg-accent text-accent-content border-4 border-accent  "
          /* style={--size:7rem; --value: 85} */
        >
          50%
        </div>
      </div>
      <div class="text-center">
        <p class="text-xl text-white font-bold mb-2">{text}</p>
        <p class="text-base text-pink-300 font-normal">
          _______________________________
        </p>
      </div>
    </div>
  );
};

export default Single;
