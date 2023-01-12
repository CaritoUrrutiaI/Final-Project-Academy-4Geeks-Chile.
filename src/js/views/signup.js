import React from "react";
import {SignUpForm} from "../component/forms"
import { Context } from "../store/appContext";

export const SignUp = ()=>{
    return (
        <div className="text-center">
            <h1>SIGN UP</h1>
        <div className="row">
           <SignUpForm/>
        </div>
       </div>
    )
}