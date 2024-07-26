import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";

const Login = () => {
    return (
        <div className="min-h-[70vh] container flex-4 justify-center">
            <div className="log-con border">
                <div className="bor-bot-cp">
                    <h1 className="text-3xl font-bold color-primary">Welcome Back 😉</h1>
                    <p className="my-2">Sign in as a Tasker or Talent</p>
                </div>
                <div className="mt-5">
                    <div className="my-4">
                        <div className="flex-1">
                            <FontAwesomeIcon icon={faUser} className="h-[15px] w-[15px] color-primary" />
                            <label className="ml-3 font-bold color-primary text-[1.1rem]">Login</label>
                        </div>
                        <input type="email" className="w-[100%] input" />
                    </div>

                    <div className="my-4">
                        <div className="flex-1">
                            <FontAwesomeIcon icon={faLock} className="h-[15px] w-[15px] color-primary" />
                            <label className="ml-3 font-bold color-primary text-[1.1rem]">Password</label>
                        </div>
                        <input type="password"  className="w-[100%] input" />
                    </div>

                    <a href="#" className="underline color-primary">forgot password</a>
                    
                    <div className="my-3">
                        <input className="block btn w-[100%]" value="Login"/>
                    </div>

                    <p className="text-center">Don't have an account yet?<a href="/signup" className="color-primary underline ml-2">Sign up</a></p>
                </div>
            </div>
        </div>
    )
}

export default Login