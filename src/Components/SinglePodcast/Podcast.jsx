import React from "react";
import "./Podcast.css"
import { Row, Col } from "antd";
const Podcast = () => {
    return (
        <>
            <section id="SinglePodcastDynamicContainer" className="PaddingAdjust">
                <div >
                    <Row>
                        <Col lg={12}>
                            <div className="SinglePagePodcastImage">
                                <img src="https://images.unsplash.com/photo-1583127812417-7c06e950a432?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                            </div>
                        </Col>
                        <Col lg={12}>
                            <div>
                                <div className="MainheadingContainer">
                                    <h2 className="MainHeading">Understanding the Power of Podcasting</h2>
                                </div>

                                <p><b>Summary</b></p>
                                <p>Dignissim nunc nunc ullamcorper faucibus risus suspendisse consectetur tempus est. At arcu consectetur duis ipsum mi purus scelerisque sapien. Eu tincidunt arcu sit lacus. Montes ultrices faucibus gravida amet fermentum sit vel.

                                </p>
                                <p>Eu tincidunt arcu sit lacus. Montes ultrices faucibus gravida amet fermentum sit vel. Ac egestas risus nec purus maecenas eget vel commodo nulla. Nibh sed sed ipsum massa sit amet ultrices. Libero sed aliquam cras pellentesque leo. Odio maecenas dictum neque mi eget aliquam natoque consequat semper.</p>
                            </div>
                        </Col>
                    </Row>
                </div>
                <div className="HierarchyContainer">
                    <div>
                        <p>Date:</p>
                        <p>Dynamic Date</p>
                    </div>
                    <div>
                        <p>Category:</p>
                        <p>Dynamic Category</p>
                    </div>
                    <div>
                        <p>Reading time:</p>
                        <p>Dynamic Time</p>
                    </div>
                    <div>
                        <p>Author :</p>
                        <p>Dynamic Author</p>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Podcast