
import propTypes from 'prop-types'
import React from 'react'
import { CentralCard, DerechaCard, DestacadosCard, FotoCard } from '../component/cards'


export const VistaUsuario = (props) => {
    return (
        <div className='row container-fluid pt-5 pb-3 mx-auto mt-3 mb-2'>
            <div className='col-lg-3 col-sm-12 d-flex flex-column mt-4'>
                <div className='mb-4'>
                    <FotoCard />
                </div>
                <div>
                    <DestacadosCard />
                </div>
            </div>
            <div className='col-lg-6 col-sm-12 d-flex justify-content-center mt-4' >
                <CentralCard />
            </div>
            <div className='col-lg-3 col-sm-12 d-flex justify-content-center mt-4'>
                <DerechaCard />
            </div>
        </div>
    )
}


VistaUsuario.propTypes = {
    props: propTypes.string
}
