import React, { useState } from "react";
import { Drawer, Button } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import NavigationLinks from "./NavigationData";
import { FaArrowRightLong } from "react-icons/fa6";
import "./Navigation.css";

const MegaNavigation = () => {
    const [open, setOpen] = useState(false);

    const showDrawer = () => {
        setOpen(true);
    };

    const closeDrawer = () => {
        setOpen(false);
    };

    return (
        <>
            <section className="AdjustPadding">
                <div className="NavigationContainer">
                    <Link to="/" className="LogoContainer">
                        <img
                            src="/Images/YourInspireLogo.png"
                            alt="Your Inspire Logo"
                            className="LogoImage"
                            loading="lazy"
                        />
                    </Link>

                    {/* Menu Button */}

                    <div className="AnimatedButtonAnimation" style={{margin:"0px"}}>
                        <button onClick={showDrawer} style={{minWidth:"95px"}}><span><FaArrowRightLong /></span> Menu</button>
                    </div>

                </div>
            </section>

            {/* Ant Design Drawer */}
            <Drawer
                title=""
                placement="top"
                closable={true}
                onClose={closeDrawer}
                open={open}
                height={300} // Controls the height of the drawer
            >
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
