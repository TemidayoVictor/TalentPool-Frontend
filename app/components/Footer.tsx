import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTelegram, faXTwitter, faFacebook, faInstagram, faYoutube, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-body">
                
                <div className="socials flex">
                    <p>Follow Us</p>
                    <div className="socials-icons flex">
                        <a href="#">
                            <FontAwesomeIcon icon={faFacebook} className=" social-ic"/>
                        </a>
                        <a href="#">
                            <FontAwesomeIcon icon={faLinkedin} className=" social-ic"/>
                        </a>
                        <a href="#">
                            <FontAwesomeIcon icon={faXTwitter} className=" social-ic"/>
                        </a>
                        <a href="#">
                            <FontAwesomeIcon icon={faYoutube} className=" social-ic"/>
                        </a>
                        <a href="#">
                            <FontAwesomeIcon icon={faInstagram} className=" social-ic"/>
                        </a>
                    </div>
                </div>
                <div className="border-bottom my-[1em]"></div>
                <div className="flex terms">
                    <p>© 2024 TalentPool Global Inc.</p>
                    <div>
                        <a href="#" className="footer-link">Terms of Service</a>
                        <a href="#" className="footer-link ml-2">Privacy Policy</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer