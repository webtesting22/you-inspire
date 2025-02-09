import React from "react";
import "./BrandInfo.css"
import { FaArrowRightLong } from "react-icons/fa6";

const BrandInfo = () => {
    return (
        <>
            <section className="PaddingAdjust" id="AboutCompanySection">
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <div className="MainheadingContainer">
                        <h1 className="MainHeading">Behind every dream lies a story of courage and resilience.</h1>
                        <p>Step into the minds of the world’s most inspiring figures as they share the untold moments that shaped their success. From battles with self-doubt to bold leaps of faith, their journeys reveal the power of resilience and determination.</p>
                    <div className="AnimatedButtonAnimation">
                        <button><span><FaArrowRightLong /></span> Show Podcasts</button>
                    </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default BrandInfo