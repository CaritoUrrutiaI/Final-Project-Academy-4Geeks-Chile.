import React from "react";
import {Link} from "react-router-dom";
import bike from "../../img/image 11.png";
import running from "../../img/image 12.png";
import hike from "../../img/image 13.png";
import swim from "../../img/image 14.png";
import "../../styles/entrenamientos.css"; 

export const Entrenamiento=()=>{
    return(
        <div className="container text-center mb-5">
            <h1 className="my-5">Entrenamientos</h1>
            <div className="row">
                <div className="col-3">
                    <Link to="/registroActividad/Bike">
                        <img src={bike} width="200" ></img>
                    </Link>
                </div>
                <div className="col-3">
                    <Link to="/registroactividad/Swim">
                        <img src={swim} width="200"></img>
                    </Link>
                </div>
                <div className="col-3">
                    <Link to="/registroactividad/Running">
                        <img src={running} width="200"></img>
                    </Link>
                </div>
                <div className="col-3">
                    <Link to="/registroactividad/Hike">
                        <img src={hike} width="200"></img>
                    </Link>
                </div>
            </div>
        </div>
    )
}