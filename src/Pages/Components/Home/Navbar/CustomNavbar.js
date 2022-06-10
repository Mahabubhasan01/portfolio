import React from "react";
import { Link } from "react-router-dom";
import { TbComponents } from "react-icons/tb";

const CustomNavbar = () => {
  return (
    <div class="navbar bg-black shadow-2xl fixed z-10">
      <div class="navbar-start">
        <div class="dropdown">
          <label tabindex="0" class="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabindex="0"
            class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-white font-bold"
          >
            <li>
              <a>Home</a>
            </li>
            <li tabindex="0">
              <a class="justify-between">
                Projects
                <svg
                  class="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                </svg>
              </a>
              <ul class="p-2">
                <li>
                  <a>Manufacture</a>
                </li>
                <li>
                  <a>Carpaex</a>
                </li>
                <li>
                  <a>Niagara</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Skills</a>
            </li>
            <li>
              <a>Blogs</a>
            </li>
            <li>
              <a>About</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
        {/* <img className="text-primary" src={img} alt="" /> */}

        <span className="font-bold text-4xl inline-flex">
          {" "}
          <TbComponents/> <span>M:</span>
        </span>
      </div>
      <div class="navbar-center hidden lg:flex">
        <ul class="menu menu-horizontal p-0 text-white font-bold">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li tabindex="0">
            <a>
              Projects
              <svg
                class="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
              </svg>
            </a>
            <ul class="p-2">
              <li>
                <a>Manufacture</a>
              </li>
              <li>
                <a>Carpaex</a>
              </li>
              <li>
                <a>Niagara</a>
              </li>
            </ul>
          </li>
          <li>
            <Link to='/skills'>Skills</Link>
          </li>
          <li>
            <Link to="/blogs">Blogs</Link>
          </li>
          <li>
            <Link to="/profile">About</Link>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
      <div class="navbar-end">
        <a
          class="btn btn-outline"
          href="https://drive.google.com/file/d/1jij6s5ajuuD06vRP_-teTNOVdNFSz1Ee/view?usp=sharing"
        >
          Download Resume
        </a>
      </div>
      <div class=" text-left">
        <bottom
          type="button"
          class="flex items-center justify-center w-12 h-12 rounded-full bg-cool-gray-100 text-red-400 animate-bounce hover:text-gray-900 hover:bg-cool-gray-50 transition duration-300 ease-in-out cursor-pointer"
        >
          <svg
            class="w-6 h-6 text-red-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            ></path>
          </svg>
        </bottom>
      </div>
    </div>
  );
};

export default CustomNavbar;
