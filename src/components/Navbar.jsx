import React, { useState, useContext } from "react"
import { AuthContext } from "../context/auth.context"
import { Link } from "react-router-dom"
import logo from "../img/coffee-beans.png"

function NavBar() {

    {/* Login & Logout functionality - toggle between buttons depending if there is a token in localStorage*/}

    const { storeToken, authenticateUser } = useContext(AuthContext);
    const storedToken = localStorage.getItem("authToken")

    const removeToken = () => {
        localStorage.removeItem("authToken")
    }
    
    const isLoggedIn = storedToken !== null

    return (
        <div className="NavBar">
            <Link to="/"><img src={logo} alt="Wanderbeans Logo" /></Link>
            <Link to="/cafes">Find a Cafe</Link>
            <Link to="/signup">Signup</Link>

            {isLoggedIn === false 
            ? (<Link to="/login">Login</Link>)
            : (<Link onClick={removeToken}>Logout</Link>)
            }
        </div>
    )
}

export default NavBar

