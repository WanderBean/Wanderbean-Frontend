import React from "react"
import { AuthContext } from "../context/auth.context"
import { useState, useContext } from "react"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"

function LoginPage() {
    // useStates for required fields for login + error message
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [errorMessage, setErrorMessage] = useState("")

    //Handle change 
    const handleEmail = (e) => setEmail(e.target.value)
    const handlePassword = (e) => setPassword(e.target.value)

    // Variables for context, database & navigate
    const { storeToken, authenticateUser } = useContext(AuthContext);
    const database = "http://localhost:5005"
    const navigate = useNavigate()

    // Handle Submit
    const handleSubmit = (e) => {
        e.preventDefault()
        const requestBody = { email, password }
        console.log(requestBody)

        axios.post(`${database}/auth/login`, requestBody)
            .then((response) => {
                console.log(response)
                authenticateUser()                   // authenticate user
                storeToken(response.data.authToken)  // store token in local storage
                navigate("/")                        // navigate to HP after successful login
            })
            .catch((err) => {
                setErrorMessage(err.response.data.message)
            });
    }

    return (
        <div>
            <h1>Please login!</h1>
            <form onSubmit={handleSubmit} >
                <div>
                    <label>Email
                        <input
                            type="email"
                            name="email"
                            value={email}
                            placeholder="Add your email address"
                            onChange={handleEmail}
                        />
                    </label>
                </div>
                <div>
                    <label>Password
                        <input
                            type="password"
                            name="password"
                            id="password"
                            value={password}
                            placeholder="Add your password"
                            onChange={handlePassword}
                        />
                    </label>
                </div>
                <button type="submit">Login</button>
            </form >
            {errorMessage && <p className="error-message">{errorMessage}</p>}
            <p>Not registered yet?</p>
            <Link to={"/signup"}> Sign up</Link>
        </div >
    )
}

export default LoginPage;