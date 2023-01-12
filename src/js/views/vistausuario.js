
import propTypes from 'prop-types'
import React from 'react'
import { CentralCard, DerechaCard, DestacadosCard, FotoCard } from '../component/cards'


export const VistaUsuario = (props) => {
    return (
        <div className='row container-fluid '>
            <h1>Vista del Usuario</h1>
            <div className='col-3 d-flex flex-column pt-5 '>
                <div className='mb-4'>
                    <FotoCard />
                </div>
                <div>
                    <DestacadosCard />
                </div>
            </div>
            <div className='col-6 d-flex justify-content-center pt-5' >
                <CentralCard />
            </div>
            <div className='col-3 d-flex justify-content-center pt-5'>
                <DerechaCard />
            </div>




        </div>
    )
}


VistaUsuario.propTypes = {
    props: propTypes.string
}
