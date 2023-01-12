
import propTypes from 'prop-types'
import React from 'react'
import { CentralCard, DerechaCard, DestacadosCard, FotoCard } from '../component/cards'


export const VistaUsuario = (props) => {
    return (
        <div className='row container-fluid pt-3'>
            <div className='col-3 d-flex flex-column pt-3 pb-3 mt-5'>
                <div className='mb-4'>
                    <FotoCard />
                </div>
                <div>
                    <DestacadosCard />
                </div>
            </div>
            <div className='col-6 d-flex justify-content-center pt-3 pb-3 mt-5' >
                <CentralCard />
            </div>
            <div className='col-3 d-flex justify-content-center pt-3 pb-3 mt-5'>
                <DerechaCard />
            </div>




        </div>
    )
}


VistaUsuario.propTypes = {
    props: propTypes.string
}
