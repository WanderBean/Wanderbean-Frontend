import React from "react";
import { Link } from "react-router-dom";
import logo from "../img/coffee-beans.png";
import github from "../img/github-logo.png";

function Footer() {
  return (
    <div className="bg-grey w-screen flex flex-row justify-between items-start fixed bottom-0">
      <Link to="/">
        <img src={logo} alt="Wanderbeans Logo" className="max-h-6 m-1" />
      </Link>
      <div>© 2024 WanderBean </div>
      <Link to="https://github.com/WanderBean">
        <img src={github} alt="Github Logo" className="max-h-6 m-1" />
      </Link>
    </div>
  );
}

export default Footer;
