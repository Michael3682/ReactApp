import "../styles/login.css"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import Logo from "../assets/buzzsumo_icon_blue.svg"

export default function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    const handleLogin = (e) => {
        e.preventDefault()

        if (!email || !password) return

        navigate("/home")
    }


    return (
        <main className="form--container">
            <form className="login-form--container" onSubmit={handleLogin}>
                <div className="login-form--header">
                    <img src={Logo} />
                    <h1 className="login-form--title">Login to your account</h1>
                    <p className="login-form--subtext">
                        Or
                        <Link to={"/"} className="login-form--subtext-trial-button">
                            <span> start your free trial</span>
                        </Link>
                        .
                    </p>
                </div>
                <div className="login-form--fields">
                    <div className="login-form--email-container">
                        <label htmlFor="email">Email Address</label>
                        <input type="text" name="email" id="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Your Email Address" required />
                    </div>
                    <div className="login-form--password-container">
                        <div className="login-form--label">
                            <label htmlFor="password">Password</label>
                            <Link to={"/"}>
                                <span>Forgot your Password?</span>
                            </Link>
                        </div>
                        <input type="password" name="password" id="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Enter your Password" required />
                    </div>
                </div>
                <button type="submit" className="login-form--button">
                    <span>Log in</span>
                </button>
            </form>
        </main>
    )
}