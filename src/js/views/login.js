import React from "react";
import {LoginForm} from "../component/forms"
import { Context } from "../store/appContext";


export const Login = ()=>{
    return ( 
    <div className="text-center mb-5 pb-5">
     <div className="row">
        <LoginForm ruta="/signup"/>
     </div>
    </div>
    )
}