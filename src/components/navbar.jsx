import "../styles/navbar.css"
import { Link } from "react-router-dom"

export default function Header() {
    return (
        <>
            <nav className="navigation-bar--container">
                <h1 className="navigation-bar--logo">BuzzSumo</h1>
                <div className="navigation-bar--links">
                    <Link to={"/features"} className="navigation-bar--links-button">
                        <span>Features</span>
                    </Link>
                    <Link to={"/cases"} className="navigation-bar--links-button">
                        <span>Use Cases</span>
                    </Link>
                    <Link to={"/resources"} className="navigation-bar--links-button">
                        <span>Resources</span>
                    </Link>
                    <Link to={"/pricing"} className="navigation-bar--links-button">
                        <span>Pricing</span>
                    </Link>
                    <Link to={"/company"} className="navigation-bar--links-button">
                        <span>Company</span>
                    </Link>
                </div>
                <div className="navigation-bar--buttons-container">
                    <Link to={"/"} className="navigation-bar--button-login">
                        <span>Login</span>
                    </Link>
                    <Link to={"/trial"} className="navigation-bar--button-free-trial">
                        <span>Free Trial</span>
                    </Link>
                </div>
            </nav>
        </>
    )
}