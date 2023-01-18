import React,{useContext,useState,useEffect} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/forms.css";
import {useForm} from "react-hook-form"
import Swal from "sweetalert2"
import {useNavigate} from "react-router-dom"

export const LoginForm = (props)=>{


    return (
     <div className="container text-center d-flex justify-content-center" >
         <div className="card mx-auto" style={{backgroundColor: " #C3D9C8",width: "44.75rem", height:"40.25rem", marginTop:"5rem"}}>

            <div className="card-body">
               <h1 className="card-title" style={{marginBottom:"3rem"}}>Bienvenido(a) a Bienestar!</h1>
               <div className="form-group">
                 <input type="text" className="form-control mb-5"  style={{width: '548px', height: '71px', background: '#FFFFFF', opacity: '0.66', borderRadius: '20px',margin:"0 auto"}} placeholder="Email"/>
               </div>
               <div className="form-group">
                 <input type="text" className="form-control mb-3" style={{width: '548px', height: '71px', background: '#FFFFFF', opacity: '0.66', borderRadius: '20px',margin:"0 auto"}} placeholder="Contraseña"/>
               </div >
                <button type="button" className="btn btn-link text-end">¿Has olvidado tu contraseña?</button>
               <br/>
               <a href="#" className="btn btn-primary text-center" style={{width: '277px',height: '71px',background: '#A8BA92',opacity: 0.66,boxShadow: '10px 10px 20px rgba(0, 0, 0, 0.2)',borderRadius: '20px',left: '605px',top: '675px',lineHeight: '60px'}}>Ingresar</a>
               <br/>
               ¿Aún no tienes cuenta?<Link to={props.ruta}><button type="button" className="btn btn-link mb-1">Registrate</button></Link>

            </div>
        </div>
     </div>
    )
} 

export const SignUpForm = (props)=>{
   const [pass,setPass] = useState("")
   const [email,setEmail] = useState("")
   let navigate = useNavigate();
  return(
  <form onSubmit={(evento)=>{
     evento.preventDefault();
     let nameUser =  evento.target[0].value
     let Email = evento.target[1].value
     let name = evento.target[2].value
     let apellido = evento.target[3].value
     let contraseña = evento.target[4].value
     let contraseñaRepetir = evento.target[5].value
     if(contraseña!=contraseñaRepetir){
      Swal.fire({
         title: 'ERROR',
         text: 'Las contraseñas deben ser identicas',
         icon: 'error',
         confirmButtonText: 'OK'
       })
     }
     if(nameUser=="" || Email=="" || name==""|| apellido==""||contraseña==""||contraseñaRepetir==""){
      Swal.fire({
         title: 'ERROR',
         text: 'Debes completar los datos',
         icon: 'error',
         confirmButtonText: 'OK'
       })
     }
     else{
      Swal.fire({
         title: 'FELICIDADES',
         text: 'El registro a sido completado',
         icon: 'success',
         confirmButtonText: 'OK'
       })
      navigate("/login")
     }
  }}>
    <div className="container contenedor-principal"  >
    <div className="card carta-contenedora" >

        <div className="card-body ">
           <h2 className="card-title" style={{marginBottom:"3rem"}}>Registrar Nuevo Usuario</h2>
           <div className="container d-flex">
              <div className="form-group ">
                 <input type="text" className="form-control mb-5  input-id"  name="username"  placeholder="Username"/>
                  
              </div>
              <div className="form-group ">
                 <input type="email" className="form-control mb-5 input-nombre"
                  name="email"   placeholder="Email"/>               
                 </div>
            </div>
            <div className="container d-flex">
              <div className="form-group ">
                 <input type="text" className="form-control mb-5 input-id" name="nombre"  placeholder="Nombre"/>
                </div>
              <div className="form-group ">
                 <input type="text" className="form-control mb-5 input-nombre" name="apellido"  placeholder="Apellido"/>
                 
              </div>
            </div>
            <div className="container d-flex">
              <div className="form-group ">
                 <input type="password" className="form-control mb-5 input-id" name="contraseña" id="inputPassword" placeholder="Contraseña" onChange={(evento)=>{
                  setPass(evento.target.value)
                 }}/>
              </div>
              <div className="form-group ">
                 <input type="password" className="form-control mb-5 input-nombre"name="repetirContraseña" id="inputPassword" placeholder="Repetir Contraseña"/>
              </div>
            </div>      
                    <button type="button" className="btn btn-link text-end">¿Has olvidado tu contraseña?</button>
           <br/>
         <button href="#"   
                       type="submit"className="btn btn-primary text-center"  style={{width: '277px',height: '71px',background: '#A8BA92',opacity: 0.66,boxShadow: '10px 10px 20px rgba(0, 0, 0, 0.2)',borderRadius: '20px',left: '605px',top: '675px',lineHeight: '60px'}} value="Registrarse"><h3>Registrarse</h3></button>
           <br/>
           ¿Ya tienes cuenta?<Link to={props.ruta}><button type="button" className="btn btn-link mb-1">Inicia sesion aqui</button></Link>

        </div>
     </div>
    </div>
 </form>
  )
}

export default SignUpForm;