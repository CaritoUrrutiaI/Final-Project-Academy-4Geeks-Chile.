
import React from 'react'
import '../../styles/cards.css'

export const CentralCard = () => {
    return (

        <div clasNameName="card w-100 cartas alturaMin" >
            <div clasNameName="card-body">
                <h3 clasNameName="card-title text-center">Actividades</h3>
                <p clasNameName="card-text ">Lista de actividades</p>
            </div>
        </div>

    )
}

export const FotoCard = () => {
    return (

        <div clasNameName="card w-100 cartas" >
            <img src="https://cdn-icons-png.flaticon.com/512/6073/6073873.png" clasNameName="card-img-top rounded-circle mx-auto position-absolute top-0 start-50 translate-middle imagenPerfil" alt="Imagen Perfil" />
            <div clasNameName="card-body pt-5 mt-5">
                <h5 clasNameName="card-title text-center">Nombre Usuario</h5>
                <p clasNameName="card-text text-center">Santiago, Chile</p>
            </div>
        </div>

    )

}


export const DestacadosCard = () => {
    return (
        <div clasNameName="card w-100 cartas alturaMin">
            <div clasNameName="card-body text-center">
                <h5 clasNameName="card-title">Destacados Usuario</h5>
                
            </div>
        </div>
    )


}

export const DerechaCard = () => {
    return (
        <div clasNameName="card w-100 cartas alturaMin">
            <div clasNameName="card-body text-center">
                <h5 clasNameName="card-title">Ventana Derecha</h5>
                
            </div>
        </div>
    )


}

export default function CardRecetas(){
    return <div className="cartaconimagen card m-5 w-25">
    <img src="https://www.cocinacaserayfacil.net/wp-content/uploads/2020/04/Recetas-de-comidas-para-ni%C3%B1os.jpg" className="fotolocation card-img-top p-2" alt="..."/>
    <div className="card-body">
      <h5 className="card-title"></h5>
      <p className="card-text"></p>
      <p className="card-text"></p>
      <div className='container-fluid'>
        <a href="#" className="btn btn-primary me-5">Go somewhere</a>
        <a href="#" className="btn btn-primary ms-3"><i class="fas fa-heart"></i></a>
      </div>
  </div>
  </div>
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