import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'

import Search from './Search'
import SearchMini from './SearchMini'
import LogoBurger from './LogoBurger'
import BurgerMenu from './BurgerMenu'

import user from '../img/userGreen.png'

import './Header.css'

const Header = () => {
  const [openBurger, setOpenBurger] = useState(false)
  const [burgerContent, setBurgerContent] = useState('hide')

  const handleChange = () => {
    if (openBurger === true) {
      setBurgerContent('visible-menu')
    } else if (burgerContent === 'hide') {
      return
    } else {
      setBurgerContent('invisible-menu')
    }
  }

  useEffect(() => {
    handleChange()
  }, [openBurger])

  const handleClick = () => {
    setOpenBurger(!openBurger)
  }

  return (
    <div className='header'>
      <div className='menu-container'>
        <BurgerMenu
          handleChange={handleChange}
          handleClick={handleClick}
          burgerContent={burgerContent}
        />
      </div>
      <div className='header-content'>
        <div className='search-content'>
          <div className='search-mini'>
            <SearchMini />
          </div>
          <div className='search-full-bar'>
            <Search />
          </div>
        </div>
        <div className='title-website'>
          <h1>
            <Link to='/'>
              <span className='yellow'>m</span>ini
              <span className='yellow'>m</span>
              al
            </Link>
          </h1>
        </div>
        <div className='content-burger-user'>
          <div id='logo-menu-burger'>
            <LogoBurger
              openBurger={openBurger}
              setOpenBurger={setOpenBurger}
              handleClick={handleClick}
            />
          </div>
          <Link to='/admin'>
            <img src={user} alt='' className='user-logo' />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Header
