import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"

function SignupPage() {
    //useStates for all fields of User Model + error
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")
    const [errorMessage, setErrorMessage] = useState("")

    //Handle change 
    const handleEmail = (e) => setEmail(e.target.value)
    const handlePassword = (e) => setPassword(e.target.value)
    const handleName = (e) => setName(e.target.value)

    const database = "http://localhost:5005"
    const navigate = useNavigate()

    // Handle submit
    const handleSubmit = (e) => {
        e.preventDefault()
        const requestBody = { email, password, name }

        axios.post(`${database}/auth/signup`, requestBody)
            .then(() => {
                navigate("/login")
            })
            .catch((err) => {
                setErrorMessage(err.response.data.message)
            });
    }

    return (
        <div>
            <h1>Please sign up!</h1>
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
                <div>
                    <label>Name
                        <input
                            type="name"
                            name="name"
                            id="name"
                            value={name}
                            placeholder="Add your name"
                            onChange={handleName}
                        />
                    </label>
                </div>
                <button type="submit">Create a user</button>
            </form >
            {errorMessage && <p className="error-message">{errorMessage}</p>
            }
            <p>Already have an account?</p>
            <Link to={"/login"}> Log in</Link>
        </div >
    )
}

export default SignupPage;