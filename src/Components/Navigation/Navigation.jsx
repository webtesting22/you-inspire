import React from "react";
import NavigationLinks from "./NavigationData";
import { Row, Col } from "antd";
import "./Navigation.css"

const MegaNavigation = () => {
    return (
        <>
            <section className="AdjustPadding">
                <div className="NavigationContainer">
                    <Row>
                        <Col lg={12} md={12} style={{width:"100%"}}>
                            <div className="LogoContainer">
                                <img
                                    src="/Images/YourInspireLogo.png"
                                    alt="Your Inspire Logo"
                                    className="LogoImage"
                                    loading="lazy"
                                />
                            </div>
                        </Col>
                        <Col lg={12} md={12} style={{width:"100%"}}>
                            <div className="NavigationLinksContainer">
                                <ul>
                                    {NavigationLinks.map((item, index) => (
                                        <>
                                            <li key={index} className="NavigationLinks">
                                                {item.link}
                                            </li>
                                            {/* <img src="/Images/hoverBorderLine.svg" alt="" /> */}
                                        </>
                                    ))}
                                </ul>
                            </div>
                        </Col>
                        {/* <Col lg={8}>
                        </Col> */}
                    </Row>
                </div>
            </section>
        </>
    )
}
export default MegaNavigation