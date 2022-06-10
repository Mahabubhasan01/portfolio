import React from "react";
import "./Portfolio.css";
import img from "../Navbar/images.jpeg";
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

const Portfolio = () => {
  return (
    <div class="bg-black portfolio-2 py-6 md:py-12">
      <Star />
      <div class="container px-4 mx-auto" />

      <div class="md:flex md:justify-center">
        <div class="md:w-10/12 xl:w-8/12 text-center">
          <h1 class="text-3xl md:text-4xl mb-4">
            Awesome design for your content
          </h1>
          <p class="text-xl font-light">
            FWR blocks contains a variety of blocks and elements that you can
            mix and match to create various layouts. FWR blocks follow a similar
            pattern and design style so you can reuse it in your websites and
            web applications.
          </p>
          <div class="mt-6">
            <button class="bg-indigo-600 border-2 border-solid border-indigo-600 hover:bg-indigo-700 hover:border-indigo-700 text-white rounded-full py-3 px-8 transition-colors duration-300 mx-2 mt-4">
              View Portfolio
            </button>
            <button class="border-2 border-solid border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white rounded-full py-3 px-8 transition-colors duration-300 mx-2 mt-4">
              About FWR blocks
            </button>
          </div>
        </div>
      </div>

      <div class="sm:flex sm:flex-wrap sm:-mx-4 mt-6 md:mt-12 pb-6">
        <div class="sm:px-6 sm:w-1/2 lg:w-1/3 mt-8 bg-gray-900 rounded-lg">
          <div class="portfolio-item mx-auto max-w-sm">
            <div class="portfolio-img relative overflow-hidden cursor-pointer">
              <img src={carpaex} alt="portfolio" class="max-w-full h-auto" />
              <div class="portfolio-hover"></div>
            </div>
            <div class="px-1 py-4">
              <h5 class="font-semibold text-xl text-indigo-600 uppercase">
                Niagara falls
              </h5>
              <p class="text-gray-600">
                FWR blocks are beautifully crafted with creativity, passion and
                quality.
              </p>
              <div>
                {" "}
                <a
                  target="blank "
                  href="https://niagara-convention-center.netlify.app/"
                >
                  {" "}
                  <button className="btn bg-indigo-600 hover:bg-pink-700">
                    Live preview
                  </button>{" "}
                </a>
                <button className="btn btn-outline">Source code</button>{" "}
                <input type="checkbox" id="portfolio-1" class="modal-toggle" />
                <div class="modal">
                  <div class="modal-box w-11/12 max-w-5xl">
                    <h3 class="font-bold text-lg">Carpex hub</h3>
                    <Cards img1={imgg} img2={imgh} img3={imgi} />
                    <p class="py-4">
                      <ul className="text-white">
                        <ol className="flex items-center">
                          {" "}
                          <span className="mr-2">
                            <BsCheckCircle className=" font-bold" />
                          </span>
                          <span>Front-end: React-JS,</span>
                        </ol>
                        <ol className="flex items-center">
                          {" "}
                          <span className="mr-2">
                            <BsCheckCircle />
                          </span>
                          Tailwind, React-count, Daisy-UI
                        </ol>

                        <ol className="flex items-center">
                          {" "}
                          <span className="mr-2">
                            <BsCheckCircle />
                          </span>
                          Auth-firebase, React-Icon,
                        </ol>
                        <ol className="flex items-center">
                          {" "}
                          <span className="mr-2">
                            <BsCheckCircle />
                          </span>
                          React-firebase-hook, Flowbite,
                        </ol>
                        <ol className="flex items-center">
                          {" "}
                          <span className="mr-2">
                            <BsCheckCircle />
                          </span>
                          deploy HEROKU 
                        </ol>
                        <ol className="flex items-center">
                          {" "}
                          <span className="mr-2">
                            <BsCheckCircle />
                          </span>
                          React slick, React form,
                        </ol>
                        <ol className="flex items-center">
                          {" "}
                          <span className="mr-2">
                            <BsCheckCircle />
                          </span>
                          Back-end: Node-JS,
                        </ol>
                        <ol className="flex items-center">
                          {" "}
                          <span className="mr-2">
                            <BsCheckCircle />
                          </span>
                          Express-JS, Rest-API,
                        </ol>
                        <ol className="flex items-center">
                          {" "}
                          <span className="mr-2">
                            <BsCheckCircle />
                          </span>
                          JWT, MongoDB (NoSQL database ),
                        </ol>
                        <ol className="flex items-center">
                          {" "}
                          <span className="mr-2">
                            <BsCheckCircle />
                          </span>
                          This site is based on a furniture hub!
                        </ol>
                      </ul>
                    </p>
                    <div class="modal-action">
                      <label for="portfolio-1" class="btn text-red-600">
                        close
                      </label>
                    </div>
                  </div>
                </div>
                <button className="btn btn-outline">
                  <label for="portfolio-1" class="">
                    Details
                  </label>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div class="sm:px-6 sm:w-1/2 lg:w-1/3 mt-8">
          <div class="portfolio-item mx-auto max-w-sm">
            <div class="portfolio-img relative overflow-hidden cursor-pointer">
              <img
                src={manufacture}
                alt="portfolio"
                class="max-w-full h-auto"
              />
              <div class="portfolio-hover"></div>
            </div>
            <div class="px-1 py-4">
              <h5 class="font-semibold text-xl text-indigo-600 uppercase">
              Carpaex
              </h5>
              <p class="text-gray-600">
                FWR blocks bring in a fresh air of art and design in their
                blocks.
              </p>
              <div>
                {" "}
                <a target="blank " href="https://carpaex-e3428.web.app/">
                  <button className="btn bg-indigo-600 hover:bg-pink-700">
                    Live preview
                  </button>{" "}
                </a>
                <a
                  target="blank"
                  href="https://github.com/Mahabubhasan01/warehouse-client"
                >
                  {" "}
                  <a href="https://github.com/Mahabubhasan01/manufacture-hub">
                    <button className="btn btn-outline">Source code</button>{" "}
                  </a>
                </a>
                <input type="checkbox" id="portfolio-2" class="modal-toggle" />
                <div class="modal">
                  <div class="modal-box w-11/12 max-w-5xl">
                    <h3 class="font-bold text-lg">
                      Congratulations random Interner user!
                    </h3>
                    <Cards img1={imga} img2={imgb} img3={imgc} />
                    <p class="py-4">
                      <ul>
                        <ol>Front-end: React-JS,</ol>
                        <ol>Tailwind, React-count, Daisy-UI</ol>
                        <ol>Auth-firebase, React-Icon,</ol>
                        <ol>React-firebase-hook, Flowbite,</ol>
                        <ol> deploy HEROKU </ol>
                        <ol>React slick, React form,</ol>
                        <ol>Back-end: Node-JS,</ol>
                        <ol>Express-JS, Rest-API,</ol>
                        <ol>JWT, MongoDB (NoSQL database ),</ol>
                        <ol>This site is based on a furniture hub!</ol>
                      </ul>
                    </p>
                    <div class="modal-action">
                      <label for="portfolio-2" class="btn bg-red-500">
                        close
                      </label>
                    </div>
                  </div>
                </div>
                <button className="btn btn-outline">
                  <label for="portfolio-2" class="">
                    Details
                  </label>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div class="sm:px-6 sm:w-1/2 lg:w-1/3 mt-8">
          <div class="portfolio-item mx-auto max-w-sm">
            <div class="portfolio-img relative overflow-hidden cursor-pointer">
              <img src={niagra} alt="portfolio " class="max-w-full h-auto" />
              <div class="portfolio-hover"></div>
            </div>
            <div class="px-1 py-4">
              <h5 class="font-semibold text-xl text-indigo-600 uppercase">
                Manufacute hub
              </h5>
              <p class="text-gray-600">
                FWR blocks are reusable code blocks for designers, developers
                and agencies.
              </p>
              <div>
                <a target="blank " href="https://eco-hub-eb09e.web.app/">
                  {" "}
                  <button className="btn bg-indigo-600 hover:bg-pink-700">
                    Live preview
                  </button>{" "}
                </a>
                <button className="btn btn-outline">Source code</button>{" "}
                <input type="checkbox" id="portfolio-3" class="modal-toggle" />
                <div class="modal">
                  <div class="modal-box w-11/12 max-w-5xl">
                    <h3 class="font-bold text-lg">
                      Congratulations random Interner user!
                    </h3>
                    <Cards img1={imgd} img2={imge} img3={imgf} />
                    <p class="py-4">
                      <ul>
                        <ol>Front-end: React-JS,</ol>
                        <ol>Tailwind, React-count, Daisy-UI</ol>
                        <ol>Auth-firebase, React-Icon,</ol>
                        <ol>React-firebase-hook, Flowbite,</ol>
                        <ol> deploy HEROKU </ol>
                        <ol>React slick, React form,</ol>
                        <ol>Back-end: Node-JS,</ol>
                        <ol>Express-JS, Rest-API,</ol>
                        <ol>JWT, MongoDB (NoSQL database ),</ol>
                        <ol>This site is based on a furniture hub!</ol>
                      </ul>
                    </p>
                    <div class="modal-action">
                      <label for="portfolio-3" class="btn text-red-500">
                        close
                      </label>
                    </div>
                  </div>
                </div>
                <button className="btn btn-outline">
                  <label for="portfolio-3" class="">
                    Details
                  </label>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div class="sm:px-6 sm:w-1/2 lg:w-1/3 mt-8">
          <div class="portfolio-item mx-auto max-w-sm">
            <div class="portfolio-img relative overflow-hidden cursor-pointer">
              <img
                src="//via.placeholder.com/800x600/666"
                alt="portfolio"
                class="max-w-full h-auto"
              />
              <div class="portfolio-hover"></div>
            </div>
            <div class="px-1 py-4">
              <h5 class="font-semibold text-xl text-indigo-600 uppercase">
                Women Inventor
              </h5>
              <p class="text-gray-600">
                You can use FWR blocks for personal or commercial purpose with
                attribution.
              </p>
              <div>
                <button className="btn bg-indigo-600 hover:bg-pink-700">
                  Live preview
                </button>{" "}
                <button className="btn btn-outline">Source code</button>{" "}
                <input type="checkbox" id="portfolio-4" class="modal-toggle" />
                <div class="modal">
                  <div class="modal-box w-11/12 max-w-5xl">
                    <h3 class="font-bold text-lg">
                      Congratulations random Interner user!
                    </h3>
                    <p class="py-4">
                      You've been selected for a chance to get one year of
                      subscription to use Wikipedia for free!
                    </p>
                    <div class="modal-action">
                      <label for="portfolio-4" class="btn">
                        close
                      </label>
                    </div>
                  </div>
                </div>
                <button className="btn btn-outline">
                  <label for="portfolio-4" class="">
                    Details
                  </label>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div class="sm:px-6 sm:w-1/2 lg:w-1/3 mt-8">
          <div class="portfolio-item mx-auto max-w-sm">
            <div class="portfolio-img relative overflow-hidden cursor-pointer">
              <img
                src="//via.placeholder.com/800x600/666"
                alt="portfolio "
                class="max-w-full h-auto"
              />
              <div class="portfolio-hover"></div>
            </div>
            <div class="px-1 py-4">
              <h5 class="font-semibold text-xl text-indigo-600 uppercase">
                Pomodoro App
              </h5>
              <p class="text-gray-600">
                FWR blocks is the must have tool for designers and developers.
              </p>
              <div>
                <button className="btn bg-indigo-600 hover:bg-pink-700">
                  Live preview
                </button>{" "}
                <button className="btn btn-outline">Source code</button>{" "}
                <input type="checkbox" id="portfolio-5" class="modal-toggle" />
                <div class="modal">
                  <div class="modal-box w-11/12 max-w-5xl">
                    <h3 class="font-bold text-lg">
                      Congratulations random Interner user!
                    </h3>
                    <p class="py-4">
                      You've been selected for a chance to get one year of
                      subscription to use Wikipedia for free!
                    </p>
                    <div class="modal-action">
                      <label for="portfolio-5" class="btn">
                        close
                      </label>
                    </div>
                  </div>
                </div>
                <button className="btn btn-outline">
                  <label for="portfolio-5" class="">
                    Details
                  </label>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div class="sm:px-6 sm:w-1/2 lg:w-1/3 mt-8">
          <div class="portfolio-item mx-auto max-w-sm">
            <div class="portfolio-img relative overflow-hidden cursor-pointer">
              <img
                src="//via.placeholder.com/800x600/666"
                alt="portfolio "
                class="max-w-full h-auto"
              />
              <div class="portfolio-hover"></div>
            </div>
            <div class="px-1 py-4">
              <h5 class="font-semibold text-xl text-indigo-600 uppercase">
                Glax landing
              </h5>
              <p class="text-gray-600">
                FWR blocks are made with Bootstrap and minimal custom styling.
              </p>
              <div>
                <button className="btn bg-indigo-600 hover:bg-pink-700">
                  Live preview
                </button>{" "}
                <button className="btn btn-outline">Source code</button>{" "}
                <input type="checkbox" id="portfolio-6" class="modal-toggle" />
                <div class="modal">
                  <div class="modal-box w-11/12 max-w-5xl">
                    <h3 class="font-bold text-lg">
                      Congratulations random Interner user!
                    </h3>
                    <p class="py-4">
                      You've been selected for a chance to get one year of
                      subscription to use Wikipedia for free!
                    </p>
                    <div class="modal-action">
                      <label for="portfolio-6" class="btn bg-red-600">
                        Close
                      </label>
                    </div>
                  </div>
                </div>
                <button className="btn btn-outline">
                  <label for="portfolio-6" class="">
                    Details
                  </label>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
