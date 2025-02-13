import React from "react";
import "./Footer.css"
import { Row, Col } from "antd";
const Footer = () => {
    return (
        <>
            <section id="FooterContentContainer">
                <div className="PaddingAdjust">
                    <div>
                        <Row>
                            <Col lg={12} md={12}>

                            </Col>
                            <Col lg={12} md={12}>
                                <div>
                                    <p>Instagram</p>
                                    <p>Linkedin</p>
                                </div>
                            </Col>
                        </Row>
                    </div>
                    <div className="Copywritetext">
                        <p>DESIGNED BY OUTLEAD SOLUTIONS</p>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Footer