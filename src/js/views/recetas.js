import React, { useContext, useEffect } from "react";
import { CardRecetas } from "../component/cards";
import { Context } from "../store/appContext";




export const Recetas = () => {
    const { store, actions } = useContext(Context)

    return (
        <div className="container text-center mb-5 mx-auto">
            <h1 className="my-5"><b>RECETAS SALUDABLES</b></h1>
            <div className="container-fluid d-flex justify-content-center row ">
                {store.recetas.map((elem, index) => {
                    return <CardRecetas nombre={elem.strMeal} imagen={elem.strMealThumb} key={index} id={elem.idMeal}/>

                })}
            </div>


        </div>



    )
};