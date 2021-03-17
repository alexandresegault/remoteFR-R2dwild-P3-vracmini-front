import { Switch, Route } from 'react-router-dom'
import './AdminInterfaceAccueil.css'
import MenuInterface from './MenuInterface'
import InterfacePages from './InterfacePages'
import InterfaceArticles from './InterfaceArticles'
import InterfacePodcasts from './InterfacePodcasts'
import InterfaceRecipes from './InterfaceRecipes'
import InterfaceAliments from './InterfaceAliments'
const AdminInterfaceAccueil = () => {
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

export default AdminInterfaceAccueil
