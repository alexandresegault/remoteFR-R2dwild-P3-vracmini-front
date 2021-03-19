import { useEffect } from 'react'
import { Switch, Route } from 'react-router-dom'
import InterfaceAliments from './InterfaceAliments'
import InterfaceArticles from './InterfaceArticles'
import InterfacePages from './InterfacePages'
import InterfacePodcasts from './InterfacePodcasts'
import InterfaceRecipes from './InterfaceRecipes'
import MenuInterface from './MenuInterface'
import './AdminInterfaceHome.css'

const AdminInterfaceHome = prevProps => {
  useEffect(() => {
    prevProps.setDisplayHeader(false)
  }, [])
  return (
    <div className='interface-home'>
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

export default AdminInterfaceHome
