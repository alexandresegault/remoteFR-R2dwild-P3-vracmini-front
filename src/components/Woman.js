import React from 'react'

import img from '../Photos/Personnage-1-reduit.png'

import './Woman.css'

const Woman = () => {
  return (
    <div className='woman'>
      <img src={img} id='woman-accueil' alt='femme' />
    </div>
  )
}
export default Woman
