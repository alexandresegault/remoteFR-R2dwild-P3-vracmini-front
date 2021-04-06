import React from 'react'

import fb from '../img/logofb.png'
import twitter from '../img/twitter.png'
import instagram from '../img/insta.png'
import './Logo.css'

const Logo = () => {
  const urlFacebook = 'http://www.facebook.com'
  const urlTwitter = ''
  const urlInstagram = ''

  return (
    <div className='logos'>
      <a href={urlFacebook} target='blank'>
        <img className='logo' src={fb} alt='facebook' />
      </a>
      <a href={urlTwitter} target='blank'>
        <img className='logo' src={twitter} alt='twitter' />
      </a>
      <a href={urlInstagram} target='blank'>
        <img className='logo' src={instagram} alt='instagram' />
      </a>
    </div>
  )
}

export default Logo
