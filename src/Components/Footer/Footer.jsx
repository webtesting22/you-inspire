import React from "react";
import "./Footer.css"
import { Row, Col } from "antd";
import { Link } from "react-router-dom";
const Footer = () => {
    return (
        <>
            <section id="FooterContentContainer">
                <div className="PaddingAdjust">
                    <div className="FooterHeaderPart">
                        <div style={{ display: "flex", justifyContent: "center" }}>
                            <p className="fontFamily">Popular Popular</p>
                        </div>
                        {/* <Row>
                            <Col lg={8}>
                                <div>
                                    <h2 className="fontFamilyAnother Mediumheading">Popular Name</h2>
                                </div>
                            </Col>
                            <Col lg={8}>
                                <div>
                                    <h2 className="fontFamilyAnother Mediumheading">Popular Name</h2>
                                </div>
                            </Col>
                            <Col lg={8}>
                                <div>
                                    <h2 className="fontFamilyAnother Mediumheading">Popular Name</h2>
                                </div>
                            </Col>
                        </Row> */}
                    </div>
                    <div className="Topheadingbrandtitle">
                        <div>
                            <span className="fontFamilyAnother Mediumheading">You Inspire</span>
                        </div>
                    </div>
                    <br /><br />
                    <div>
                        <div className="FooterinsideBottomContainer">
                            <Row>
                                <Col lg={6}>
                                    <div>
                                        <p className="fontFamilyAnother smallHeading">Navigate</p>
                                        <div>
                                            <ul>
                                                <Link to="/"><li>Home</li></Link>
                                                <Link to="/about-us"><li>About</li></Link>

                                            </ul>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={12}>
                                    <div>
                                        <div className="ImageAttachContainer">
                                            <img src="https://images.unsplash.com/photo-1586894608265-bc4474cc34ae?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                                            <img src="https://images.unsplash.com/photo-1685293943609-36ccbb9fe84c?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={6}>
                                    <div>
                                        <div>
                                            <p className="fontFamilyAnother smallHeading">Social Connects</p>
                                            <div>
                                                <ul>
                                                    <li>Instagram</li>
                                                    <li>Linkedin</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </div>
                    <br /><br />
                    <div className="CopywriteText">
                        <span>DESIGNED BY <a href="https://www.outleadsolutions.com/" target="_blank"> &nbsp;Outlead Solutions</a></span>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Footer