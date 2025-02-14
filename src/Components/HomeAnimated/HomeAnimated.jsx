import React, { useEffect, useState } from "react";
import "./HomeAnimated.css"
import { Row, Col } from "antd";
import BackCurveImage from "./BackCurveImage.avif"
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, EffectFade, Pagination, Navigation } from 'swiper/modules';

const HomeAnimated = () => {

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            document.querySelector(".LeftSideImageContainer").style.transform = `translateX(${scrollY * -0.2}px)`;
            document.querySelector(".RightSideImageContainer").style.transform = `translateX(${scrollY * 0.2}px)`;
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const SliderImages = [
        {
            img: "https://images.unsplash.com/photo-1644412447376-57f7660a7467?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            img: "https://images.unsplash.com/photo-1513477967668-2aaf11838bd6?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },

    ]




    return (
        <>
            <section style={{ overflow: "hidden" }}>
                <div className="homePageContainerMain">
                    <div className="backgroundSetImage">
                        <div className="overlayContainerFade" data-aos="fade-zoom-in"
                            data-aos-duration="1000"
                            data-aos-delay="300">

                        </div>
                        <img src="https://images.unsplash.com/photo-1482442120256-9c03866de390?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    </div>
                    <div className="ContentAndSliderDesigns">
                        <div className="insideContentContainer">
                            <Row style={{ height: "100%" }}>
                                <Col lg={12} style={{ height: "100%" }}>
                                    <div className="LeftSidemainPageContent" data-aos="fade-right"
                                        data-aos-duration="1200"
                                        data-aos-delay="600">
                                        <div>
                                            <p className="fontFamily">You Inspire</p>
                                            <h1 className="fontFamilyAnother Bigheading">Where Ambition Meets Experience</h1>
                                            <p>Behind every achievement is an untold struggle—listen, learn, and get inspired to chase your own success. </p>

                                            <div className="AnimatedButtonAnimation" style={{ margin: "0px" }}>
                                                <Link to="/about-us">
                                                <button >
                                                    <span><FaArrowRightLong /></span>     You Inspire
                                                </button>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={12} style={{ height: "100%" }}>
                                    <div style={{ height: "100%" }}>
                                        <div style={{ height: "100%" }} data-aos="fade-right"
                                            data-aos-duration="1300"
                                            data-aos-delay="800">
                                            <Swiper
                                                spaceBetween={30}
                                                loop={true}
                                                // effect={'fade'}

                                                centeredSlides={true}
                                                autoplay={{
                                                    delay: 2500,
                                                    disableOnInteraction: false,
                                                }}

                                                speed={900}
                                                // pagination={{
                                                //     clickable: true,
                                                // }}
                                                // navigation={true}
                                                modules={[Autoplay, EffectFade]}
                                                className="mySwiper"
                                            >
                                                {SliderImages.map((item, index) => (
                                                    <SwiperSlide key={index}>
                                                        <div>
                                                            <div>
                                                                <img src={item.img} alt="" />
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
                </div>
            </section>
        </>
    )
}
export default HomeAnimated