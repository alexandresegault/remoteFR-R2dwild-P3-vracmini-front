import { useState } from 'react'
import { Switch, Route } from 'react-router-dom'

import Accueil from './screens/Accueil'
import AdminInterfaceAccueil from './admin/AdminInterfaceAccueil.js'
import AuxFourneaux from './screens/AuxFourneaux'
import Header from './components/Header'

import './App.css'

function App() {
  const [displayHeader, setDisplayHeader] = useState(true)
  return (
    <div className='App'>
      {displayHeader ? <Header /> : null}
      <Switch>
        <Route exact path='/' component={Accueil} />
        <Route path='/aux_fourneaux' component={AuxFourneaux} />
        <Route path='/admin'>
          <AdminInterfaceAccueil setDisplayHeader={setDisplayHeader} />
        </Route>
      </Switch>
    </div>
  )
}

export default App
