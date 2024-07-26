"use client";
import React, {useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock, faEnvelope, faPhone, faPen, faBriefcase, faPenAlt } from "@fortawesome/free-solid-svg-icons";

const Signup = () => {
    
    const [showSignup, setShowSignup] = useState(false);
    const [showRole, setShowRole] = useState(true);
    const [selectedRole, setSelectedRole] = useState("");

    const taskerSelected = () => {
        setShowSignup(true);
        setShowRole(false);
        setSelectedRole("Tasker");
    };

    const talentSelected = () => {
        setShowSignup(true);
        setShowRole(false);
        setSelectedRole("Talent");
    };

    return (
        <div className="min-h-[70vh] container flex-4 justify-center">
            <div className={`${!showRole ? 'hidden' : '' }`}>
                <div className="flex-4 justify-center">
                    <h1 className="inline-block bor-bot-cp text-3xl font-bold text-center color-primary">What Will You Like To Do?</h1>
                </div>
                <div className="sign-grid mt-5">
                    <div className="sign-grid-item" onClick={taskerSelected}>
                        <div>
                            <FontAwesomeIcon icon={faBriefcase} className="h-[28px] w-[28px] color-primary fa" /> 
                        </div>
                        <h2 className="text-2xl font-bold my-2 color-primary">Tasker</h2>
                        <p className="text-[1.2rem]"> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum, repudiandae. </p>
                    </div>

                    <div className="sign-grid-item" onClick={talentSelected}>
                        <div>
                            <FontAwesomeIcon icon={faPenAlt} className="h-[28px] w-[28px] color-primary fa" /> 
                        </div>
                        <h2 className="text-2xl font-bold my-2 color-primary">Talent</h2>
                        <p className="text-[1.2rem]"> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum, repudiandae. </p>
                    </div>
                </div>
            </div>

            <div className={`log-con border mb-4 ${!showSignup ? 'hidden' : '' }`}>
                <div className="bor-bot-cp">
                    <h1 className="text-3xl font-bold    color-primary">Become a {selectedRole} </h1>
                    <p className="my-2">Create your {selectedRole} Account</p>
                </div>
                <div className="mt-5">
                    <div className="sign-flex">
                        <div className="w-[10%]">
                            <FontAwesomeIcon icon={faUser} className="h-[15px] w-[15px] color-primary" /> 
                        </div>
                        <div className="w-[90%]">
                            <div>
                                <div className="flex-1">
                                    <label className="ml-3 font-bold color-primary text-[1.1rem]">First Name</label>
                                </div>
                                <input type="email" className="w-[100%] input" />
                            </div>

                            <div className="my-4">
                                <div className="flex-1">
                                    <label className="ml-3 font-bold color-primary text-[1.1rem]">Last Name</label>
                                </div>
                                <input type="email" className="w-[100%] input" />
                            </div>

                            <div className="my-4">
                                <div className="flex-1">
                                    <label className="ml-3 font-bold color-primary text-[1.1rem]">Create Username</label>
                                </div>
                                <input type="email" className="w-[100%] input" />
                            </div>
                        </div>
                    </div>

                    <div className="sign-flex my-4">
                        <div className="w-[10%]">
                            <FontAwesomeIcon icon={faEnvelope} className="h-[15px] w-[15px] color-primary" /> 
                        </div>
                        <div className="w-[90%]">
                            <div>
                                <div className="flex-1">
                                    <label className="ml-3 font-bold color-primary text-[1.1rem]">Email</label>
                                </div>
                                <input type="email" className="w-[100%] input" />
                            </div>
                        </div>
                    </div>

                    <div className="sign-flex my-4">
                        <div className="w-[10%]">
                            <FontAwesomeIcon icon={faPhone} className="h-[15px] w-[15px] color-primary" /> 
                        </div>
                        <div className="w-[90%]">
                            <div>
                                <div className="flex-1">
                                    <label className="ml-3 font-bold color-primary text-[1.1rem]">Phone</label>
                                </div>
                                <input type="email" className="w-[100%] input" />
                            </div>
                        </div>
                    </div>

                    <div className="sign-flex my-4">
                        <div className="w-[10%]">
                            <FontAwesomeIcon icon={faLock} className="h-[15px] w-[15px] color-primary" /> 
                        </div>
                        <div className="w-[90%]">
                            <div>
                                <div className="flex-1">
                                    <label className="ml-3 font-bold color-primary text-[1.1rem]">Create Password</label>
                                </div>
                                <input type="email" className="w-[100%] input" />
                            </div>

                            <div className="my-4">
                                <div className="flex-1">
                                    <label className="ml-3 font-bold color-primary text-[1.1rem]">Confirm Password</label>
                                </div>
                                <input type="email" className="w-[100%] input" />
                            </div>
                        </div>
                    </div>
                    
                    <div className="my-3">
                        <input className="block btn w-[100%]" value="Create Account"/>
                    </div>

                    <p className="text-center">Have an account yet?<a href="/login" className="color-primary underline ml-2">Login</a></p>
                </div>
            </div>
        </div>
    )
}

export default Signup