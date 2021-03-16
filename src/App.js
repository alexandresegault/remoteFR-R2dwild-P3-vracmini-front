import Header from './components/Header'
import AdminInterfaceAccueil from './admin/AdminInterfaceAccueil.js'
import { Switch, Route } from 'react-router-dom'

import './App.css'

function App() {
  return (
    <div className='App'>
      <Switch>
        <Route exact path='/' component={Header} />
        <Route path='/admin' component={AdminInterfaceAccueil} />
      </Switch>
    </div>
  )
}

export default App
