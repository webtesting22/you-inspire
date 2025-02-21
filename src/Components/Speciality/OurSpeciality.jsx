import React from "react";
import "./OurSpeciality.css"
import { Row, Col } from "antd";
import ImageContainer from "./topShowImage.jpg"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
// import required modules
import { Autoplay, FreeMode, Pagination } from 'swiper/modules';
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
        {
            title: "Growth",
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque modi porro maiores similique quidem voluptas exercitationem perspiciatis facere magni inventore."
        },
        {
            title: "Resilience",
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque modi porro maiores similique quidem voluptas exercitationem perspiciatis facere magni inventore."
        },
        {
            title: "Mindset",
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque modi porro maiores similique quidem voluptas exercitationem perspiciatis facere magni inventore."
        },

        {
            title: "Breakthrough",
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque modi porro maiores similique quidem voluptas exercitationem perspiciatis facere magni inventore."
        },
        {
            title: "Journey",
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque modi porro maiores similique quidem voluptas exercitationem perspiciatis facere magni inventore."
        },
        {
            title: "Ambition",
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque modi porro maiores similique quidem voluptas exercitationem perspiciatis facere magni inventore."
        },
        {
            title: "Dreams",
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
                                <div className="MainContainerSpecialityImage" data-aos="fade-right"
                                    data-aos-duration="1000"
                                    data-aos-delay="300">
                                    <div className="BackgroundImageContainer">
                                        <img src="./Images/Imageused3.png" alt="" />
                                    </div>
                                </div>
                            </Col>
                            <Col lg={12}>
                                <div>
                                    <div>
                                        <p className="fontFamily" data-aos="fade-right">Our Speciality</p>
                                        <Swiper
                                            slidesPerView={3}
                                            spaceBetween={30}
                                            loop={true}
                                            direction={'vertical'}
                                            freeMode={true}
                                            autoplay={{
                                                delay: 2500,
                                                disableOnInteraction: true,
                                            }}
                                            // pagination={{
                                            //     clickable: true,
                                            // }}
                                            breakpoints={{
                                                0: { slidesPerView: 2 }, // For mobile screens
                                                768: { slidesPerView: 3 } // For tablets and larger screens
                                            }}
                                            speed={600}
                                            modules={[Autoplay, FreeMode, Pagination]}
                                            className="mySwiper"
                                            id="SwiperCss"

                                        >
                                            {OurSpecialityData.map((item, index) => (
                                                <SwiperSlide key={index} style={{ height: "100%" }}> {/* Key prop should be here */}
                                                    <div className="BorderStyle" >
                                                        <div>
                                                            <h2 className="fontFamilyAnother Mediumheading">0{index + 1} / {item.title}</h2>
                                                            <p>{item.description}</p>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                            ))}
                                        </Swiper>

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