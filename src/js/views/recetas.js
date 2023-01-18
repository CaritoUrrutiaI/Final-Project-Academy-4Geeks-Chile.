import React from "react";
import { BuscadorRecetas } from "../component/buscarecetas";
import CardRecetas from "../component/cards";




export const Recetas = () => (
    <div className="container text-center">
        <h1 className="my-5">Recetas</h1>
        <BuscadorRecetas/>

        <div className="d-flex align-items-center m-1">
            <CardRecetas/>
            <CardRecetas/>
            <CardRecetas/>
            
        </div>

    </div>
    


);