import React from 'react'
import { SemanaCard } from '../component/cards'


export const TuSemana = () => {
  return (
    <div className='container mt-5 mb-5'>

        <h1 className="my-5 text-center">Tu Semana</h1>
        <SemanaCard/>
        <SemanaCard/>
        <SemanaCard/>
        <SemanaCard/>
        

    </div>
  )
}
