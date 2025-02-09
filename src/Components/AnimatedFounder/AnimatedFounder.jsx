import React from "react";
import "./AnimatedFounder.css"
import { AiFillInstagram } from "react-icons/ai";
import { IoLogoFacebook } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa6";
import { LazyLoadImage } from 'react-lazy-load-image-component';
const AnimatedFounder = () => {
    return (
        <>
            <section id="HostFounder" className="PaddingAdjust">
                <div >
                    <div className="meetFounderContainer" style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                        <div className="MainheadingContainer">
                            <h1 className="MainHeading" data-aos="fade-up"
                                data-aos-duration="2000" data-aos-delay="200">Meet the <span>host</span></h1>
                        </div>
                    </div>
                    <div className="Animated">
                        <div>
                            <LazyLoadImage data-aos="fade-up"
                                data-aos-duration="2000" data-aos-delay="300" effect="blur" src="https://images.unsplash.com/photo-1544719576-904e2d01e057?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Podcast recording setup with microphone" threshold={300}
                                visibleByDefault={false} />
                            <div className="FounderContentContainer" data-aos="fade-left"
                                data-aos-duration="2000" data-aos-delay="400">
                                <h2>
                                    Jack Carter
                                </h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa quibusdam quas quis dignissimos! Saepe tempore incidunt officia, rerum at assumenda aspernatur numquam. Fugiat eligendi eveniet perspiciatis dolore commodi aliquid laborum.</p>
                                <div className="Socialicons">
                                    <ul style={{ display: "flex", gap: "20px", listStyle: "none", padding: "0px" }}>
                                        <li><AiFillInstagram /></li>
                                        <li><IoLogoFacebook /></li>
                                        <li><FaLinkedin /></li>
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