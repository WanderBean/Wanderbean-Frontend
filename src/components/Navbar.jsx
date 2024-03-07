import React from "react"
import { Link } from "react-router-dom"
import logo from "../img/coffee-beans.png"

function NavBar() {
    return (
        <div className="NavBar">
            <Link to="/"><img src={logo} alt="Wanderbeans Logo" /></Link>
            <Link to="/cafes">Find a Cafe</Link>
            <Link to="/signup">Signup</Link>
            <Link to="/login">Login</Link>
        </div>
    )
}

export default NavBar

