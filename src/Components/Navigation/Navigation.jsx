import React, { useState, useEffect } from "react";
import { Drawer } from "antd";
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import { CloseOutlined } from "@ant-design/icons"; // Import close icon
import NavigationLinks from "./NavigationData";
import "./Navigation.css";
import { MdOutlineCancel } from "react-icons/md";

const MegaNavigation = () => {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const [isScrolled, setIsScrolled] = useState(false);
    const showDrawer = () => {
        setOpen(true);
    };

    const closeDrawer = () => {
        setOpen(false);
    };

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 300);
        };

        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener("scroll", handleScroll);
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 800); // Change color after 300px
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    return (
        <>
            <section className={`AdjustPadding ${scrolled ? "withShadow" : ""}`}>
                <div
                    className="NavigationContainer"
                    style={{
                        padding: isMobile ? "0rem 1rem" : scrolled ? "0rem 6rem" : "1rem 6rem",
                    }}
                >
                    <Link to="/" className="LogoContainer">
                        <img
                            src="/Images/YourInspireLogo.png"
                            alt="Your Inspire Logo"
                            className="LogoImage"
                            loading="lazy"
                        />
                    </Link>

                    {/* Menu Button */}
                    <div className="AnimatedButtonAnimation" style={{ margin: "0px" }}>
                        <button onClick={showDrawer} className={`animatedButton ${isScrolled ? "whiteBg" : "redBg"}`}>
                            <span><FaArrowRightLong /></span> Menu
                        </button>
                    </div>
                </div>
            </section>

            {/* Ant Design Drawer */}
            <Drawer
                title=""
                placement="top"
                closable={false} // Hide default close button
                onClose={closeDrawer}
                open={open}
                height={300}
                id="Drawer"
            >
                {/* Custom Close Button Inside Drawer */}
                <div className="AnimatedButtonAnimation" style={{ margin: "0px" }}>
                    <button onClick={closeDrawer} style={{ minWidth: "95px" }}>
                        <span><MdOutlineCancel /></span> Closed
                    </button>
                </div>


                <ul className="NavigationList">
                    {NavigationLinks.map((item, index) => (
                        <li key={index} className="NavigationLinks">
                            {item.link}
                        </li>
                    ))}
                </ul>
            </Drawer>
        </>
    );
};

export default MegaNavigation;
