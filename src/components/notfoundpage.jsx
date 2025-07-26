import "../stylings/notfoundpage.css"
import { Link } from "react-router-dom"

export default function NotFoundPage() {
    return (
        <div className="not-found-page--container">
            <h1 className="not-found-page--title">Not Found Page ❌</h1>
            <Link to={"/"}>
                <span className="not-found-page--button">Go back Home</span>
            </Link>
        </div>
    )
}