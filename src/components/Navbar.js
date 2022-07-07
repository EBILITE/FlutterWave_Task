import React from "react";
import { Link } from "react-router-dom";
import logo from "../assests/images/dasdas.svg";
import { FiTwitter, FiGithub, FiGlobe, FiFigma } from "react-icons/fi";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <Link to="/">
          <img src={logo} alt="list" className="icon" />
        </Link>
        <ul className="nav-links">
          <li>
            <a href="https://www.twitter.com" target="__blank">
              <FiTwitter />{" "}
            </a>
          </li>
          <li>
            <a href="https://www.google.com" target="__blank">
              <FiGlobe />{" "}
            </a>
          </li>
          <li>
            <a href="https://www.figma.com" target="__blank">
              <FiFigma />{" "}
            </a>
          </li>
          <li>
            <a href="https://www.github.com" target="__blank">
              <FiGithub />{" "}
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
