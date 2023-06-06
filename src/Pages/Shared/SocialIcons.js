import React from "react";
import "./SocialIcons.css";
import { AiFillGithub } from "react-icons/ai";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";

const SocialIcons = () => {
  return (
    <div class="social-buttons">
      <a
        href="#"
        class="social-buttons__button social-button social-button--facebook"
        aria-label="Facebook"
      >
        <span class="social-button__inner">
          <FaFacebookF />
        </span>
      </a>
      <a
        href="#"
        class="social-buttons__button social-button social-button--linkedin"
        aria-label="LinkedIn"
      >
        <span class="social-button__inner">
          <FaLinkedinIn />
        </span>
      </a>
      <a
        href="https://www.instagram.com/learningatwebdev/"
        target="_blank"
        class="social-buttons__button social-button social-button--instagram"
        aria-label="InstaGram"
      >
        <span class="social-button__inner">
          <BsInstagram />
        </span>
      </a>
      <a
        href="#"
        class="social-buttons__button social-button social-button--github"
        aria-label="GitHub"
      >
        <span class="social-button__inner">
          <AiFillGithub />
        </span>
      </a>
      <a
        href="https://codepen.io/rajshukla9718"
        target="_blank"
        class="social-buttons__button social-button social-button--codepen"
        aria-label="CodePen"
      >
        <span class="social-button__inner">
          <FaTwitter />
        </span>
      </a>
    </div>
  );
};

export default SocialIcons;
