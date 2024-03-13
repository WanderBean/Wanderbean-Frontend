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
    const API_URL = import.meta.env.VITE_API_URL
    const navigate = useNavigate()

    // Handle Submit
    const handleSubmit = (e) => {
        e.preventDefault()
        const requestBody = { email, password }
        console.log(requestBody)

        axios.post(`${API_URL}/auth/login`, requestBody)
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
        <div className="flex flex-col align justify-center">
            <h1 className="text-5xl p-10 flex justify-center">Welcome back. Log in. </h1>
            <form onSubmit={handleSubmit} >
                <div className="flex justify-center mb-2 text-sm font-medium text-gray-900">
                    <label>Email
                        <input
                            className="w-full p-2 text-gray-900 border border-gray-300 rounded-sm bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500"
                            type="email"
                            name="email"
                            value={email}
                            placeholder="Add your email address"
                            onChange={handleEmail}
                        />
                    </label>
                </div>
                <div className="flex justify-center text-sm font-medium text-gray-900">
                    <label>Password
                        <input
                            className="w-full p-2 text-gray-900 border border-gray-300 rounded-sm bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500"
                            type="password"
                            name="password"
                            id="password"
                            value={password}
                            placeholder="Add your password"
                            onChange={handlePassword}
                        />
                    </label>
                </div>
                <div className="flex justify-center text-xs text-red italic">
                    {errorMessage && <p className="error-message">{errorMessage}</p>}
                </div>
                <div className="flex justify-center py-5">
                    <button
                        className="flex justify-center align-center bg-black hover:bg-grey text-white font-semibold py-2 px-4 border border-black-200 shadow"
                        type="submit">Login</button>
                </div>
            </form >
            <div className="flex justify-center pb-10">
                <p>Not registered yet?</p>
                <Link className="font-semibold underline" to={"/signup"}> Sign up</Link>
            </div>
        </div >
    )
}

export default LoginPage;