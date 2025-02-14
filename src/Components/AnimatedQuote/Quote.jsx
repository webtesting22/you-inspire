import React from "react";
import "./Quote.css"
const Quote = () => {
    return (
        <>
            <section>
                <div id="QuoteContainerAjust" className="PaddingAdjust">
                    <div className="PaddingAdjust">
                        <div>
                            <div className="CircleImage">
                                <img src="https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                            </div>
                            <p className="fontFamilyAnother" >“You Inspire brings real stories of struggles and success, offering wisdom from those who’ve been there. It’s more than a podcast—it’s a community where ambition meets inspiration.”</p>
                            <p className="fontFamily" style={{margin:"0px 0px"}}>You Inspire</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Quote;