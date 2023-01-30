import React, { useContext, useEffect} from 'react'
import { RecetaPorIdCard } from '../component/cards'
import { Context } from '../store/appContext';

export const RecetaPorId = () => {
    //const id = useParams();
    //const { store, actions } = useContext(Context);
    //actions.getRecetaPorId(id);
    return (
        <div className='container'>
            <RecetaPorIdCard />
        </div>
    )
}
