import React from 'react'
import { Link } from 'react-router-dom'
import Img from '../Photos/Personnage-1-reduit.png'
import './Woman.css'

const Woman = () => {
  return (
    <div className='woman'>
      <img src={Img} id='woman-accueil' alt='femme' />
    </div>
  )
}
export default Woman
