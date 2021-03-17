import React from 'react'
import { Link } from 'react-router-dom'

import Img from '../Photos/histoire en vrac.png'
import Img2 from '../Photos/ensemble vracons.png'
import Img3 from '../Photos/e-shop.png'
import Img4 from '../Photos/vrac community.png'

import './AccueilLeft.css'

const AccueilLeft = () => {
  return (
    <div className='accueil accueil left'>
      <div className='section-left histoire-vrac'>
        <img src={Img} id='histoire' alt='liens' />
      </div>
      <div className='section-left ensemble-vracons'>
        <img src={Img2} id='ensemble' alt='liens' />
      </div>
      <div className='section-left e-shop'>
        <img src={Img3} id='shop' alt='liens' />
      </div>
      <div className='section-left vrac-community'>
        <img src={Img4} id='community' alt='liens' />
      </div>
    </div>
  )
}
export default AccueilLeft
