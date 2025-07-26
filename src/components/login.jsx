import "../stylings/login.css"
import { Link } from "react-router-dom"
import Logo from "../assets/buzzsumo_icon_blue.svg"

export default function Login() {
    return (
        <form className="login-form--container">
            <div className="login-form--header">
                <img src={Logo} />
                <h1 className="login-form--title">Login to your account</h1>
                <p className="login-form--subtext">
                    Or
                    <Link to={"/trial"} className="login-form--subtext-trial-button">
                        <span> start your free trial</span>
                    </Link>
                </p>
            </div>
            <div className="login-form--fields">
                <div className="login-form--email-container">
                    <label htmlFor="email">Email Address</label>
                    <input type="text" name="email" id="email" required />
                </div>
                <div className="login-form--password-container">
                    <div className="login-form--label">
                        <label htmlFor="password">Password</label>
                        <Link to={"/forgot-password"}>
                            <span>Forgot your Password?</span>
                        </Link>
                    </div>
                    <input type="text" name="password" id="password" required />
                </div>
            </div>
            <Link to={"/"} className="login-form--button">
                <span>Log in</span>
            </Link>
        </form>
    )
}