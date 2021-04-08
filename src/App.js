import Vracnco from './screens/Vracnco'
import { useState } from 'react'
import { Switch, Route } from 'react-router-dom'

import AdminInterfaceHome from './admin/AdminInterfaceHome.js'
import Aliments from './screens/Aliments'
import AuxFourneaux from './screens/AuxFourneaux'
import Header from './components/Header'
import Home from './screens/Home'
import Recipes from './screens/Recipes'
import GuideQuantites from './screens/GuideQuantites'
import Conversion from './screens/Conversion'

import './App.css'
import Contact from './screens/Contact'

function App() {
  const [displayHeader, setDisplayHeader] = useState(true)

  return (
    <div className='App'>
      {displayHeader ? <Header /> : null}
      <Switch>
        <Route path='/vracnco' component={Vracnco} />
        <Route path='/vracnco/:id' component={Vracnco} />
        <Route exact path='/' component={Home} />
        <Route exact path='/aux_fourneaux' component={AuxFourneaux} />
        <Route
          path='/aux_fourneaux/curieux_aliments/:id'
          component={Aliments}
        />
        <Route path='/contact' component={Contact} />
        <Route path='/aux_fourneaux/recipes' component={Recipes} />
        <Route path='/aux_fourneaux/recipes/:id' component={Recipes} />
        <Route
          path='/aux_fourneaux/guide_quantites'
          component={GuideQuantites}
        />
        <Route path='/admin'>
          <AdminInterfaceHome setDisplayHeader={setDisplayHeader} />
        </Route>
        <Route
          path='/aux_fourneaux/tableau_de_conversion'
          component={Conversion}
        ></Route>
      </Switch>
    </div>
  )
}

export default App
