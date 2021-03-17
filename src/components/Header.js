import React from 'react'
import './Header.css'
import Search from './Search'
import Burger_menu from './Burger_menu'
import user from '../img/userGreen.png'

const Header = () => {
  return (
    <div className='header'>
      <div className='content-navbar'>
        <Search />
        <Burger_menu />
      </div>
      <h1 className='title-website'>
        <span className='yellow'>m</span>ini<span className='yellow'>m</span>al
      </h1>
      <img src={user} alt='' className='user-logo' />
    </div>
  )
}

export default Header
