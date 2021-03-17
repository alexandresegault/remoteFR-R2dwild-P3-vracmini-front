import React from 'react'

import AccueilRight from '../components/AccueilRight'
import AccueilLeft from '../components/AccueilLeft'
import Woman from '../components/Woman'

import './Accueil.css'

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
