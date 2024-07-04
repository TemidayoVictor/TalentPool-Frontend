import React from "react";

const Hero = () => {
    return (
        <div className="home container ">
            <div className="flex">
                <div className="hero-left">
                    <h1>
                        Highly Skilled AI pros
                    </h1>
                    <p className="paragraph">
                        Unleash your business potential
                        by hiring the right expert for your need.
                    </p>
                    <div className="mt-[1em]">
                        <a href="#" className="btn btn-big">Get Started</a>
                    </div>
                </div>

                <div className="hero-right">
                    <img src="/images/hero.webp" alt="" />
                </div>
            </div>

            <div className="mt-[3rem]">
                <p className="paragraph">Trusted By</p>
                <div className="flex-2">
                    <img src="/images/microsoft.svg" alt="" />
                    <img src="/images/airbnb.svg" alt="" />
                    <img src="/images/bissell.svg" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Hero