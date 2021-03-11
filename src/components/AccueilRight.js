import React from 'react'
import './AccueilRight.css'
import Img from '../Photos/vracn co.png'
import Img2 from '../Photos/au fourneaux.png'
import Img3 from '../Photos/contact.png'

const AccueilRight = () => {
  return (
    <div className='accueil accueil right'>
      <div className='section-right vracn-co'>
        <img src={Img} alt='liens' />
      </div>
      <div className='section-right e-shop'>
        <img src={Img2} alt='liens' />
      </div>
      <div className='section-right contact'>
        <img src={Img3} alt='liens' />
      </div>
    </div>
  )
}

export default AccueilRight
