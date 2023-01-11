
import propTypes from 'prop-types'
import React from 'react'
import { CentralCard } from '../component/cards'


export const VistaUsuario = (props) => {
    return (
        <div className='row container-fluid'>
            <h1>Vista del Usuario</h1>
            <div className='col-4'>

            </div>
            <div className='col-4'>
            <CentralCard/>
            </div>
            <div className='col-4'>

            </div>




        </div>
    )
}


VistaUsuario.propTypes = {
    props: propTypes.string
}
