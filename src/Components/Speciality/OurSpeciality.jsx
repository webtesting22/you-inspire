import React from "react";
import "./OurSpeciality.css"
import { Row, Col } from "antd";
import ImageContainer from "./topShowImage.jpg"
const OurSpeciality = () => {

    const OurSpecialityData = [
        {
            title: "Inspiration",
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque modi porro maiores similique quidem voluptas exercitationem perspiciatis facere magni inventore."

        },
        {
            title: "Motivation",
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque modi porro maiores similique quidem voluptas exercitationem perspiciatis facere magni inventore."
        },
        {
            title: "Success",
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque modi porro maiores similique quidem voluptas exercitationem perspiciatis facere magni inventore."
        },
       

    ]
    return (
        <>
            <section className="PaddingAdjust">
                <div id="ourSpecialityContainer">
                   
                    <div>
                        <Row>
                            <Col lg={12}>
                                <div className="MainContainerSpecialityImage">
                                    <div className="BackgroundImageContainer">
                                            <img src={ImageContainer} alt="" />
                                    </div>
                                </div>
                            </Col>
                            <Col lg={12}>
                                <div>
                                <div>
                                <p className="fontFamily">Our Speciality</p>
                                    {OurSpecialityData.map((item, index) => (
                                        <div key={index} className="BorderStyle">
                                            <div>
                                                <h2 className="fontFamilyAnother Mediumheading">0{index +1} / {item.title}</h2>
                                                <p>{item.description}</p>
                                            </div>
                                        </div>
                                    ))}
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
export default OurSpeciality