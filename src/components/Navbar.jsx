import React, { useState, useContext } from "react"
import { AuthContext } from "../context/auth.context"
import { Link } from "react-router-dom"
import logo from "../img/coffee-beans.png"

function NavBar() {

    const { user, isLoggedIn, logOutUser } = useContext(AuthContext);

    return (
        <div className="NavBar">
            <Link to="/"><img src={logo} alt="Wanderbeans Logo" /></Link>
            <Link to="/cafes">Find a Cafe</Link>

            {/* Login & Logout functionality - toggle between buttons*/}
            {isLoggedIn === false
                ?
                <>
                    <Link to="/signup">Signup</Link>
                    <Link to="/login">Login</Link>
                </>
                :
                <>
                    <p>Hi, {user.name}</p>
                    <Link onClick={logOutUser}>Logout</Link>
                </>
            }
        </div>
    )
}

export default NavBar

