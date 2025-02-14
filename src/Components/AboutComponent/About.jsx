import React from "react";
import "./About.css"
import { Row, Col } from "antd";
const About = () => {
    return (
        <>
            <section>
                <div id="AboutContentContainer">
                    <div className="PaddingAdjust">
                        <div className="PaddingAdjust removeMobile">

                        </div>
                        <Row>
                            <Col lg={12}>
                                <div data-aos="fade-up"
                                    data-aos-duration="1000"
                                    data-aos-delay="300">
                                    <p className="fontFamily">About Us</p>
                                    <h2 className="fontFamilyAnother Mediumheading">About the Brand</h2>
                                    <p>In a world brimming with untold stories, where dreams rise like the morning sun and ambitions carve their way through time, You Inspire is born—a sanctuary of voices, a symphony of struggles, and a testament to triumph.
                                    </p>
                                    <p>Here, the world’s most inspiring minds unravel their journeys, peeling back the layers of success to reveal the unseen—moments of doubt, sparks of courage, and the quiet perseverance that turned their dreams into reality. They were once where you are, standing at the edge of uncertainty, searching for the next step.  </p>
                                    <p>Through their stories, you’ll find more than wisdom—you’ll find reflections of your own path, illuminated by the echoes of their resilience.</p>
                                    <p>This is not just a podcast; it is a gateway to possibility. A place where ambition meets insight, where the extraordinary becomes tangible, and where every voice reminds you that greatness is not born—it is built, choice by choice, challenge by challenge.</p>
                                </div>
                            </Col>
                            <Col lg={12}>
                                <div className="MainContainerSpecialityImage" data-aos="fade-right"
                                    data-aos-duration="1000"
                                    data-aos-delay="300">
                                    <div className="BackgroundImageContainer">
                                        {/* <img src={ImageContainer} alt="" /> */}
                                    </div>
                                </div>

                            </Col>
                        </Row>
                    </div>
                </div>
            </section>
        </>
    )
}
export default About