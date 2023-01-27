import React from "react";

export const RecuperarContrasena = () =>{

    return (
        <div className="container text-center d-flex justify-content-center" >
            <div className="card mx-auto" style={{backgroundColor: " #C3D9C8",width: "44.75rem", height:"25.25rem", marginTop:"5rem"}}>

                <div className="card-body">
                    <h1 className="card-title" style={{marginBottom:"3rem"}}>Olvidaste tu contraseña?</h1>
                    <div className="form-group">
                        <input type="text" className="form-control mb-5"  style={{width: '548px', height: '71px', background: '#FFFFFF', opacity: '0.66', borderRadius: '20px',margin:"0 auto"}} placeholder="Ingresa Tu Correo"/>
                    </div>
                    <br/>
                    <a href="#" className="btn btn-primary text-center" style={{width: '277px',height: '71px',background: '#A8BA92',opacity: 0.66,boxShadow: '10px 10px 20px rgba(0, 0, 0, 0.2)',borderRadius: '20px',left: '605px',top: '675px',lineHeight: '60px'}}>Recuperar contraseña</a>
                    <br/>

                </div>
            </div>
        </div>
    )
    } 