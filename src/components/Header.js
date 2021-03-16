import React from 'react'
import './Header.css'
import NavBar from '../components/NavBar'

import user from '../img/user.png'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div className='header'>
      <NavBar />
      <div>
        <Link to='/admin'>
          <img src={user} alt='connexion logo' />
        </Link>
      </div>
    </div>
  )
}
