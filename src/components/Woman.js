import React from 'react'
import { Link } from 'react-router-dom'
import './Woman.css'
import Img from '../Photos/Personnage.JPG'

const Woman = () => {
  return (
    <div className='woman'>
      <img src={Img} id='woman-accueil' alt='femme' />
    </div>
  )
}
export default Woman
