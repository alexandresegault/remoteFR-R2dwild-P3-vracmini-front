import AuxFourneaux from './screens/AuxFourneaux'
import Accueil from './screens/Accueil'
import Header from './components/Header'
import AdminInterfaceAccueil from './admin/AdminInterfaceAccueil.js'
import { Switch, Route } from 'react-router-dom'
import { useState } from 'react'
import './App.css'

function App() {
  const [displayHeader, setDisplayHeader] = useState(true)
  return (
    <div className='App'>
      {displayHeader ? <Header /> : <div></div>}
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
