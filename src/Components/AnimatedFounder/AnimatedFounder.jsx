import React from "react";
import "./AnimatedFounder.css"
import { AiFillInstagram } from "react-icons/ai";
import { IoLogoFacebook } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa6";

const AnimatedFounder = () => {
    return (
        <>
            <section id="HostFounder" className="PaddingAdjust">
                <div >
                    <div className="meetFounderContainer" style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                        <div className="MainheadingContainer">
                            <h1 className="MainHeading">Meet the <span>host</span></h1>
                        </div>
                    </div>
                    <div className="Animated">
                        <div>
                            <img src="https://images.unsplash.com/photo-1544719576-904e2d01e057?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                            <div className="FounderContentContainer">
                                <h2>
                                    Jack Carter
                                </h2>
                                <p>Vestibulum volutpat pretium libero. Integer tincidunt. Ut tincidunt tincidunt erat. Nullam sagittis. Pellentesque libero tortor, tincidunt et, tincidunt eget, semper.</p>
                                <div className="Socialicons">
                                    <ul style={{display:"flex",gap:"20px",listStyle:"none",padding:"0px"}}>
                                        <li><AiFillInstagram/></li>
                                        <li><IoLogoFacebook/></li>
                                    <li><FaLinkedin/></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

        </>
    )
}
export default AnimatedFounder