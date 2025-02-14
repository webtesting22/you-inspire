import React from "react";
import AboutMissionVisionBack from "./AboutMissionVisionBack.png"
import "./AboutMissionVision.css"
import { Row, Col } from "antd";
const AboutMissionVision = () => {

    const MissionVisionPurposeData = [
        {
            title: "Mission: Empowering Dreams, Inspiring Change",
            description: <>

                <p>To bring untold stories to life—stories of resilience, passion, and purpose. You Inspire exists to bridge the gap between dreams and reality, showing that every success has a journey, every triumph has a struggle, and every voice has the power to ignite change.</p>
            </>
        },
        {
            title: "Vision: A Future Fueled by Inspiration",
            description: <>
                <p>To create a world where inspiration is not just a feeling but a force—where the wisdom of those who’ve walked the path lights the way for those still finding their steps. You Inspire will be the place where ambition meets experience, where stories shape destinies, and where the pursuit of greatness is shared, not solitary.</p>
            </>
        },
        {
            title: "Purpose: Transforming Challenges into Triumphs",
            description: <>
                <p>Because behind every success, there was doubt. Behind every breakthrough, there was fear. Behind every great story, there was a moment when giving up seemed easier.</p>
                <p>We exist to capture those moments, to remind the world that no one rises alone, and to prove that inspiration is not just found—it’s created, one story at a time.
                </p>
            </>
        }
    ]

    return (
        <>
            <section>
                <div id="MissionVisionContainer">
                    <div className="OverlayParallaxMissionVisionContainer">
                        <div className="OverlayBackgroundImageContainer">
                            <img src="https://images.unsplash.com/photo-1734834788640-cc60a0993ed3?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="You Inspire - Mission, Vision, and Purpose of the Video Podcast" />
                        </div>
                        <div className="MissionVisionPurposeContent">
                            <div className="PaddingAdjust">
                                <div className="TopHeadingContainermisionVision">
                                    <div>
                                        <h1 className="fontFamilyAnother Mediumheading">Fueling Dreams, Inspiring Change</h1>
                                        <p>We believe that every journey, every challenge, and every triumph carries the power to inspire. Through real stories of passion, resilience, and success, we bridge the gap between ambition and achievement—proving that greatness is not just pursued but shared.</p>
                                    </div>
                                </div>
                                <div className="PaddingAdjust">
                                    <Row>
                                        {MissionVisionPurposeData.map((item, index) => (
                                            <Col lg={8} md={12}>
                                                <div className="MissionVisionCard">
                                                    <div>
                                                        <p className="fontFamily">{item.title}</p>
                                                        <hr />
                                                        <p>{item.description}</p>
                                                    </div>
                                                </div>
                                            </Col>
                                        ))}
                                    </Row>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default AboutMissionVision