
import React, { useContext, useEffect } from 'react'
import '../../styles/cards.css'
import { Context } from '../store/appContext'
import '../../styles/cartadeportes.css'
import { Link, Navigate, useParams } from "react-router-dom";

export const CentralCard = () => {
    return (
        <div className="card w-100 cartas alturaMin" >
            <h3 className="card-title text-center">Actividades</h3>
            <h4 className="card-text ps-3">Lista de actividades</h4>

            <div className="card-body">

                <div className="card-body">
                    <div className='card-header d-flex justify-content-center'>
                        <h5>Deportes</h5>
                    </div>
                    <div className="cartadeportes d-flex justify-content-between">
                        <div>
                            <h5 className="card-title">Distancia: {localStorage.getItem("distancia")}</h5>
                            <h5 className="card-title">Tiempo: {localStorage.getItem("tiempo")}</h5>
                        </div>
                        <div className="me-5 mt-2 fs-2">
                            {localStorage.getItem("emoji")}
                        </div>
                    </div>
                </div>



            </div>
        </div>

    )
}

export const FotoCard = () => {
    const { store, actions } = useContext(Context);
    const dataUser = JSON.parse(localStorage.getItem("datauser"));
    return (

        <div className="card w-100 cartas" >
            <img src="https://cdn-icons-png.flaticon.com/512/6073/6073873.png" className="card-img-top rounded-circle mx-auto position-absolute top-0 start-50 translate-middle imagenPerfil" alt="Imagen Perfil" />
            <div className="card-body pt-5 mt-5">
                <h3 className="card-title text-center">{dataUser != null ? dataUser.info_user?.username.toUpperCase() : "Nombre de Usuario"}</h3>
                <h3 className="card-text text-center">{dataUser != null ? dataUser.info_user?.email : "Email"}</h3>
            </div>
        </div>

    )

}


export const DestacadosCard = () => {
    const { store, actions } = useContext(Context);
    return (
        <div className="card w-100 cartas alturaMin">
            <div className="card-body text-center">
                <h3 className="card-title">Tareas por hacer</h3>
                <form className='container-fluid d-flex justify-content-between mb-2' onSubmit={(e) => {
                    event.preventDefault();
                    //console.log(e.target[0].value);
                    actions.addTodo(e.target[0].value);
                    event.target[0].value = '';
                }}>
                    <input type="text" className="form-control" /> <button type='submit' className='btn ms-2'><i className="fas fa-marker"></i></button>
                </form>
                <ul className="list-group">
                    {store.todo != '' ? store.todo.map((elem, index) => {
                        return <li key={index} className="list-group-item  d-flex justify-content-between mb-1 backgroundAzul">{elem} <i className="fas fa-eraser iconos iconoPointer" onClick={() => {
                            actions.deleteTodo(elem)
                        }}></i></li>
                    })
                        : null
                    }
                </ul>
            </div>
        </div>
    )


}

export const DerechaCard = () => {
    const { store, actions } = useContext(Context);
    return (
        <div className="card w-100 cartas alturaMin">
            <div className="card-body text-center">
                <h3 className="card-title">Recetas Favoritas</h3>
                <ul className="list-group">
                    {store.recetasFav != '' ? store.recetasFav.map((elem, index) => {
                        return (<li key={index} className="list-group-item  d-flex justify-content-between mb-1 backgroundAzul">{elem} <i className="fas fa-eraser iconos iconoPointer" onClick={() => {
                            actions.deleteRecetasFav(elem)
                        }}></i> </li>)
                    })
                        : <li className="list-group-item ">Sin favoritos</li>}
                </ul>
            </div>
        </div>
    )


}

export const CardRecetas = ({ nombre, imagen, llave, id }) => {

    const { store, actions } = useContext(Context);
    const ruta = "/recetaporid/" + id
    return (
        <div key={llave} className="card m-5 anchoMinRecetas cartas">
            <img src={imagen} className="card-img-top p-1 pt-3" alt="..." />
            <div className="card-body">
                <h2 className="card-title">{nombre}</h2>
                <p className="card-text"></p>
                <p className="card-text"></p>
                <div className='container-fluid d-flex justify-content-between bd-highlight'>
                    <button className="btn btn-success ms-3 " onClick={() => {
                        actions.addRecetasFav(nombre)
                    }}>Agregar a Favoritos <i className="ms-1 fas fa-heart"></i></button>
                    <Link to={ruta}>
                        <button className="btn btn-success me-3" onClick={() => {
                            actions.getRecetaPorId(id)
                            //console.log(id)
                            //console.log(store.datosReceta)
                            //console.log(store.datosReceta[0].strInstructions)
                        }}>Descripción Receta</button>
                    </Link>
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

export const RecetaPorIdCard = () => {

    const { store, actions } = useContext(Context);
    let instrucciones = store.datosReceta[0].strInstructions;
    let foto = store.datosReceta[0].strMealThumb;
    let nombre = store.datosReceta[0].strMeal;
  
    return (
        <div className="card w-100 cartas alturaMin mt-5 mb-5">
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={foto ? foto : "Foto Receta"} className="img-fluid rounded-start " alt="..." />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h3 className="card-title">{nombre ? nombre : "Nombre de la Receta"}</h3>
                        <p className="card-text">{instrucciones ? instrucciones : "Descripcion de la Receta (ING)"}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}