import React, { useState } from "react";
import "./PodcastProjects.css"
import PodcastData from "./PodcastData";
import { Row, Col, Tag, Tabs } from "antd";
const PodcastWorks = () => {
    // Get unique categories
    const categories = ["All", ...new Set(PodcastData.map((item) => item.category))];

    // State for selected category
    const [selectedCategory, setSelectedCategory] = useState("All");

    // Filter data based on selected category
    const filteredPodcasts = selectedCategory === "All"
        ? PodcastData
        : PodcastData.filter((item) => item.category === selectedCategory);

    return (
        <>
            <section id="PodcastWorksContainer" className="PaddingAdjust">
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <div className="MainheadingContainer">
                        <h1 className="MainHeading" style={{ color: "white" }} data-aos="fade-left"
                            data-aos-duration="2000" data-aos-delay="200">Recent <span>episodes</span></h1>
                    </div>
                </div>
                <div className="FiltersTabsContainer">
                    <Tabs
                        data-aos="fade-left"
                        data-aos-duration="2000" data-aos-delay="300"
                        defaultActiveKey="All"
                        centered
                        onChange={(key) => setSelectedCategory(key)}
                        items={categories.map((category) => ({
                            key: category,
                            label: category
                        }))}
                    />
                </div>
                <div className="PodcastCardContainer">
                    <div className="fade-in">
                        {filteredPodcasts.map((item, index) => (
                            <div data-aos="fade-left"
                            data-aos-duration="2000" data-aos-delay="600">
                            <Row key={index} >
                                <Col lg={12}>
                                    <div>
                                        <div style={{ display: "flex", flexDirection: "column", alignItems: "start", gap: "2px" }}>
                                            <span><b>EP {index + 1}</b></span>
                                            <span>{item.EPDate}</span>
                                        </div>
                                        <div>
                                            <img src={item.image} alt="" style={{ width: "100%" }} loading="lazy" />
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
                            </div>
                        ))}

                    </div>
                </div>
            </section>
        </>
    )
}
export default PodcastWorks