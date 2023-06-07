import React, { useState, useEffect } from "react";
import "./Portfolio.css";
import Star from "../../../Shared/Star";
import carpaex from "./carpex.png";
import manufacture from "./manu.png";
import niagra from "./niagara.png";
import Cards from "../../../Shared/Cards";
import imga from "../Image/carpaex.png";
import imgb from "../Image/carpaex1.png";
import imgc from "../Image/carpaex2.png";
import imgd from "../Image/Eco-Life.png";
import imge from "../Image/Eco-Life1.png";
import imgf from "../Image/Eco-Life2.png";
import imgg from "../Image/Niagara.png";
import imgh from "../Image/Niagara2.png";
import imgi from "../Image/Niagara2.png";
import { BsCheckCircle } from "react-icons/bs";
import axios from "axios";
const AllProjects = () => {
  const [datas, setDatas] = useState([]);
  const [filter, setFilter] = useState(""); // Add filter state

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        setDatas(response.data);
      } catch (error) {
        console.error("Oops!", error);
      }
    };

    fetchData();
  }, []);
  // Filter data based on category
  const filteredDatas = datas.filter(
    (d) => d.name && d.name.toLowerCase().includes(filter.toLowerCase())
  );

  const handleFilterChange = (category) => {
    if (category === "all") {
      setFilter("");
    } else {
      setFilter(category);
    }
  };
  return (
    <div className="portfolio-body">
      <div className="bg-slate-900 portfolio-2 py-6 md:py-12">
        <Star text="Awesome PORTFOLIO content" />
        <div className="container px-4 mx-auto"></div>

        <div className="md:flex md:justify-center">
          <div className="md:w-10/12 xl:w-8/12 text-center">
            <div className="mt-6">
              <button
                onClick={() => handleFilterChange("all")}
                className={`${
                  filter === "" ? "bg-indigo-600" : "border-indigo-600"
                } border-2 border-solid text-white rounded-full py-3 px-8 transition-colors duration-300 mx-2`}
              >
                All
              </button>
              <button
                onClick={() => handleFilterChange("react")}
                className={`${
                  filter === "react" ? "bg-indigo-600" : "border-indigo-600"
                } border-2 border-solid text-white rounded-full py-3 px-8 transition-colors duration-300 mx-2 mt-4`}
              >
                React
              </button>
              <button
                onClick={() => handleFilterChange("next")}
                className={`${
                  filter === "next" ? "bg-indigo-600" : "border-indigo-600"
                } border-2 border-solid text-white rounded-full py-3 px-8 transition-colors duration-300 mx-2 mt-4`}
              >
                Next
              </button>
              <button
                onClick={() => handleFilterChange("django")}
                className={`${
                  filter === "django" ? "bg-indigo-600" : "border-indigo-600"
                } border-2 border-solid text-white rounded-full py-3 px-8 transition-colors duration-300 mx-2 mt-4`}
              >
                Django
              </button>
            </div>
          </div>
        </div>
        <div className="marquee">
          <div className="sm:flex sm:flex-wrap sm:-mx-4 mt-6 md:mt-12 pb-6 marquee__group">
            {filteredDatas?.map((d) => (
              <div
                className={`sm:px-6 sm:w-1/2 lg:w-1/3 mt-8 rounded-lg ${
                  filter === "" || d.category === filter ? "fade-in active" : ""
                }`}
                key={d.id}
              >
                <div className="portfolio-item mx-auto max-w-sm">
                  <div className="portfolio-img relative overflow-hidden cursor-pointer">
                    <img
                      src={carpaex}
                      alt="portfolio"
                      className="max-w-full h-auto"
                    />
                    <div className="portfolio-hover"></div>
                  </div>
                  <div className="px-1 py-4">
                    <h5 className="font-semibold text-xl text-center text-indigo-600 uppercase ">
                      {d.name}
                    </h5>
                    <div className="flex justify-evenly mt-3">
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://niagara-convention-center.netlify.app/"
                      >
                        <button className="btn btn-outline text-white hover:bg-pink-500 ">
                          Live preview
                        </button>
                      </a>
                      <button className="btn btn-outline text-white hover:bg-pink-500 ">
                        Source code
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProjects;
