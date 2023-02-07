import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/forms.css";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { useNavigate } from "react-router-dom"

export const LoginForm = (props) => {

   const MySwal = withReactContent(Swal)

   let navigate = useNavigate();
   const { actions, store } = useContext(Context)
   return (
      <form onSubmit={(evento) => {
         evento.preventDefault();
         let Email = evento.target[0].value
         let contraseña = evento.target[1].value

         if (Email == "" || contraseña == "") {
            MySwal.fire({
               title: 'ERROR',
               text: 'Debes completar los datos',
               icon: 'error',
               confirmButtonText: 'OK'
            })

         }
         else {
            actions.login(Email, contraseña);
            MySwal.fire({
                title: 'FELICIDADES',
                text: 'Inicio de sesion completado',
                icon: 'success',
                confirmButtonText: 'OK'
              })
         }
      }}>
         <div className="container text-center d-flex justify-content-center" >
            <div className="card mx-auto" style={{ backgroundColor: " #C3D9C8", width: "44.75rem", height: "40.25rem", marginTop: "5rem" }}>
               <div className="card-body">
                  <h2 className="card-title" style={{ marginBottom: "3rem" }}>Bienvenido(a) a Bienestar ! </h2>
                  <div className="form-group">
                     <input type="text" className="form-control mb-5" style={{ width: '548px', height: '71px', background: '#FFFFFF', opacity: '0.66', borderRadius: '20px', margin: "0 auto" }} placeholder="Email" />
                  </div>
                  <div className="form-group">
                     <input type="password" className="form-control mb-3" style={{ width: '548px', height: '71px', background: '#FFFFFF', opacity: '0.66', borderRadius: '20px', margin: "0 auto" }} placeholder="Contraseña" />
                  </div >

                  <br />
                  <button href="#" type="submit" className="btn btn-primary text-center fs-5 mb-2" style={{ width: '277px', height: '71px', background: '#A8BA92', opacity: 0.66, boxShadow: '10px 10px 20px rgba(0, 0, 0, 0.2)', borderRadius: '20px', left: '605px', top: '675px', lineHeight: '60px' }}>Ingresar</button>
                  <br />
                  Aún no tienes cuenta ?<Link to={props.ruta}><button type="button" className="btn btn-link mb-1">Registrate</button></Link>
               </div>
               <Link to="/recuperarcontrasena">
               <button type="button" className="btn btn-link mb-2 fs-5">Has olvidado tu contraseña ?</button>
               </Link>
            </div>
         </div>
      </form>
   )
}

export const SignUpForm = (props) => {
   const [pass, setPass] = useState("")
   const [email, setEmail] = useState("")
   let navigate = useNavigate();
   const { actions, store } = useContext(Context)

   return (
      <form onSubmit={(evento) => {
         evento.preventDefault();
         let nameUser = evento.target[0].value
         let Email = evento.target[1].value
         let name = evento.target[2].value
         let apellido = evento.target[3].value
         let contraseña = evento.target[4].value
         let contraseñaRepetir = evento.target[5].value
         if (contraseña != contraseñaRepetir) {
            MySwal.fire({
               title: 'ERROR',
               text: 'Las contraseñas deben ser idénticas',
               icon: 'error',
               confirmButtonText: 'OK'
            })
         }
         if (nameUser == "" || Email == "" || name == "" || apellido == "" || contraseña == "" || contraseñaRepetir == "") {
            MySwal.fire({
               title: 'ERROR',
               text: 'Debes completar los datos',
               icon: 'error',
               confirmButtonText: 'OK'
            })
         }
         else {
            actions.signup(nameUser, Email, name, apellido, contraseña)
            alert("registro completado")
            setTimeout(() => {
               if (store.email != '') {
                  MySwal.fire({
                     title: 'FELICIDADES',
                     text: 'El registro a sido completado',
                     icon: 'success',
                     confirmButtonText: 'OK'
                  })
                  navigate("/login")
               }
            }, 2000)
         }

      }
      }>
         <div className="container contenedor-principal"  >
            <div className="card carta-contenedora" >

               <div className="card-body ">
                  <h2 className="card-title" style={{ marginBottom: "3rem" }}>Registrar Nuevo Usuario</h2>
                  <div className="container d-flex">
                     <div className="form-group ">
                        <input type="text" className="form-control mb-5  input-id" name="username" placeholder="Username" />

                     </div>
                     <div className="form-group ">
                        <input type="email" className="form-control mb-5 input-nombre"
                           name="email" placeholder="Email" />
                     </div>
                  </div>
                  <div className="container d-flex">
                     <div className="form-group ">
                        <input type="text" className="form-control mb-5 input-id" name="nombre" placeholder="Nombre" />
                     </div>
                     <div className="form-group ">
                        <input type="text" className="form-control mb-5 input-nombre" name="apellido" placeholder="Respuesta Secreta" />

                     </div>
                  </div>
                  <div className="container d-flex">
                     <div className="form-group ">
                        <input type="password" className="form-control mb-5 input-id" name="contraseña" id="inputPassword" placeholder="Contraseña" onChange={(evento) => {
                           setPass(evento.target.value)
                        }} />
                     </div>
                     <div className="form-group ">
                        <input type="password" className="form-control mb-5 input-nombre" name="repetirContraseña" id="inputPassword" placeholder="Repetir Contraseña" />
                     </div>
                  </div>
                  <br />
                  <button href="#"
                     type="submit" className="btn btn-primary text-center" style={{ width: '277px', height: '71px', background: '#A8BA92', opacity: 0.66, boxShadow: '10px 10px 20px rgba(0, 0, 0, 0.2)', borderRadius: '20px', left: '605px', top: '675px', lineHeight: '60px' }} value="Registrarse"><h3>Registrarse</h3></button>
                  <br />
                  Ya tienes cuenta ?<Link to={props.ruta}><button type="button" className="btn btn-link mb-1">Inicia sesión aquí</button></Link>

               </div>
            </div>
         </div>
      </form>
   )
}

export default SignUpForm;