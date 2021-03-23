import { NavLink } from 'react-router-dom'

import './BurgerMenu.css'

const BurgerMenu = prevProps => {
  return (
    <div className='menu-burger-content'>
      <div id='menu-page' className={prevProps.burgerContent}>
        <ul className='menu-list'>
          <li>
            <NavLink
              to='/'
              className=''
              activeClassName=''
              onClick={prevProps.handleClickBurger}
            >
              L'histoire en Vrac
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/'
              className=''
              activeClassName=''
              onClick={prevProps.handleClickBurger}
            >
              Vrac'n Co
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/aux_fourneaux'
              className=''
              activeClassName=''
              onClick={prevProps.handleClickBurger}
            >
              Aux Fourneaux
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/'
              className=''
              activeClassName=''
              onClick={prevProps.handleClickBurger}
            >
              4
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/'
              className=''
              activeClassName=''
              onClick={prevProps.handleClickBurger}
            >
              5
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default BurgerMenu
