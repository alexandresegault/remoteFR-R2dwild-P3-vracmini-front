import React, { useState } from 'react'
import logo_menu_burger from '../img/logo_menu_burger.svg'
import './Burger_menu.css'

const Burger_menu = () => {
  const [visible, setVisible] = useState(false)

  const handleClick = () => {
    setVisible(!visible)
  }

  return (
    <div>
      <div className='container_logo_burger_menu' onClick={handleClick}>
        <img className='logo_burger_menu' src={logo_menu_burger} />
      </div>

      <div className='burger-menu'>
        <nav className='navbar'>
          <div className={visible ? 'visible' : 'invisible'}>
            <div className='close-menu-burger' onClick={handleClick}>
              X
            </div>
            <ul className='navbar_ul_header'>
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

export default Burger_menu
