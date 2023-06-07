import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CustomBlogs = () => {
  const navigate = useNavigate();
  const [blogs, setBlogs] = useState([]);
  const url = `http://localhost:5000/blogs`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => setBlogs(data));

  return (
    <div className="bg-slate-900 text-white">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col">
            <div className="h-1 bg-gray-200 rounded overflow-hidden">
              <div className="w-56 h-full bg-pink-500"></div>
            </div>
            <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
              <h1 className="sm:w-2/5 text-gray-900 font-medium title-font text-2xl mb-2 sm:mb-0 text-white">
                Get a touch some usefull article
              </h1>
            </div>
          </div>
          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
            {blogs?.map((d) => (
              <div className="p-4 md:w-1/3 sm:mb-0 mb-6" key={d._id}>
                <div className="rounded-lg h-64 overflow-hidden">
                  <img
                    alt="content"
                    className="object-cover object-center h-full w-full"
                    src="https://www.filepicker.io/api/file/eYA6E8L3TiGl0GxpQoS6"
                  />
                </div>
                <h2 className="text-xl font-medium title-font text-white mt-5">
                  {d.title.split(" ").slice(0, 5).join(" ")}
                </h2>
                <p className="text-white leading-relaxed mt-2">
                  {d.content.split(" ").slice(0, 19).join(" ")}
                </p>
                <button
                  onClick={() => navigate(`blog/${d._id}`)}
                  className="text-pink-500 inline-flex items-center mt-3"
                >
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CustomBlogs;
