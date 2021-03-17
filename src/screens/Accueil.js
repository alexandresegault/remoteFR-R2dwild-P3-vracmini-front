import React from 'react'
import './Accueil.css'
import AccueilRight from '../components/AccueilRight'
import AccueilLeft from '../components/AccueilLeft'
import Woman from '../components/Woman'

const Accueil = () => {
  return (
    <div className='accueil-page'>
      <AccueilLeft />
      <Woman />
      <AccueilRight />
    </div>
  )
}

export default Accueil
