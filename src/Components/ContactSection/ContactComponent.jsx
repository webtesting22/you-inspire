import React, { useEffect, useState, useRef } from "react";
import "./ContactComponent.css";
import { Row, Col } from "antd";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
const ContactComponent = () => {
    const [offsetY, setOffsetY] = useState(0);
    const parallaxRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (parallaxRef.current) {
                const scrollY = window.scrollY;
                const sectionTop = parallaxRef.current.offsetTop;
                const speed = 0.3; // Adjust speed of movement

                if (scrollY + window.innerHeight > sectionTop) {
                    setOffsetY((scrollY - sectionTop) * speed);
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <section className="parallax-section" ref={parallaxRef}>
            <div className="parallaxImageContainer">
                <img
                    src="https://images.unsplash.com/photo-1734834788640-cc60a0993ed3?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                    className="parallaxImage"
                    style={{ transform: `translateY(${offsetY}px)` }}
                />
                <div className="InsideBoxContainer">
                    <div >
                        <Row style={{ height: "100%" }}>
                            <Col lg={10}>
                                <div className="MobileTypeStyleContainer">
                                    <div>
                                        <img src="https://images.unsplash.com/photo-1523286680734-c387ced73af5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                                    </div>
                                </div>
                            </Col>
                            <Col lg={14}>
                                <div>
                                    <div>
                                        <p className="fontFamily">Lessons from the Best</p>
                                        <h2 className="fontFamilyAnother Mediumheading">A Community, Not Just a Podcast </h2>
                                        <p>You Inspire is more than just a podcast—it's a thriving community where stories spark change. Through insightful conversations and real-life experiences, we bring together voices that inspire, empower, and connect individuals on their journey to success.</p>
                                        <div className="AnimatedButtonAnimation" style={{ margin: "0px" }}>
                                            <a href="tel:+919824002125">
                                                <button>
                                                    <span><FaArrowRightLong /></span> Contact Us
                                                </button>
                                            </a>

                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactComponent;
