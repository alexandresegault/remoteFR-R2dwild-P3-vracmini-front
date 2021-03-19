import React from 'react'

import img from '../img/histoireEnVrac.png'
import img2 from '../img/ensembleVracons.png'
import img3 from '../img/e-shop.png'
import img4 from '../img/vracCommunity.png'

import './HomeLeft.css'

const HomeLeft = () => {
  return (
    <div className='home home left'>
      <div className='section-left histoire-vrac'>
        <img src={img} id='history' alt='links' />
      </div>
      <div className='section-left ensemble-vracons'>
        <img src={img2} id='ensemble' alt='links' />
      </div>
      <div className='section-left e-shop'>
        <img src={img3} id='shop' alt='links' />
      </div>
      <div className='section-left vrac-community'>
        <img src={img4} id='community' alt='links' />
      </div>
    </div>
  )
}
export default HomeLeft
