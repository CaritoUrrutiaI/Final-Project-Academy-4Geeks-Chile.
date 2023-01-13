import React,{useContext} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/forms.css";

export const LoginForm = (props)=>{
    return (
     <div className="container text-center d-flex justify-content-center"  >
        <div className="card mx-auto" style={{backgroundColor: " #C3D9C8",width: "44.75rem", height:"40.25rem", marginTop:"5rem"}}>

            <div className="card-body">
               <h1 className="card-title" style={{marginBottom:"3rem"}}>Bienvenido(a) a Bienestar!</h1>
               <div className="form-group">
                 <input type="text" className="form-control mb-5"  style={{width: '548px', height: '71px', background: '#FFFFFF', opacity: '0.66', borderRadius: '20px',margin:"0 auto"}} placeholder="ID o Email"/>
               </div>
               <div className="form-group">
                 <input type="text" className="form-control mb-3" style={{width: '548px', height: '71px', background: '#FFFFFF', opacity: '0.66', borderRadius: '20px',margin:"0 auto"}} placeholder="Contraseña"/>
               </div >
                <button type="button" className="btn btn-link text-end">¿Has olvidado tu contraseña?</button>
               <br/>
               <a href="#" className="btn btn-primary text-center" style={{width: '277px',height: '71px',background: '#A8BA92',opacity: 0.66,boxShadow: '10px 10px 20px rgba(0, 0, 0, 0.2)',borderRadius: '20px',left: '605px',top: '675px',lineHeight: '60px'}}>Ingresar</a>
               <br/>
               ¿Aun no tienes cuenta?<Link to={props.ruta}><button type="button" className="btn btn-link mb-1">Registrate</button></Link>

            </div>
        </div>
     </div>
    )
}

export const SignUpForm = (props)=>{
  return(
    <div className="container contenedor-principal"  >
    <div className="card carta-contenedora" >

        <div className="card-body ">
           <h2 className="card-title" style={{marginBottom:"3rem"}}>Registrar Nuevo Usuario</h2>
           <div className="container d-flex">
              <div className="form-group ">
                 <input type="text" className="form-control mb-5  input-id"   placeholder="ID"/>
              </div>
              <div className="form-group ">
                 <input type="text" className="form-control mb-5 input-nombre"   placeholder="Nombre"/>
              </div>
            </div>
            <div className="container d-flex">
              <div className="form-group ">
                 <input type="text" className="form-control mb-5 input-id"  placeholder="Apellido Paterno"/>
              </div>
              <div className="form-group ">
                 <input type="text" className="form-control mb-5 input-nombre"  placeholder="Apellido Materno"/>
              </div>
            </div>
            <div className="container d-flex">
              <div className="form-group ">
                 <input type="text" className="form-control mb-5 input-id"  placeholder="Contraseña"/>
              </div>
              <div className="form-group ">
                 <input type="text" className="form-control mb-5 input-nombre"  placeholder="Numero Telefono"/>
              </div>
            </div>      
                    <button type="button" className="btn btn-link text-end">¿Has olvidado tu contraseña?</button>
           <br/>
           <a href="#" className="btn btn-primary text-center" style={{width: '277px',height: '71px',background: '#A8BA92',opacity: 0.66,boxShadow: '10px 10px 20px rgba(0, 0, 0, 0.2)',borderRadius: '20px',left: '605px',top: '675px',lineHeight: '60px'}}><h3>Registrarse</h3></a>
           <br/>
           ¿Ya tienes cuenta?<Link to={props.ruta}><button type="button" className="btn btn-link mb-1">Inicia sesion aqui</button></Link>

        </div>
    </div>
 </div>
  )
}