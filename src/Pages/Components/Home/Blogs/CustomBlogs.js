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
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-col">
            <div class="h-1 bg-gray-200 rounded overflow-hidden">
              <div class="w-56 h-full bg-pink-500"></div>
            </div>
            <div class="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
              <h1 class="sm:w-2/5 text-gray-900 font-medium title-font text-2xl mb-2 sm:mb-0 text-white">
                Space The Final Frontier
              </h1>
            </div>
          </div>
          <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
            {blogs?.map((d) => (
              <div class="p-4 md:w-1/3 sm:mb-0 mb-6">
                <div class="rounded-lg h-64 overflow-hidden">
                  <img
                    alt="content"
                    class="object-cover object-center h-full w-full"
                    src="https://www.filepicker.io/api/file/eYA6E8L3TiGl0GxpQoS6"
                  />
                </div>
                <h2 class="text-xl font-medium title-font text-white mt-5">
                  {d.title.split(" ").slice(0, 5).join(" ")}
                </h2>
                <p class="text-white leading-relaxed mt-2">
                  {d.content.split(" ").slice(0, 19).join(" ")}
                </p>
                <button
                  onClick={() => navigate(`blog/${d._id}`)}
                  class="text-pink-500 inline-flex items-center mt-3"
                >
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-4 h-4 ml-2"
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
