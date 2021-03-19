import React, { useState } from 'react'

import logoMenuBurger from '../img/logoMenuBurger.svg'

import './BurgerMenu.css'

const BurgerMenu = () => {
  const [visible, setVisible] = useState(false)

  const handleClick = () => {
    setVisible(!visible)
  }

  return (
    <div>
      <div className='container-logo-burger-menu' onClick={handleClick}>
        <img className='logo-burger-menu' src={logoMenuBurger} />
      </div>

      <div className='burger-menu'>
        <nav className='navbar'>
          <div className={visible ? 'visible' : 'invisible'}>
            <div className='close-menu-burger' onClick={handleClick}>
              X
            </div>
            <ul className='navbar-ul-header'>
              <li>L'histoire en vrac</li>
              <li>Ensemble Vrac'ons</li>
              <li>Vrac'n co</li>
              <li>Aux fourneaux</li>
              <li>E-shop</li>
              <li>Vrac'o sensible community</li>
              <li>Contact</li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default BurgerMenu
