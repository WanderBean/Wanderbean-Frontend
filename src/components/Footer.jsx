import React from "react"
import { Link } from "react-router-dom"
import logo from "../img/coffee-beans.png"
import github from "../img/github-logo.png"

function Footer() {
    return (
        <div className="Footer">
            <Link to="/"><img src={logo} alt="Wanderbeans Logo" /></Link>
            <div>© 2024 WanderBean </div>
            <Link to="https://github.com/WanderBean"><img src={github} alt="Github Logo" /></Link>
        </div>
    )
}

export default Footer

