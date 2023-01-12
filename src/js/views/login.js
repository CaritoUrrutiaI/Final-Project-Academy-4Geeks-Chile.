import React from "react";
import {LoginForm} from "../component/forms"
import { Context } from "../store/appContext";


export const Login = ()=>{
    return ( 
    <div className="text-center">
     <div className="row">
        <LoginForm/>
     </div>
    </div>
    )
}