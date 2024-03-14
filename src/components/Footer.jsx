import React from "react";
import { Link } from "react-router-dom";
import logo from "../img/coffee-beans.png";
import github from "../img/github-logo.png";

function Footer() {
  return (
    <div className="flex flex-col mt-5 bottom-0 left-0">
      <div className="footer px-4 py-3 bg-grey w-screen flex flex-row justify-between items-start bottom-0 left-0 static">
        <Link to="/">
          <img src={logo} alt="Wanderbeans Logo" className="max-h-6 m-1" />
        </Link>
        <div>© 2024 Wanderbean </div>
        <Link to="https://github.com/WanderBean">
          <img src={github} alt="Github Logo" className="max-h-6 m-1" />
        </Link>
      </div>
    </div>
  );
}

export default Footer;
