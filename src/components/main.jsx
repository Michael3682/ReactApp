import "../styles/main.css"
import { Link } from "react-router-dom"
import HeroFeaturedImage from "../assets/hero-featured-image.png"
import HeroFeaturedSupporting1 from "../assets/hero-featured-supporting-1.png"
import HeroFeaturedSupporting2 from "../assets/hero-featured-supporting-2.png"
import HeroFeaturedSupporting3 from "../assets/hero-featured-supporting-3.png"

export default function Main() {
    return (
        <>
            <main className="hero-featured">
                <div className="hero-featured--content">
                    <h1 className="hero-featured--title">Be inspired. Stay informed.</h1>
                    <p className="hero-featured--subtext">See how much interest brands and content generate in the wild.</p>
                    <Link to={"/trial"} className="hero-featured--button">
                        <span>Start Your Free Trial</span>
                    </Link>
                </div>
                <div className="hero-featured--images">
                    <img className="hero-featured--image" src={HeroFeaturedImage} />
                    <img className="hero-featured--supporting--1" src={HeroFeaturedSupporting1} />
                    <img className="hero-featured--supporting--2" src={HeroFeaturedSupporting2} />
                    <img className="hero-featured--supporting--3" src={HeroFeaturedSupporting3} />
                </div>
            </main>
        </>
    )
}