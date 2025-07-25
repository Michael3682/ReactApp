import "../stylings/navbar.css"

export default function Header() {
    return (
        <>
            <nav className="navbar">
                <h1 className="logo">BuzzSumo</h1>
                <div className="navigation-links">
                    <a href="">Features</a>
                    <a href="">Use Cases</a>
                    <a href="">Resources</a>
                    <a href="">Pricing</a>
                    <a href="">Company</a>
                </div>
                <div className="buttons">
                    <a href="">Login</a>
                    <a href="">Free Trial</a>
                </div>
            </nav>
        </>
    )
}