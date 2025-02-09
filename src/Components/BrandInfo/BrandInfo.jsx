import React from "react";
import "./BrandInfo.css"
import { FaArrowRightLong } from "react-icons/fa6";

const BrandInfo = () => {
    return (
        <>
            <section className="PaddingAdjust" id="AboutCompanySection">
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <div className="MainheadingContainer">
                        <h1 className="MainHeading">People are at the heart of what we do</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, sit. Eum nulla sunt id cupiditate commodi quaerat neque earum et optio fugiat, sequi rem minus eos natus nisi blanditiis amet culpa voluptatem voluptatum, repellendus aperiam ex officiis! Corporis tempore, dolore architecto ut eligendi quia accusamus velit laborum soluta possimus expedita.</p>
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