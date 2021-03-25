import { useEffect, useState } from 'react'
import { Switch, Route } from 'react-router-dom'

import AdminInterfaceHome from './admin/AdminInterfaceHome.js'
import AuxFourneaux from './screens/AuxFourneaux'
import Header from './components/Header'
import Home from './screens/Home'

import './App.css'

function App() {
  const [displayHeader, setDisplayHeader] = useState(true)

  return (
    <div className='App'>
      {displayHeader ? <Header /> : null}
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/aux_fourneaux' component={AuxFourneaux} />
        <Route path='/admin'>
          <AdminInterfaceHome setDisplayHeader={setDisplayHeader} />
        </Route>
      </Switch>
    </div>
  )
}

export default App
