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
                                <div data-aos="fade-up"
                                    data-aos-duration="1000"
                                    data-aos-delay="300">
                                    {/* <p className="fontFamily">You Inspire</p> */}
                                    <h2 className="fontFamilyAnother Mediumheading">Why come to You Inspire</h2>
                                    <p>Every success story starts with a single step, every breakthrough comes after a struggle, and every leader, creator, and innovator has a journey worth sharing.
                                    </p>
                                    <p>You Inspire is the podcast that uncovers the real stories behind success—the challenges, the turning points, and the lessons that shaped extraordinary people.  </p>
                                    <p>As we gear up for our big launch, we’re looking for trailblazers, risk-takers, and dreamers who have walked the path and want to share what it really takes to make it.
                                    </p>
                                </div>
                            </Col>
                            <Col lg={12}>
                                <div className="MainContainerSpecialityImage" data-aos="fade-right"
                                    data-aos-duration="1000"
                                    data-aos-delay="300">
                                    {/* <div className="BackgroundImageContainer"> */}
                                        <img src="./Images/Imageused3.png" alt="You Inspire - Empowering Change Through Real-Life Stories" style={{width:"100%"}}/>
                                    {/* </div> */}
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