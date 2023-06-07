import React from "react";
import "./SocialIcons.css";
import { AiFillGithub } from "react-icons/ai";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";

const SocialIcons = () => {
  return (
    <div className="social-buttons">
      <a
        href="https://www.facebook.com/IamMahabubHasan"
        className="social-buttons__button social-button social-button--facebook"
        aria-label="Facebook"
      >
        <span className="social-button__inner">
          <FaFacebookF />
        </span>
      </a>
      <a
        href="https://www.linkedin.com/in/mahabub-hasaan/"
        className="social-buttons__button social-button social-button--linkedin"
        aria-label="LinkedIn"
      >
        <span className="social-button__inner">
          <FaLinkedinIn />
        </span>
      </a>
      <a
        href="https://www.instagram.com/mahabub.hasaan/"
        target="blank"
        className="social-buttons__button social-button social-button--instagram"
        aria-label="Instagram"
      >
        <span className="social-button__inner">
          <BsInstagram />
        </span>
      </a>
      <a
        href="https://github.com/Mahabubhasan01"
        className="social-buttons__button social-button social-button--github"
        aria-label="GitHub"
      >
        <span className="social-button__inner">
          <FaTwitter />
        </span>
      </a>
      <a
        href="https://twitter.com/iammahabubhasan"
        target="blank"
        className="social-buttons__button social-button social-button--codepen"
        aria-label="Twitter"
      >
        <span className="social-button__inner">
          <AiFillGithub />
        </span>
      </a>
    </div>
  );
};

export default SocialIcons;
