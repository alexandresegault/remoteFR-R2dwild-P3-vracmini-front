import Header from './components/Header'
import AdminInterfaceAccueil from './admin/AdminInterfaceAccueil.js'
import { Switch, Route } from 'react-router-dom'
import { useState } from 'react'
import './App.css'

function App() {
  const [displayHeader, setDisplayHeader] = useState('')
  return (
    <div className='App'>
      {displayHeader === '' ? <Header /> : <div></div>}
      <Switch>
        <Route exact path='/' component={Header} />
        <Route path='/admin'>
          <AdminInterfaceAccueil setDisplayHeader={setDisplayHeader} />
        </Route>
      </Switch>
    </div>
  )
}

export default App
