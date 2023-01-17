import React from "react";
import {LoginForm} from "../component/forms"
import { Context } from "../store/appContext";


export const Logout = ()=>{
    return ( 
    <div className="text-center">
     <div className="row">
        <LoginForm ruta="/logout"/>
     </div>
    </div>
    )
}