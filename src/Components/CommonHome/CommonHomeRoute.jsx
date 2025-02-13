import React from "react";
import HomeAnimated from "../HomeAnimated/HomeAnimated";
import AnimatedFounder from "../AnimatedFounder/AnimatedFounder";
import AnimatedGallery from "../AnimatedGallery/AnimatedGallery";
import BrandInfo from "../BrandInfo/BrandInfo";
import PodcastWorks from "../PodcastProjects/PodcastWorks";
import OurSpeciality from "../Speciality/OurSpeciality";
import HomePageAbout from "../HomePageAbout/HomePageAbout";
import Quote from "../AnimatedQuote/Quote";
import ContactComponent from "../ContactSection/ContactComponent";

const CommonHomeRoutes = () => {
    return (
        <>
            <HomeAnimated />
            <OurSpeciality />
            <HomePageAbout />
            <Quote />
            <ContactComponent/>
            {/* <PodcastWorks/> */}
            {/* <AnimatedFounder /> */}
            {/* <AnimatedGallery/> */}
            {/* <BrandInfo/> */}
            {/* <PodcastWorks/> */}
        </>
    )
}
export default CommonHomeRoutes