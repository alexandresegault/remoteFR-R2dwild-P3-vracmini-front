import { NavLink } from 'react-router-dom'
import './MenuInterface.css'

const MenuInterface = () => {
  return (
    <div className='menu-interface'>
      <ul>
        <li>
          <NavLink
            to='/admin/pages'
            className='nav-admin'
            activeClassName='nav-admin-selected'
          >
            Pages
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/admin/recipes'
            className='nav-admin'
            activeClassName='nav-admin-selected'
          >
            Recettes
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/admin/aliments'
            className='nav-admin'
            activeClassName='nav-admin-selected'
          >
            Aliments
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/admin/articles'
            className='nav-admin'
            activeClassName='nav-admin-selected'
          >
            Articles
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/admin/podcasts'
            className='nav-admin'
            activeClassName='nav-admin-selected'
          >
            Podcasts
          </NavLink>
        </li>
      </ul>
    </div>
  )
}

export default MenuInterface
