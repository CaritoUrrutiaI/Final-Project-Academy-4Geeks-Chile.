
import React from 'react'

export const CentralCard = () => {
    return (

        <div className="card w-100">
            <div className="card-body">
                <h3 className="card-title text-center">Actividades</h3>
                <p className="card-text text-center">Lista de actividades</p>
            </div>
        </div>

    )
}

export const FotoCard = () => {
    return (

        <div className="card w-100">
            <img src="https://cdn-icons-png.flaticon.com/512/6073/6073873.png" className=" card-img-top rounded-circle mx-auto" style={{"max-width": "10em"}} alt="..." />
            <div className="card-body">
                <h5 className="card-title text-center">Nombre Usuario</h5>
                <p className="card-text text-center">Santiago, Chile</p>
            </div>
        </div>

    )

}


export const DestacadosCard = () => {
    return (
        <div className="card w-100 ">
            <div className="card-body text-center">
                <h5 className="card-title">Destacados Usuario</h5>
                
            </div>
        </div>
    )


}

export const DerechaCard = () => {
    return (
        <div className="card w-100">
            <div className="card-body text-center">
                <h5 className="card-title">Ventana Derecha</h5>
                
            </div>
        </div>
    )


}