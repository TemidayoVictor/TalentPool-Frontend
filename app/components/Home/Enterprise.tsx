import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons'

const Enterprise = () => {
    return (
        <div className="enterprise container section flex-5">
            <div className="enterprise-left w-[50%]">
                <div className="title">
                    <h2 className="text-[1.7rem]">Enterprise Suite</h2>
                </div>
                <div className="main-text">
                    <h1>This is how <br /> <span>good companies <br />find good company.</span></h1>
                </div>
                <div className="mb-[1em]">
                    <p>Access the top 1% of talent on Upwork, and a full suite of hybrid workforce management tools. This is how innovation works now.</p>
                </div>
                <div>
                    <div className="enterprise-details flex-4">
                        <FontAwesomeIcon icon={faStar} className="entfon fonawe mr-3"/>
                        <p className="entdet">Access expert talent to fill your skill gaps</p>
                    </div>
                    <div className="enterprise-details flex-4">
                        <FontAwesomeIcon icon={faStar} className="entfon fonawe mr-3"/>
                        <p className="entdet">Control your workflow: hire, classify and pay your talent</p>
                    </div>
                    <div className="enterprise-details flex-4">
                        <FontAwesomeIcon icon={faStar} className="entfon fonawe mr-3"/>
                        <p className="entdet">Partner with Upwork for end-to-end support</p>
                    </div>
                </div>
            </div>
            <div className="enterprise-right enterprise-img-con w-[50%]">
                <img src="/images/enterprise.webp" alt="" className="enterprise-img"/>
            </div>
        </div>
    )
}

export default Enterprise