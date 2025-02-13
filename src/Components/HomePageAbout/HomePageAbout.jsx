import React from "react";
import "./HomePageAbout.css"
import { Row, Col } from "antd";
import ImageContainer from "../Speciality/topShowImage.jpg"
const HomePageAbout = () => {
    return (
        <>
            <section className="PaddingAdjust">
                <div id="HomepageAboutContainer">
                    <div>
                        <Row>
                            <Col lg={12}>
                                <div>
                                    <p className="fontFamily">About Your Business</p>
                                    <h2 className="fontFamilyAnother Mediumheading">Where ambition meets experience</h2>
                                    <p>In a world brimming with untold stories, where dreams rise like the morning sun and ambitions carve their way through time, You Inspire is born—a sanctuary of voices, a symphony of struggles, and a testament to triumph.
                                    </p>
                                    <p>Here, the world’s most inspiring minds unravel their journeys, peeling back the layers of success to reveal the unseen—moments of doubt, sparks of courage, and the quiet perseverance that turned their dreams into reality. They were once where you are, standing at the edge of uncertainty, searching for the next step. </p>
                                </div>
                            </Col>
                            <Col lg={12}>
                                <div className="MainContainerSpecialityImage">
                                    <div className="BackgroundImageContainer">
                                        <img src={ImageContainer} alt="" />
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
export default HomePageAbout