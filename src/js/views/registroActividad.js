import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import bike from "../../img/image 11.png";
import running from "../../img/image 12.png";
import hike from "../../img/image 13.png";
import swim from "../../img/image 14.png";
import { useNavigate } from "react-router-dom";

import "../../styles/entrenamientos.css";
import { Context } from "../store/appContext";

export const RegistrarActividad = () => {
  const { actividad } = useParams();
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();

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

        <div className="col-4 offset-1">
          <form
            onSubmit={(evento) => {
              evento.preventDefault();
              actions.addActividad(
                actividad,
                evento.target.distancia.value,
                evento.target.tiempo.value,
                evento.target.emoji.value
              );
              localStorage.setItem("distancia", evento.target.distancia.value);
              localStorage.setItem("tiempo", evento.target.tiempo.value);
              localStorage.setItem("emoji", evento.target.emoji.value);
              localStorage.setItem("actividad", actividad);
              alert("completado");
              navigate("/vistausuario");
            }}
          >
            <div class="input-group mb-3">
                <input
                    type="number"
                    class="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Distancia Km/H"
                    name="distancia"
                />
                <span class="input-group-text" id="basic-addon2">Km</span>
            </div>
            <div class="input-group mb-3">
                <input
                    type="number"
                    class="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Tiempo"
                    name="tiempo"
                />
                <span class="input-group-text" id="basic-addon2">Minutos</span>
            </div>

            <div class="mb-3">
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  name="emoji"
                  id="inlineRadio1"
                  value="😎"
                />
                <label
                  class="form-check-label textoTamañoGrande"
                  for="inlineRadio1"
                >
                  {" "}
                  😎
                </label>
              </div>

              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  name="emoji"
                  id="inlineRadio2"
                  value="🙂"
                />
                <label
                  class="form-check-label textoTamañoGrande"
                  for="inlineRadio2"
                >
                  🙂
                </label>
              </div>

              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  name="emoji"
                  id="inlineRadio2"
                  value=" 😰"
                />
                <label
                  class="form-check-label textoTamañoGrande"
                  for="inlineRadio2"
                >
                  😰
                </label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  name="emoji"
                  id="inlineRadio2"
                  value=" 🤮"
                />
                <label
                  class="form-check-label textoTamañoGrande"
                  for="inlineRadio2"
                >
                  🤮
                </label>
              </div>
              <div>
                <button type="submit">enviar</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
