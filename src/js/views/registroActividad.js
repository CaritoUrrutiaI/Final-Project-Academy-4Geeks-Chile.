import React from "react";
import {useParams} from "react-router-dom";
import bike from "../../img/image 11.png";
import running from "../../img/image 12.png";
import hike from "../../img/image 13.png";
import swim from "../../img/image 14.png";
import "../../styles/entrenamientos.css"


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

            <div className="row container-fluid">

                <div className="col-3">
                 <img src={imageSrc} width="200" className="vista"></img>
                </div> 
            
                <div className="col-6">

                    <div class="mb-3">
                         <input type="number" class="form-control" id="exampleFormControlInput1" placeholder="Distancia Km/H"/>
                    </div>
                
                    <div class="mb-3">
                         <input type="number" class="form-control" id="exampleFormControlInput1" placeholder="Tiempo"/>
                    </div>   
                    
                    <div class="mb-3">
                         <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Emocion"/>
                    </div>
                
                </div>
                <div class="d-grid gap-2 col-6 mx-auto">
  <button class="btn btn-success" type="button">Ingresar</button>
  
</div>
            </div>

        </div>

    )

}



