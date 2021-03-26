import { NavLink, Link } from 'react-router-dom'

import './BurgerMenu.css'
// import imgEnVrac from '../img/histoireEnVrac.png'
// import imgVracons from '../img/ensembleVracons.png'
// import imgEshop from '../img/e-shop.png'
// import imgCommunity from '../img/vracCommunity.png'
// import imgVracNCo from '../img/vracNCo.png'
// import imgFourneaux from '../img/auFourneaux.png'
// import imgContact from '../img/contact.png'
import imgWoman from '../img/personnage1Reduit.png'

const BurgerMenu = prevProps => {
  return (
    <div className='menu-burger-content'>
      <div id='menu-page' className={prevProps.burgerContent}>
        <div className='menu-global'>
          <img className='woman-burger' src={imgWoman} alt='femme' />
          {/* <div className='menu-burger-link'>
          <img className='img-burger' src={imgEnVrac} alt='links' />
          <img className='img-burger' src={imgVracons} alt='links' />
          <Link to='/aux_fourneaux'>
            <img className='img-burger' src={imgFourneaux} alt='liens' />
          </Link>
          <img className='img-burger' src={imgVracNCo} alt='liens' />
          <img className='img-burger' src={imgContact} alt='liens' />
          <img className='img-burger' src={imgEshop} alt='links' />
          <img className='img-burger' src={imgCommunity} alt='links' />
        </div> */}
          <ul className='menu-list'>
            <li className='menu-link'>
              <NavLink
                to='/'
                activeClassName=''
                onClick={prevProps.handleClickBurger}
              >
                L'histoire... EN VRAC
              </NavLink>
            </li>
            <li className='menu-link'>
              <NavLink
                to='/'
                activeClassName=''
                onClick={prevProps.handleClickBurger}
              >
                Ensemble, VRAC'ONS!
              </NavLink>
            </li>
            <li className='menu-link'>
              <NavLink
                to='/aux_fourneaux'
                activeClassName=''
                onClick={prevProps.handleClickBurger}
              >
                Aux Fourneaux
              </NavLink>
            </li>
            <li className='menu-link'>
              <NavLink
                to='/'
                activeClassName=''
                onClick={prevProps.handleClickBurger}
              >
                VRAC'n Co
              </NavLink>
            </li>
            <li className='menu-link'>
              <NavLink
                to='/'
                activeClassName=''
                onClick={prevProps.handleClickBurger}
              >
                VRAC community
              </NavLink>
            </li>
            <li className='menu-link'>
              <NavLink
                to='/'
                activeClassName=''
                onClick={prevProps.handleClickBurger}
              >
                Contact
              </NavLink>
            </li>
            <li className='menu-link'>
              <NavLink
                to='/'
                activeClassName=''
                onClick={prevProps.handleClickBurger}
              >
                E-shop
              </NavLink>
            </li>
          </ul>
        </div>
        <div className='buttons-users'>
          <Link className='burger-inscription'>S'inscrire</Link>
          <Link className='burger-connexion'>Se connecter</Link>
        </div>
      </div>
    </div>
  )
}

export default BurgerMenu
