import React from 'react'
import './Header.css'
import Search from './Search'
import Burger_menu from './Burger_menu'
import user from '../img/userGreen.png'
import { Link } from 'react-router-dom'

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
      <Link to='/admin'>
        <img src={user} alt='' className='user-logo' />
      </Link>
    </div>
  )
}

export default Header
