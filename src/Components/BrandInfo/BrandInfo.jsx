import React from "react";
import "./BrandInfo.css"
import { FaArrowRightLong } from "react-icons/fa6";

const BrandInfo = () => {
    return (
        <>
            <section className="PaddingAdjust" id="AboutCompanySection">
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <div className="MainheadingContainer">
                        <h1 className="MainHeading">You Inspire – Where Dreams Take Flight</h1>
                        <p>Real stories, real struggles, and real success. Honest conversations with those who’ve made it, for those who are making it. Your journey matters—be inspired, take action, and leave your legacy.</p>
                        <div className="AnimatedButtonAnimation">
                            <button><span><FaArrowRightLong /></span> Read More</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default BrandInfo