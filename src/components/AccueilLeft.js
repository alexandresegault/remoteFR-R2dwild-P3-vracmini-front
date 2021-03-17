import React from 'react'

import img from '../Photos/histoire en vrac.png'
import img2 from '../Photos/ensemble vracons.png'
import img3 from '../Photos/e-shop.png'
import img4 from '../Photos/vrac community.png'

import './AccueilLeft.css'

const AccueilLeft = () => {
  return (
    <div className='accueil accueil left'>
      <div className='section-left histoire-vrac'>
        <img src={img} id='histoire' alt='liens' />
      </div>
      <div className='section-left ensemble-vracons'>
        <img src={img2} id='ensemble' alt='liens' />
      </div>
      <div className='section-left e-shop'>
        <img src={img3} id='shop' alt='liens' />
      </div>
      <div className='section-left vrac-community'>
        <img src={img4} id='community' alt='liens' />
      </div>
    </div>
  )
}
export default AccueilLeft
