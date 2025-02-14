import React, { useEffect, useState } from "react";
import "./AboutUs.css"
import About from "../AboutComponent/About";
import AboutMissionVision from "../AboutOverlayMissionVision/AboutMissionVision";
const AboutBrand = () => {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <section>
                <div id="AboutUsContainer">
                    <div className="TopAboutUsContainer">
                        <div className="AbsoluteContainerImageset" >
                            <img src="https://images.unsplash.com/photo-1734834788640-cc60a0993ed3?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="You Inspire - Engaging Video Podcast for Motivation and Growth" style={{
                                transform: `translateY(${scrollY * 0.2}px)`, // Parallax effect
                                transition: "transform 0.2s ease-out",
                            }} />
                            <img src="https://images.unsplash.com/photo-1734834788640-cc60a0993ed3?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="You Inspire - Real Stories of Passion, Resilience, and Success" style={{
                                transform: `translateY(${scrollY * -0.2}px)`, // Parallax effect
                                transition: "transform 0.2s ease-out",
                            }} />
                        </div>
                        <div className="PaddingAdjust">
                            <div className="AjustContainer">
                                <p className="fontFamily" style={{ color: "white" }}>Work With Us</p>
                                <h2 className="fontFamilyAnother Bigheading" style={{ color: "white" }}>About The Brand</h2>
                                <div className="MiddleImage">
                                    <img src="https://images.unsplash.com/photo-1738739907728-a03d024ee77c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="You Inspire - Discover the Brand Behind the Podcast" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <About />
            <AboutMissionVision />
        </>
    )
}
export default AboutBrand