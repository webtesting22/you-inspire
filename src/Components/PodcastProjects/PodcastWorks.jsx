import React from "react";
import "./PodcastProjects.css"
import PodcastData from "./PodcastData";
import { Row, Col, Tag } from "antd";
const PodcastWorks = () => {
    return (
        <>
            <section id="PodcastWorksContainer" className="PaddingAdjust">
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <div className="MainheadingContainer">
                        <h1 className="MainHeading" style={{ color: "white" }}>Recent episodes</h1>
                    </div>
                </div>
                <div className="PodcastCardContainer">
                    <div>
                        {PodcastData.map((item, index) => (
                            <Row key={index}>
                                <Col lg={12}>
                                    <div>
                                        <div style={{ display: "flex", flexDirection: "column", alignItems: "start", gap: "2px" }}>
                                            <span><b>EP {index + 1}</b></span>
                                            <span>{item.EPDate}</span>
                                        </div>
                                        <div>
                                            <img src={item.image} alt="" style={{ width: "100%" }} loading="lazy"/>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={12}>
                                    <div style={{ display: "flex", alignItems: "center", height: "100%" }}>
                                        <div >
                                            <div>
                                                <Tag color="blue">{item.tag}</Tag>
                                            </div>
                                            <div>
                                                <h2>{item.title}</h2>
                                                <p>{item.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        ))}

                    </div>
                </div>
            </section>
        </>
    )
}
export default PodcastWorks