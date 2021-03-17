import React from 'react'
import { Link } from 'react-router-dom'

import Search from './Search'
import BurgerMenu from './BurgerMenu'

import user from '../img/userGreen.png'

import './Header.css'

const Header = () => {
  return (
    <div className='header'>
      <div className='content-navbar'>
        <Search />
        <BurgerMenu />
      </div>
      <h1 className='title-website'>
        <Link to='/'>
          <span className='yellow'>m</span>ini<span className='yellow'>m</span>
          al
        </Link>
      </h1>
      <Link to='/admin'>
        <img src={user} alt='' className='user-logo' />
      </Link>
    </div>
  )
}

export default Header
