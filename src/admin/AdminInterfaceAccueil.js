import { Switch, Route } from 'react-router-dom'
import MenuInterface from './MenuInterface'
import InterfacePages from './InterfacePages'
import InterfaceArticles from './InterfaceArticles'
import InterfacePodcasts from './InterfacePodcasts'
import InterfaceRecipes from './InterfaceRecipes'
import InterfaceAliments from './InterfaceAliments'
import { useEffect } from 'react'
import './AdminInterfaceAccueil.css'

const AdminInterfaceAccueil = prevProps => {
  useEffect(() => {
    prevProps.setDisplayHeader(false)
  }, [])
  return (
    <div className='interface-accueil'>
      <MenuInterface setDisplayHeader={prevProps.setDisplayHeader} />
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

export default AdminInterfaceAccueil
