import React, { useState, useContext } from "react"
import { AuthContext } from "../context/auth.context"
import { Link } from "react-router-dom"
import logo from "../img/coffee-beans.png"

function NavBar() {

    {/* Login & Logout functionality - toggle between buttons depending if there is a token in localStorage*/}

    const { user, isLoggedIn, logOutUser } = useContext(AuthContext);

    return (
        <div className="NavBar">
            <Link to="/"><img src={logo} alt="Wanderbeans Logo" /></Link>
            <Link to="/cafes">Find a Cafe</Link>
            <Link to="/signup">Signup</Link>
            

            {isLoggedIn === false 
            ? 
            (<Link to="/login">Login</Link>)
            : 
            (<Link onClick={logOutUser}>Logout</Link>)
            }
        </div>
    )
}

export default NavBar

