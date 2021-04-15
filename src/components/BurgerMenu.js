import { NavLink, Link } from 'react-router-dom'

import './BurgerMenu.css'
import imgWoman from '../img/personnage1Reduit.png'

const BurgerMenu = prevProps => {
  return (
    <div className='menu-burger-content'>
      <div id='menu-page' className={prevProps.burgerContent}>
        <div className='menu-global'>
          <img className='woman-burger' src={imgWoman} alt='femme' />
          <ul className='menu-list'>
            <li className='menu-link'>
              <NavLink
                to='/'
                activeClassName='active-burger-link'
                onClick={prevProps.handleClickBurger}
              >
                L'histoire... EN VRAC
              </NavLink>
            </li>
            <li className='menu-link'>
              <NavLink
                to='/'
                activeClassName='active-burger-link'
                onClick={prevProps.handleClickBurger}
              >
                Ensemble, VRAC'ONS!
              </NavLink>
            </li>
            <li className='menu-link'>
              <NavLink
                to='/aux_fourneaux'
                activeClassName='active-burger-link'
                onClick={prevProps.handleClickBurger}
              >
                Aux Fourneaux
              </NavLink>
            </li>
            <li className='menu-link'>
              <NavLink
                to='/vracnco'
                activeClassName='active-burger-link'
                onClick={prevProps.handleClickBurger}
              >
                VRAC'n Co
              </NavLink>
            </li>
            <li className='menu-link'>
              <NavLink
                to='/'
                activeClassName='active-burger-link'
                onClick={prevProps.handleClickBurger}
              >
                VRAC community
              </NavLink>
            </li>
            <li className='menu-link'>
              <NavLink
                to='/contact'
                activeClassName='active-burger-link'
                onClick={prevProps.handleClickBurger}
              >
                Contact
              </NavLink>
            </li>
            <li className='menu-link'>
              <NavLink
                to='/'
                activeClassName='active-link'
                onClick={prevProps.handleClickBurger}
              >
                E-shop
              </NavLink>
            </li>
          </ul>
        </div>
        <div className='buttons-users'>
          <Link to='' className='burger-inscription'>
            S'inscrire
          </Link>
          <NavLink
            onClick={prevProps.handleClickBurger}
            to='/login'
            className='burger-connexion'
          >
            Se connecter
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default BurgerMenu
