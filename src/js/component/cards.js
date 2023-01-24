
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

export const CardRecetas = ({ nombre, imagen, llave }) => {
    return (
        <div key={llave} className="card m-5 anchoMinRecetas cartas">
            <img src={imagen} className="card-img-top p-2" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{nombre}</h5>
                <p className="card-text"></p>
                <p className="card-text"></p>
                <div className='container-fluid'>
                    <p className="card-text text-center">Santiago, Chile</p>
                    <a href="#" className="btn btn-primary ms-3"><i className="fas fa-heart"></i></a>
                </div>
            </div>
        </div>
    )
}

export const SemanaCard = () => {
    return (
        <div className="container d-flex mt-4 justify-content-center ">
            <img src="https://cdn-icons-png.flaticon.com/512/6073/6073873.png" className="card-img-top rounded-circle imagenSemana" alt="Imagen Perfil" />
            <div className="card ms-4 anchoMin cartas">
                <div className="card-header">
                    Titulo
                </div>
                <div className="card-body">
                    <blockquote className="blockquote mb-0">
                        <p>A well-known quote, contained in a blockquote element.</p>
                    </blockquote>
                </div>
            </div>
        </div>
    )
}