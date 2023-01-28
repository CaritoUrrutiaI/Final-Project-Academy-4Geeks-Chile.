import React from "react";
import { useParams } from "react-router-dom";
import bike from "../../img/image 11.png";
import running from "../../img/image 12.png";
import hike from "../../img/image 13.png";
import swim from "../../img/image 14.png";
import "../../styles/entrenamientos.css";

export const RegistrarActividad = () => {
  const { actividad } = useParams();

  let imageSrc;
  switch (actividad) {
    case "Bike":
      imageSrc = bike;
      break;
    case "Running":
      imageSrc = running;
      break;
    case "Hike":
      imageSrc = hike;
      break;
    case "Swim":
      imageSrc = swim;
      break;
    default:
      imageSrc = "";
  }

    return (
        <div className="text-center">
          <h1> Registro de actividad: {actividad} </h1>
            <div className="row container-fluid">
            <div className="col-3">
              <img src={imageSrc} width="200" className="vista"></img>
            </div>
    
            <div className="col-6">
                    <form
                    onSubmit={(evento) => {
                    evento.preventDefault();
                    localStorage.setItem("distancia", evento.target.distance.value);
                    localStorage.setItem("tiempo", evento.target.time.value); 
                    localStorage.setItem("emoji", evento.target.emoji.value);
                    }}>
                    <h1>{localStorage.getItem("distancia")}</h1>
                    <h1>{localStorage.getItem("tiempo")}</h1>
                    <h1>{localStorage.getItem("emoji")}</h1>
                    
                    <h1>cual es tu nombre?</h1>
                    <div class="mb-3">
                    <input
                        type="number"
                        class="form-control"
                        id="exampleFormControlInput1"
                        placeholder="Distancia Km/H"
                        name="distance"
                    />
                    </div>
                    <div class="mb-3">
                    <input
                        type="number"
                        class="form-control"
                        id="exampleFormControlInput1"
                        placeholder="Tiempo"
                        name="time"
                    />
                    </div>
                   
                        <div class="mb-3">
                            <div class="form-check form-check-inline">
                                <input
                                    class="form-check-input"
                                    type="radio"
                                    name="emoji"
                                    id="inlineRadio1"
                                    value="option1"
                                />
                                <label
                                    class="form-check-label textoTamañoGrande"
                                    for="inlineRadio1"
                                >
                                    {" "}
                                    &#128526;
                                </label>
                            </div>
    
                            <div class="form-check form-check-inline">
                                <input
                                    class="form-check-input"
                                    type="radio"
                                    name="emoji"
                                    id="inlineRadio2"
                                    value="option2"
                                />
                                <label
                                    class="form-check-label textoTamañoGrande"
                                    for="inlineRadio2"
                                >
                                    &#128578;
                                </label>
                            </div>
    
                            <div class="form-check form-check-inline">
                                <input
                                    class="form-check-input"
                                    type="radio"
                                    name="emoji"
                                    id="inlineRadio2"
                                    value="option2"
                                />
                                <label
                                    class="form-check-label textoTamañoGrande" for="inlineRadio2"
                                >
                                    &#128578;
                                </label>    
                            </div>
                            <div class="form-check form-check-inline">
                                <input
                                    class="form-check-input"
                                    type="radio"
                                    name="emoji"
                                    id="inlineRadio2"
                                    value="option2"
                                />
                                <label
                                    class="form-check-label textoTamañoGrande" for="inlineRadio2"
                                >
                                    &#128578;
                                </label>    
                            </div>
                            <div><button type="submit">enviar</button></div>
                            
                        </div>
                    </form>
            </div>
            </div>
            </div>)}
    