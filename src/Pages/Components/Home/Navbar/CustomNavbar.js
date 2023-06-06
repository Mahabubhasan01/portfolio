import React from "react";
import { Link } from "react-router-dom";
import { BsFillGridFill } from "react-icons/bs";

const CustomNavbar = () => {
  return (
    <div className="navbar bg-slate-900 shadow-slate-900 fixed z-10 p-0">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex="0" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-white font-bold"
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li tabIndex="0">
              <Link to="/all-projects" className="justify-between">
                Projects
              </Link>
            </li>
            <li>
              <Link to="/skills">Skills</Link>
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
        <span className="font-bold text-4xl inline-flex">
          <BsFillGridFill /> <span>M:</span>
        </span>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0 text-white font-bold">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li tabIndex="0">
            <Link to="/all-projects">Projects</Link>
          </li>
          <li>
            <Link to="/skills">Skills</Link>
          </li>
          <li>
            <Link to="/blogs">Blogs</Link>
          </li>
          <li>
            <Link to="/profile">About</Link>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-outline focus:border-pulse hover:bg-pink-500"
          href="Mahabub-hasan.pdf"
          download="Mahabub-hasan.pdf"
        >
          Download Resume
        </a>
      </div>
      <div className="text-left">
        <span
          type="button"
          className="flex items-center justify-center h-12 rounded-full bg-cool-gray-100 text-red-400 animate-bounce hover:text-gray-900 hover:bg-cool-gray-50 transition duration-300 ease-in-out cursor-pointer"
        >
          <svg
            className="w-6 h-6 text-red-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            ></path>
          </svg>
        </span>
      </div>
    </div>
  );
};

export default CustomNavbar;
