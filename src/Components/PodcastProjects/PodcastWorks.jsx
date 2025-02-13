import React, { useState } from "react";
import "./PodcastProjects.css"
import PodcastData from "./PodcastData";
import { Row, Col, Tag, Tabs } from "antd";
import { FaArrowRightLong } from "react-icons/fa6";
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
                        <h1 className="MainHeading" style={{ color: "black" }} data-aos="fade-left"
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
                        <Row >
                            {filteredPodcasts.map((item, index) => (
                                // <div data-aos="fade-left"
                                //     data-aos-duration="1000" data-aos-delay="300">

                                <Col lg={8} md={12} key={index}>
                                    <div>
                                        <div style={{ display: "flex", flexDirection: "column", alignItems: "start", gap: "2px" }}>
                                                <span style={{opacity:"0.3",fontWeight:"400"}}>EP {index + 1}</span>
                                                {/* <span>{item.EPDate}</span> */}
                                            </div>
                                        <div className="ImagePodcastContainer">
                                            <img src={item.image} alt="" style={{ width: "100%" }} loading="lazy" className="podcastImage" />
                                            <div className="AnimatedButtonAnimation">
                                                <button><span><FaArrowRightLong /></span> See Project</button>
                                            </div>
                                        </div>


                                    </div>
                                </Col>


                                // </div>
                            ))}
                        </Row>
                    </div>
                </div>
            </section>
        </>
    )
}
export default PodcastWorks