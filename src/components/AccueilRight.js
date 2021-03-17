import React from 'react'
import { Link } from 'react-router-dom'

import img from '../Photos/vracn co.png'
import img2 from '../Photos/au fourneaux.png'
import img3 from '../Photos/contact.png'

import './AccueilRight.css'

const AccueilRight = () => {
  return (
    <div className='accueil accueil right'>
      <div className='section-right vracn-co'>
        <img src={img} id='vrac' alt='liens' />
      </div>
      <div className='section-right aux-fourneaux'>
        <Link to='/aux_fourneaux'>
          <img src={img2} id='fourneaux' alt='liens' />
        </Link>
      </div>
      <div className='section-right contact'>
        <img src={img3} id='contact' alt='liens' />
      </div>
    </div>
  )
}

export default AccueilRight
