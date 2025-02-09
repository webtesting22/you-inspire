import React from "react";
import HomeAnimated from "../HomeAnimated/HomeAnimated";
import AnimatedFounder from "../AnimatedFounder/AnimatedFounder";
import AnimatedGallery from "../AnimatedGallery/AnimatedGallery";
import BrandInfo from "../BrandInfo/BrandInfo";
import PodcastWorks from "../PodcastProjects/PodcastWorks";

const CommonHomeRoutes = () => {
    return (
        <>
            <HomeAnimated />
            <AnimatedFounder />
            <AnimatedGallery/>
            {/* <BrandInfo/> */}
            <PodcastWorks/>
        </>
    )
}
export default CommonHomeRoutes