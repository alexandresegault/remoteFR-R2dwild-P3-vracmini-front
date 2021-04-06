import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import './InterfaceAliments.css'

const InterfaceAliments = () => {
  const [allAliments, setAllAliments] = useState('')
  useEffect(() => {
    axios.get('http://localhost:4242/api/aux_fourneaux/aliments').then(res => {
      setAllAliments(res.data)
      console.log(allAliments)
    })
  }, [])

  return (
    <div className='interface-aliments'>
      <div className='btn-container'>
        <div className='add-btn'>
          <Link to='/admin/aliments/add'>Ajouter une recette</Link>
        </div>
        <div className='add-btn'>
          <Link to='/admin/aliments/add_categorie'>Modifier une categorie</Link>
        </div>
      </div>
      <div className='aliments-container'>
        {allAliments ? (
          allAliments.length !== 0 ? (
            allAliments.map((aliment, i) => (
              <div key={i} className='aliment-card'>
                <p key={i}>{aliment.name}</p>
                <div>
                  <Link to={`/admin/aliments/${aliment.id}`}>
                    Modifier / Supprimer
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <p>Loading</p>
          )
        ) : null}
      </div>
    </div>
  )
}

export default InterfaceAliments
