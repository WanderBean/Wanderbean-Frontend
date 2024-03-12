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
          className="text-3xl border-solid border-4 border-black m-1 px-0.5 py-0.5 font-extrabold italic  "
          to="/"
        >
          {/* <img src={logo} alt="Wanderbeans Logo" /> */}WNDRBN
        </Link>
        <Link to="/cafes" className="ml-4 underline">
          Find a Cafe
        </Link>
        {isLoggedIn === true ? (
          <>
            <button
              onClick={() => navigate(`/cafes/add`)}
              className="ml-4 underline"
            >
              Add Café
            </button>
          </>
        ) : null}
      </div>

      {/* Login & Logout functionality - toggle between buttons*/}
      {isLoggedIn === false ? (
        <>
          <Link to="/signup">Signup</Link>
          <Link to="/login" className="font-bold">
            Login
          </Link>
        </>
      ) : (
        <div className="flex items-center mr-7">
          <p className="mr-8 italic">Hi, {user.name}!</p>
          <Link onClick={logOutUser} className="font-bold underline">
            Logout
          </Link>
        </div>
      )}
    </div>
  );
}

export default NavBar;
