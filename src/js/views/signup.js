import React from "react";
import {SignUpForm} from "../component/forms"
import { Context } from "../store/appContext";

export const SignUp = ()=>{
    return (
        <div className="text-center">
        <div className="row">
           <SignUpForm ruta="/login"/>
        </div>
       </div>
    )
}