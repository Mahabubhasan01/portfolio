import React from "react";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillTwitterCircle,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="text-gray-600 body-font bg-black b-0 sticky" >
      <div className="container px-5 py-5 mx-auto flex items-center sm:flex-row flex-col">
        <a
          target="blank"
          href="/"
          className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-10 h-10 text-white p-2 bg-pink-500 rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span className="ml-3 text-xl text-white">MAHABUB HASAN</span>
        </a>
        <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
          © 2023 MAHABUB —
          <a
            target="blank"
            href="https://twitter.com/knyttneve"
            className="text-pink-50a ml-1"
            rel="noopener noreferrer"
          >
            @HASAN
          </a>
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <a
            target="blank"
            href="https://www.facebook.com/IamMahabubHasan/"
            className=" ml-3 text-pink-500"
          >
            <svg
              fill="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
            </svg>
          </a>

          <a
            target="blank"
            href="https://github.com/Mahabubhasan01"
            className="ml-3 text-pink-500"
          >
            <span className="text-xl ">
              {" "}
              <AiFillGithub />
            </span>
          </a>
          <a
            target="blank"
            href="https://www.instagram.com/mahabub.hasaan/"
            className="ml-3 text-pink-500"
          >
            <span className="text-xl ">
              {" "}
              <AiFillInstagram />
            </span>
          </a>
          <a
            target="blank"
            href="https://twitter.com/iammahabubhasan"
            className="ml-3 text-pink-500"
          >
            <span className="text-xl ">
              {" "}
              <AiFillTwitterCircle />
            </span>
          </a>
          <a
            target="blank"
            href="https://www.aedin.com/in/mahabub-hasaan/"
            className="ml-3 text-pink-500"
          >
            <svg
              fill="currentColor"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="0"
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path
                stroke="none"
                d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
              ></path>
              <circle cx="4" cy="4" r="2" stroke="none"></circle>
            </svg>
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
