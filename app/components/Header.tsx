'use client'
import React, {useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    const [active, setActive] = useState(false);
    const toggleDropdown = () => {
        setActive(prev => !prev);
      };
    return(
        <div className="header">
            <div className="container flex">
                <a className="logo" href="#">
                    <h1>TalentPool</h1>
                </a>
                <div className={`nav-links flex ${active ? 'active' : ''} `}>
                    <div className="nav-link-a">
                        <a href="/" className="link">Home</a>
                        <a href="#" className="link">About Us</a>
                        <a href="/tasks" className="link">Tasks</a>
                        
                        <a href="/talents" className="link">Talents</a>
                    </div>
                
                    <div className="btn-group">    
                        <a href="#" className="btn btn-header">Sign Up</a>
                        <a href="#" className="btn btn-header">Login</a>
                    </div>
                </div>
                <div className="mobile">
                    <FontAwesomeIcon icon={faBars} className="fonawe mr-3" onClick={toggleDropdown}/>
                </div>
            </div>
            <div className="border-bottom"></div>
        </div>
    )
}

export default Header