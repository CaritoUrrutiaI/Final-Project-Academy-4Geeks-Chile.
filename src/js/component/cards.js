
import React from 'react'
import '../../styles/cards.css'

export const CentralCard = () => {
    return (

        <div className="card w-100 cartas alturaMin" >
            <div className="card-body">
                <h3 className="card-title text-center">Actividades</h3>
                <p className="card-text ">Lista de actividades</p>
            </div>
        </div>

    )
}

export const FotoCard = () => {
    return (

        <div className="card w-100 cartas" >
            <img src="https://cdn-icons-png.flaticon.com/512/6073/6073873.png" className="card-img-top rounded-circle mx-auto position-absolute top-0 start-50 translate-middle imagenPerfil" alt="Imagen Perfil" />
            <div className="card-body pt-5 mt-5">
                <h5 className="card-title text-center">Nombre Usuario</h5>
                <p className="card-text text-center">Santiago, Chile</p>
            </div>
        </div>

    )

}


export const DestacadosCard = () => {
    return (
        <div className="card w-100 cartas alturaMin">
            <div className="card-body text-center">
                <h5 className="card-title">Destacados Usuario</h5>
                
            </div>
        </div>
    )


}

export const DerechaCard = () => {
    return (
        <div className="card w-100 cartas alturaMin">
            <div className="card-body text-center">
                <h5 className="card-title">Ventana Derecha</h5>
                
            </div>
        </div>
    )


}