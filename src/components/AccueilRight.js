import React from 'react'
import './AccueilRight.css'
import Img from '../Photos/vracn co.png'
import Img2 from '../Photos/au fourneaux.png'
import Img3 from '../Photos/contact.png'

const AccueilRight = () => {
  return (
    <div className='accueil accueil right'>
      <div className='section-right vracn-co'>
        <img src={Img} id='vrac' alt='liens' />
      </div>
      <div className='section-right aux-fourneaux'>
        <img src={Img2} id='fourneaux' alt='liens' />
      </div>
      <div className='section-right contact'>
        <img src={Img3} id='contact' alt='liens' />
      </div>
    </div>
  )
}

export default AccueilRight
