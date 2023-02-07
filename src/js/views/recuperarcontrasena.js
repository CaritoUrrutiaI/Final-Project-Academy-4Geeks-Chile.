import "../../styles/footer.css"
import "../../styles/forms.css";
import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import Swal from "sweetalert2"
import { useNavigate } from "react-router-dom"



export const RecuperarContrasena = () =>{
   let navigate = useNavigate();
   const {actions,store}=useContext(Context)
    return (
      <form onSubmit={(evento)=>{
         evento.preventDefault();
         let Email = evento.target[0].value
         let Apellido = evento.target[1].value
         if(Email == ""|| Apellido ==""){
            Swal.fire({
               title: 'ERROR',
               text: 'Debes completar los datos',
               icon: 'error',
               confirmButtonText: 'OK'
            })
            
         }
         else{
            actions.recoverpass(Email,Apellido);
            alert("prueba")
            navigate("/cambiarcontrasena")
         }
      }}>
         <div className="container text-center d-flex justify-content-center" >
            <div className="card mx-auto" style={{ backgroundColor: " #C3D9C8", width: "44.75rem", height: "30rem", marginTop: "5rem" }}>
               <div className="card-body">
                  <h2 className="card-title" style={{ marginBottom: "3rem" }}>Recuperar Contraseña </h2>
                  <div className="form-group">
                     <input type="text" className="form-control mb-5" style={{ width: '548px', height: '71px', background: '#FFFFFF', opacity: '0.66', borderRadius: '20px', margin: "0 auto" }} placeholder="Email" />
                  </div>
                  <div className="form-group">
                     <input type="text" className="form-control mb-3" style={{ width: '548px', height: '71px', background: '#FFFFFF', opacity: '0.66', borderRadius: '20px', margin: "0 auto" }} placeholder="Respuesta secreta" />
                  </div >

                  <br />
                  <button href="#" type="submit" className="btn btn-primary text-center fs-5 mb-2" style={{ width: '277px', height: '71px', background: '#A8BA92', opacity: 0.66, boxShadow: '10px 10px 20px rgba(0, 0, 0, 0.2)', borderRadius: '20px', left: '605px', top: '675px', lineHeight: '60px' }}>Ingresar</button>
                  <br />
                  
               </div>
               
            </div>
         </div>
      </form>
    )
    } 


    