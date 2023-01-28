
import React, { useContext } from 'react'
import '../../styles/cards.css'
import { Context } from '../store/appContext'
import '../../styles/cartadeportes.css'

export const CentralCard = () => {
    return (
        <div className="card w-100 cartas alturaMin" >
            <h3 className="card-title text-center">Actividades</h3>
            <p className="card-text ">Lista de actividades</p>
            
            <div className="card-body">

            <div class="card-body">
            <div className='card-header d-flex justify-content-center'>
                <h5>Deportes</h5>
            </div>
            <div class="cartadeportes d-flex justify-content-between">
                <div>
                    <h5 class="card-title">Distancia: {localStorage.getItem("distancia")}</h5>
                    <h5 class="card-title">Tiempo: {localStorage.getItem("tiempo")}</h5>
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
                <h3 className="card-title text-center">{dataUser != null ? dataUser.info_user?.username.toUpperCase(): "Nombre de Usuario"}</h3>
                <h3 className="card-text text-center">{dataUser  != null ? dataUser.info_user?.email : "Email"}</h3>
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
                    <input type="text" className="form-control" /> <button type='submit' className='btn ms-2'><i class="fas fa-marker"></i></button>
                </form>
                <ul className="list-group">
                    {store.todo != '' ? store.todo.map((elem, index)=>{
                        return <li key={index} className="list-group-item list-group-item-info d-flex justify-content-between mb-1">{elem} <i className="fas fa-eraser iconos iconoPointer" onClick={() => {
                            actions.deleteTodo(elem)
                        }}></i></li>})
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
                        return (<li key={index} className="list-group-item list-group-item-info d-flex justify-content-between mb-1 ">{elem} <i className="fas fa-eraser iconos iconoPointer" onClick={() => {
                            actions.deleteRecetasFav(elem)
                        }}></i> </li>)
                    })
                        : <li className="list-group-item list-group-item-info">Sin favoritos</li>}
                </ul>
            </div>
        </div>
    )


}

export const CardRecetas = ({ nombre, imagen, llave }) => {

    const { store, actions } = useContext(Context);
    return (
        <div key={llave} className="card m-5 anchoMinRecetas cartas">
            <img src={imagen} className="card-img-top p-1 pt-3" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{nombre}</h5>
                <p className="card-text"></p>
                <p className="card-text"></p>
                <div className='container-fluid d-flex flex-column bd-highlight'>
                    <button className="btn btn-success ms-3 " onClick={() => {
                        actions.addRecetasFav(nombre)
                    }}><i className="fas fa-heart"></i></button>
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