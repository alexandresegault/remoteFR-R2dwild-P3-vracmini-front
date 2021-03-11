import React from 'react'
import './AccueilLeft.css'
import Img from '../Photos/histoire en vrac.png'
import Img2 from '../Photos/ensemble vracons.png'
import Img3 from '../Photos/e-shop.png'
import Img4 from '../Photos/vrac community.png'

const AccueilLeft = () => {
  return (
    <div className='accueil accueil left'>
      <div className='section-left histoire-vrac'>
        <img src={Img} alt='liens' />
      </div>
      <div className='section-left ensemble-vracons'>
        <img src={Img2} alt='liens' />
      </div>
      <div className='section-left e-shop'>
        <img src={Img3} alt='liens' />
      </div>
      <div className='section-left vrac-community'>
        <img src={Img4} alt='liens' />
      </div>
    </div>
  )
}
export default AccueilLeft
