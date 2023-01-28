import React from "react";
import {SignUpForm} from "../component/forms"
import { Context } from "../store/appContext";

export const SignUp = ()=>{
    return (
        <div className="text-center mb-5 pb-5">
        <div className="row">
              <SignUpForm ruta="/login"/>
              
        </div>
       </div>
    )
}