import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"

function SignupPage() {
    //useStates for all fields of User Model + error
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")
    const [errorMessage, setErrorMessage] = useState(undefined)

    //Handle change 
    const handleEmail = (e) => setEmail(e.target.value)
    const handlePassword = (e) => setPassword(e.target.value)
    const handleName = (e) => setName(e.target.value)

    const API_URL = import.meta.env.VITE_API_URL
    const navigate = useNavigate()

    // Handle submit
    const handleSubmit = (e) => {
        e.preventDefault()
        const requestBody = { email, password, name }
        console.log(requestBody)

        axios.post(`${API_URL}/auth/signup`, requestBody)
            .then(() => {
                navigate("/login")
            })
            .catch((err) => {
                console.log(err.response.data.message)
                setErrorMessage(err.response.data.message)
            });
    }

    return (
        <div className="flex flex-col align justify-center">
            <h1 className="text-5xl p-10 flex justify-center">New here? Sign up.</h1>
            <form onSubmit={handleSubmit} >
                <div className="flex justify-center mb-2 text-sm font-medium text-gray-900">
                    <label>
                        Email
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
                    <label>
                        Password
                        <input
                            className="w-full p-2 text-gray-900 border border-gray-300 rounded-sm bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500"
                            type="password"  // displays stars when typing in the pw
                            name="password"
                            id="password"
                            value={password}
                            placeholder="Add your password"
                            onChange={handlePassword}
                        />
                    </label>
                    
                </div>
                <p className="flex justify-center mb-2 text-xs italic">Min. 6 characters, number, lowercase + uppercase letter.</p>
                <div className="flex justify-center mb-2 text-sm font-medium text-gray-900">
                    <label>
                        Name
                        <input
                            className="w-full p-2 text-gray-900 border border-gray-300 rounded-sm bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500"
                            type="text"
                            name="name"
                            id="name"
                            value={name}
                            placeholder="Add your name"
                            onChange={handleName}
                        />
                    </label>
                </div>
                <div className="flex justify-center text-xs text-red italic">
                    {errorMessage && <p className="error-message">{errorMessage}</p>}
                </div>
                <div className="flex justify-center py-5">
                <button 
                className="flex justify-center align-center bg-black hover:bg-grey text-white font-semibold py-2 px-4 border border-black-200 shadow"
                type="submit">Create a User</button>
                </div>
            </form >
            <div className="flex justify-center pb-10">
                <p>Already have a profile?</p>
            <Link className="font-semibold underline" to={"/login"}>Log in here.</Link>
            </div>
            
        </div >
    )
}

export default SignupPage;