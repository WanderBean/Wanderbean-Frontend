import React, { useState, useContext } from "react";
import { AuthContext } from "../context/auth.context";
import { Link, useNavigate } from "react-router-dom";
import logo from "../img/coffee-beans.png";

function NavBar() {
  const { user, isLoggedIn, logOutUser } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <div className="m-2.5 flex flex-row w-screen items-start justify-between">
      <div className="flex items-start mr-7">
        <Link
          className="flex items-center border-solid border-4 border-black m-1 px-2 py-0.5 "
          to="/"
        >
          <span className="text-3xl mr-2 font-extrabold italic">WB</span>
          <img src={logo} alt="Wanderbeans Logo" className="max-h-6" />
        </Link>
        {isLoggedIn ? (
          <>
            <Link to="/cafes" className="ml-4 font-bold">
              FIND CAFE
            </Link>
            <p className="mx-2.5">|</p>
            <button
              onClick={() => navigate(`/cafes/add`)}
              className="font-bold"
            >
              ADD CAFE
            </button>
            <p className="mx-2.5">|</p>
            <Link to="/about" className="font-bold">
              ABOUT
            </Link>
          </>
        ) : (
          <>
            <Link to="/cafes" className="ml-4 font-bold">
              FIND CAFE
            </Link>
            <p className="mx-2.5">|</p>
            <Link to="/about" className="font-bold">
              ABOUT
            </Link>
          </>
        )}
      </div>

      {/* Login & Logout functionality - toggle between buttons*/}
      {isLoggedIn === false ? (
        <div className="flex items-center">
          <Link to="/signup" className="mr-8 italic">
            Signup
          </Link>
          <Link to="/login" className="font-bold underline mr-8">
            Login
          </Link>
        </div>
      ) : (
        <div className="flex items-center">
          <p className="mr-8 italic">Hi, {user.name}!</p>
          <Link onClick={logOutUser} className="font-bold underline mr-8">
            Logout
          </Link>
        </div>
      )}
    </div>
  );
}

export default NavBar;
