import React from "react";
import {useParams} from "react-router-dom";
import bike from "../../img/image 11.png";
import running from "../../img/image 12.png";
import hike from "../../img/image 13.png";
import swim from "../../img/image 14.png";



export const RegistrarActividad=()=>{
    const { actividad } = useParams();

    let imageSrc;
    switch(actividad) {
        case 'Bike':
            imageSrc = bike;
            break;
        case 'Running':
            imageSrc = running;
            break;
        case 'Hike':
            imageSrc = hike;
            break;
        case 'Swim':
            imageSrc = swim;
            break;
        default:
            imageSrc = '';
    }

    return (

        <div className="text-center">
            <h1> Registro de actividad: {actividad} </h1>

        
                <img src={imageSrc} width="200" ></img>
            

            <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
            </div>
            <div className="mb-3">
                <label for="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>

        </div>

    )

}



