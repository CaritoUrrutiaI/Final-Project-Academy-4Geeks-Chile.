import React, { useContext, useEffect} from 'react'
import { RecetaPorIdCard } from '../component/cards'
import { Context } from '../store/appContext';

export const RecetaPorId = () => {

    return (
        <div className='container'>
            <RecetaPorIdCard />
        </div>
    )
}
