import React,{useContext,useState,useEffect} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/forms.css";
import {useForm} from "react-hook-form"
import Swal from "sweetalert2"

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
   
   const [dataForm,setDataForm] = useState();
   const {register,formState,handleSubmit}= useForm();
   const onSubmit = (data) =>{data.preventDefault()
      if (!formState.isValid) {
         Swal.fire({
           title: 'Error!',
           text: 'Por favor complete todos los campos requeridos',
           icon: 'error',
           confirmButtonText: 'Aceptar'
         });
         return;
      console.log(data)
        }}
   const onChangeForm = (e)=>{
      console.log(e.target.value)
      console.log(dataForm)
      setDataForm({...dataForm,
         [e.target.name]:e.target.value
              })
   }
   
   /*const [isButtonDisabled, setIsButtonDisabled] = useState(true);
   const {formState,handl}= useForm();
   useEffect(()=>{
      setIsButtonDisabled(!formState.isValid)
   }

   ),[formState];
   const [dataForm,setDataForm] = useState();
   const {register,formState:{errors},handleSubmit,form}= useForm();
   const onSubmit = (e) =>{
      e.preventDefault();
      if (!formState.isValid) {
          setIsButtonDisabled(true)
          return;
      }
      setIsButtonDisabled(false)
      console.log(data);
  }
   const onChangeForm = (e)=>{
      console.log(e.target.value)
      console.log(dataForm)

      setDataForm({...dataForm,
         [e.target.name]:e.target.value
              })
   }*/
  return(
  <form onSubmit={handleSubmit(onSubmit)  
  }>
    <div className="container contenedor-principal"  >
    <div className="card carta-contenedora" >

        <div className="card-body ">
           <h2 className="card-title" style={{marginBottom:"3rem"}}>Registrar Nuevo Usuario</h2>
           <div className="container d-flex">
              <div className="form-group ">
                 <input type="text" className="form-control mb-5  input-id"  name="username" onChange={(e)=>onChangeForm(e)} placeholder="Username"/>
                   {errors.id?.type === "required" && <p>El campo id es requerido</p> }
                   {errors.id?.type === "maxLength" && <p>El campo id debe tener menos de 10 caracteres</p> }

              </div>
              <div className="form-group ">
                 <input type="email" className="form-control mb-5 input-nombre"{...register("email",{
                  required:true,maxLength:20},
                 {pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/})} name="email" onChange={(e)=>onChangeForm(e)}  placeholder="Email"/>
                  {errors.email?.type === "pattern" && <p>El formato del email es incorrecto</p> }
                  {errors.email?.type === "required" && <p>El campo Email es requerido</p> }

              </div>
            </div>
            <div className="container d-flex">
              <div className="form-group ">
                 <input type="text" className="form-control mb-5 input-id"{...register("nombre",{
                  required:true})} name="nombre" onChange={(e)=>onChangeForm(e)} placeholder="Nombre"/>
                  {errors.nombre?.type === "required" && <p>El campo Nombre es requerido</p> }

              </div>
              <div className="form-group ">
                 <input type="text" className="form-control mb-5 input-nombre" {...register("apellido",{
                  required:true})}name="apellido" onChange={(e)=>onChangeForm(e)} placeholder="Apellido"/>
                  {errors.nombre?.type === "required" && <p>El campo Apellido es requerido</p> }
              </div>
            </div>
            <div className="container d-flex">
              <div className="form-group ">
                 <input type="password" className="form-control mb-5 input-id" {...register("contraseña",{
                  required:true})}name="contraseña" onChange={(e)=>onChangeForm(e)} placeholder="Contraseña"/>
                {errors.nombre?.type === "required" && <p>El campo Contraseña es requerido</p> } 
              </div>
              <div className="form-group ">
                 <input type="text" className="form-control mb-5 input-nombre" {...register("numeroTelefono",{maxLength:11})}name="numeroTelefono" onChange={(e)=>onChangeForm(e)} placeholder="Numero Telefono"/>
              </div>
            </div>      
                    <button type="button" className="btn btn-link text-end">¿Has olvidado tu contraseña?</button>
           <br/>
           <button href="#" 
           onClick={() => {
            if (!formState.isValid) {
               Swal.fire({
                  title: 'Error!',
                  text: 'Por favor complete todos los campos requeridos',
                  icon: 'error',
                  confirmButtonText: 'Aceptar'
               });
               return;
            }
         }}/*onClick={(event)=>{
            if(!formState.isValid){
               event.preventDefault();
               return;
            }
                     Swal.fire({
                      title: 'Error!',
                      text: 'Do you want to continue',
                      icon: 'success',
                      confirmButtonText: 'Aceptar'
               });
            }}*/
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