import { Switch, Route } from 'react-router-dom'
import MenuInterface from './MenuInterface'
import InterfacePages from './InterfacePages'
import InterfaceArticles from './InterfaceArticles'
import InterfacePodcasts from './InterfacePodcasts'
import InterfaceRecipes from './InterfaceRecipes'
import InterfaceAliments from './InterfaceAliments'
import { useEffect } from 'react'
import './AdminInterfaceAccueil.css'
import PropTypes from 'prop-types'

const AdminInterfaceAccueil = prevProps => {
  useEffect(() => {
    prevProps.setDisplayHeader('none')
  })
  return (
    <div className='interface-accueil'>
      <MenuInterface />
      <Switch>
        <Route path='/admin/pages' component={InterfacePages} />

        <Route exact path='/admin/recipes' component={InterfaceRecipes} />
        <Route exact path='/admin/aliments' component={InterfaceAliments} />
        <Route exact path='/admin/podcasts' component={InterfacePodcasts} />
        <Route exact path='/admin/articles' component={InterfaceArticles} />
      </Switch>
    </div>
  )
}
AdminInterfaceAccueil.PropTypes = {
  setDisplayHeader: PropTypes.string.isRequired
}

export default AdminInterfaceAccueil
