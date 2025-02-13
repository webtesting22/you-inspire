import React, { useEffect, useRef, useState } from "react";
import "./AnimatedGallery.css"
import { Row, Col } from "antd";
import BrandInfo from "../BrandInfo/BrandInfo";
const AnimatedGallery = () => {
    const galleryRef = useRef(null);
    const brandInfoRef = useRef(null);
    const [isInView, setIsInView] = useState(false);
    const [isBrandInfoVisible, setIsBrandInfoVisible] = useState(false);
    const [backgroundColor, setBackgroundColor] = useState("white");

    useEffect(() => {
        const handleScroll = () => {
            if (!isInView) return;

            const scrollY = window.scrollY;
            const opacityStartPoint = 2000; // Both opacity & transform start from here
            const maxScroll = window.innerHeight; // Control how much scrolling affects animation

            let newOpacity = 1;
            let newTransformFactor = 0;

            if (scrollY > opacityStartPoint) {
                newOpacity = Math.max(0, 1 - (scrollY - opacityStartPoint) / maxScroll);
                newTransformFactor = (scrollY - opacityStartPoint) * 0.05; // Apply transform after opacity starts
            }

            document.querySelectorAll(".LeftContainer").forEach(el => {
                el.style.transform = `translateX(${-newTransformFactor}px)`;
                el.style.opacity = newOpacity;
            });

            document.querySelectorAll(".RightContainer").forEach(el => {
                el.style.transform = `translateX(${newTransformFactor}px)`;
                el.style.opacity = newOpacity;
            });

            document.querySelectorAll(".CenterContainer").forEach(el => {
                const scaleValue = Math.max(0.5, 1 - newTransformFactor * 0.009); // Default 1.2, decreases to min 0.5
                el.style.transform = `scale(${scaleValue})`;
                el.style.opacity = newOpacity;
            });

        };

        // **Set Initial State on Page Load**
        handleScroll();

        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsInView(entry.isIntersecting);
                if (entry.isIntersecting) {
                    window.addEventListener("scroll", handleScroll);
                } else {
                    window.removeEventListener("scroll", handleScroll);
                }
            },
            { threshold: 0.2 }
        );

        if (galleryRef.current) {
            observer.observe(galleryRef.current);
        }

        return () => {
            window.removeEventListener("scroll", handleScroll);
            observer.disconnect();
        };

    }, [isInView]);
    // Observer for BrandInfo visibility
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsBrandInfoVisible(entry.isIntersecting);
            },
            { threshold: 0 }
        );

        if (brandInfoRef.current) {
            observer.observe(brandInfoRef.current);
        }

        return () => {
            observer.disconnect();
        };
    }, []);

    // Smooth background color transition
    useEffect(() => {
        setBackgroundColor(isBrandInfoVisible ? "rgb(186 111 70 / 48%)" : "white");
    }, [isBrandInfoVisible]);




    return (
        <>
            <section id="AnimatedGallery" className="PaddingAdjust" style={{
                backgroundColor,
                transition: "background-color 0.8s ease-in-out",
            }}>
                <div className="StickyContainer">
                    <div className="AnimatedImagesGallery">
                        <div className="ImagesContainerColumns" >
                            <Row ref={galleryRef}>
                                <Col lg={4}>
                                    <div className="LeftContainer">
                                        <img src="https://images.unsplash.com/photo-1554941829-202a0b2403b8?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" loading="lazy" />
                                    </div>
                                </Col>
                                <Col lg={4}>
                                    <div className="LeftContainer">
                                        <img src="https://images.unsplash.com/photo-1613031729579-ace1feefda4c?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" loading="lazy" />
                                        <img src="https://images.unsplash.com/photo-1504805572947-34fad45aed93?q=80&w=2607&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" loading="lazy" />
                                    </div>

                                </Col>
                                <Col lg={8} >
                                    <div className="CenterContainer">
                                        <img src="https://plus.unsplash.com/premium_photo-1679079456784-54204468783f?q=80&w=3088&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" loading="lazy" />
                                    </div>

                                </Col>
                                <Col lg={4}>
                                    <div className="RightContainer">
                                        <img src="https://plus.unsplash.com/premium_photo-1673984258486-f58d3629ef92?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" loading="lazy" />
                                        <img src="https://plus.unsplash.com/premium_photo-1664195074833-1b5115a1f74e?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" loading="lazy" />
                                    </div>

                                </Col>
                                <Col lg={4}>
                                    <div className="RightContainer">
                                        <img src="https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=2938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" loading="lazy" />
                                    </div>

                                </Col>
                            </Row>
                        </div>
                    </div>
                </div>
                <div ref={brandInfoRef}>
                    <BrandInfo />
                </div>
            </section>

        </>
    )
}
export default AnimatedGallery