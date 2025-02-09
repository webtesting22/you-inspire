import React, { useEffect } from "react";
import "./HomeAnimated.css"
import { Row, Col } from "antd";
const HomeAnimated = () => {
    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            document.querySelector(".LeftSideImageContainer").style.transform = `translateX(${scrollY * -0.2}px)`;
            document.querySelector(".RightSideImageContainer").style.transform = `translateX(${scrollY * 0.2}px)`;
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <section className="PaddingAdjust" style={{ overflow: "hidden" }}>
                <div style={{ display: "flex", justifyContent: "center", marginBottom: "2rem" }}>
                    <div className="MainheadingContainer">
                        <h1 className="MainHeading" data-aos="fade-down"
                            data-aos-duration="2000"  data-aos-delay="300">Transforming  <span style={{ color: "#BA6F46", fontSize: "4.25rem" }}>Challenges into Triumphs: </span>Inspiring Journeys</h1>
                    </div>
                </div>

                <div>
                    <Row>
                        <Col lg={8}>
                            <div>
                                <div className="LeftSideImageContainer carousel" >
                                    <img className="fade-image" src="/Images/HomepageSideImage1.jpg" alt="" loading="lazy" />
                                    <img className="fade-image" src="/Images/HomepageSideImage2.jpg" alt="" loading="lazy" />
                                    <img className="fade-image" src="https://images.unsplash.com/photo-1554941829-202a0b2403b8?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" loading="lazy" />
                                </div>
                            </div>
                        </Col>
                        <Col lg={8}>
                            <div>
                                <div className="AnimatedImageContainer" data-aos="fade-up"
                            data-aos-duration="2000"  data-aos-delay="400">
                                    <img src="/Images/WaveAimated.svg" alt="" style={{ width: "100px" }} loading="lazy" />
                                    <img src="/Images/HomePageAnimatedMic.png" alt="" loading="lazy" />
                                </div>
                            </div>
                        </Col>
                        <Col lg={8}>
                            <div>
                                <div className="RightSideImageContainer carousel">
                                    <img className="fade-image" src="/Images/HomepageSideImage2.jpg" alt="" loading="lazy" />
                                    <img className="fade-image" src="/Images/HomepageSideImage1.jpg" alt="" loading="lazy" />
                                    <img className="fade-image" src="https://images.unsplash.com/photo-1554941829-202a0b2403b8?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" loading="lazy" />

                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </section>
        </>
    )
}
export default HomeAnimated