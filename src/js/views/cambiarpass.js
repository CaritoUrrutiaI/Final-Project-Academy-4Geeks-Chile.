import "../../styles/footer.css"
import "../../styles/forms.css";
import { useNavigate } from "react-router-dom"
import React, { useContext, useState, useEffect } from "react";
import Swal from "sweetalert2"
import { Context } from "../store/appContext";




export const CambiarContrasena = () =>{
    let navigate = useNavigate();
    const {actions,store}=useContext(Context)
    const [datauser,setDataUser] = useState(JSON.parse(localStorage.getItem("datauser") ))
	const [token,setToken] = useState(JSON.parse(localStorage.getItem("user-token") ))
    const handleLogout2 = ()=>{
        setDataUser (localStorage.removeItem("datauser"))
        setToken (localStorage.removeItem("user-token"))
        navigate("/login")
    } 
    return (
      <form onSubmit={(evento)=>{
        evento.preventDefault();
        let email = evento.target[0].value
        let contraseña = evento.target[1].value
        let newpass = evento.target[2].value
        if(email == "" ||contraseña == ""|| newpass==""){
            Swal.fire({
                title: 'ERROR',
                text: 'Debes completar los datos',
                icon: 'error',
                confirmButtonText: 'OK'
             })
        }
        else{
            actions.resetpass(email,contraseña,newpass)
            alert("conseguido")
            handleLogout2()

        }
      }}>
         <div className="container text-center d-flex justify-content-center" >
            <div className="card mx-auto" style={{ backgroundColor: " #C3D9C8", width: "44.75rem", height: "40rem", marginTop: "5rem" }}>
               <div className="card-body">
                  <h2 className="card-title" style={{ marginBottom: "3rem" }}>Cambiar Contraseña </h2>
                  <div className="form-group">
                     <input type="text" className="form-control mb-5" style={{ width: '548px', height: '71px', background: '#FFFFFF', opacity: '0.66', borderRadius: '20px', margin: "0 auto" }} placeholder="Email" />
                  </div>
                  <div className="form-group">
                     <input type="text" className="form-control mb-5" style={{ width: '548px', height: '71px', background: '#FFFFFF', opacity: '0.66', borderRadius: '20px', margin: "0 auto" }} placeholder="Contraseña actual" />
                  </div>
                  <div className="form-group">
                     <input type="password" className="form-control mb-3" style={{ width: '548px', height: '71px', background: '#FFFFFF', opacity: '0.66', borderRadius: '20px', margin: "0 auto" }} placeholder="Nueva contraseña" />
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


    