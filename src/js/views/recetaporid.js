import React, { useContext, useEffect} from 'react'
import { RecetaPorIdCard } from '../component/cards'
import { Context } from '../store/appContext';

export const RecetaPorId = () => {
    const { store, actions } = useContext(Context);
    //const receta = store.datosReceta;
    //const foto = receta.strMealThumb;
    //const instrucciones = receta.strInstructions;
    //const nombre = receta.strMeal;
        
      
    
    return (
        <div className='container'>
            <RecetaPorIdCard />
        </div>
    )
}
