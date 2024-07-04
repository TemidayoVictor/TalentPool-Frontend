import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCertificate, faDollarSign } from '@fortawesome/free-solid-svg-icons'

const HomeSection2 = () => {
    return (
        <div className="flex section section-2 container ">
            <div className="w-[45%] section-2-left">
                <img src="/images/freelancer.jpg" alt="" className="rounded-[.5rem]" />
            </div>

            <div className="w-[52%] section-2-right">
                <h1 className="section-title">Up your work game, it’s easy</h1>
                <div className="flex-3 my-[1rem]">
                    <div>
                        <FontAwesomeIcon icon={faDollarSign} className="fonawe mt-2"/>
                    </div>
                    <div className="ml-5">
                        <h3 className="subtitle">No cost to join</h3>
                        <p className="paragraph-2">Register and browse professionals, explore projects, or even book a consultation.</p>
                    </div>
                </div>

                <div className="flex-3 my-[1rem]">
                    <div>
                        <FontAwesomeIcon icon={faBars} className="fonawe mt-2"/>
                    </div>
                    <div className="ml-5">
                        <h3 className="subtitle">Post a job and hire top talent</h3>
                        <p className="paragraph-2">Finding talent doesn’t have to be a chore. Post a job or we can search for you!</p>
                    </div>
                </div>

                <div className="flex-3 my-[1rem]">
                    <div>
                        <FontAwesomeIcon icon={faCertificate} className="fonawe mt-2"/>
                    </div>
                    <div className="ml-5">
                        <h3 className="subtitle">Work with the best—without breaking the bank</h3>
                        <p className="paragraph-2">Upwork makes it affordable to up your work and take advantage of low transaction rates.</p>
                    </div>
                </div>
                <div className="mt-[2em] flex-3">      
                    <a href="#" className="btn btn-big mr-2">Sign Up For Free</a>
                    <a href="#" className="btn btn-big inverted">Learn how to hire</a>
                </div>

            </div>
        </div>
    )
}

export default HomeSection2