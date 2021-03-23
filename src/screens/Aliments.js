import { useState, useEffect } from 'react'
import axios from 'axios'
import './Aliments.css'

const Aliments = () => {
  const [legumin, setLegumin] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  useEffect(() => {
    axios
      .get(
        'http://localhost:4242/api/aux_fourneaux/categorie_aliments/aliments/?categories_aliments_id=1'
      )
      .then(response => setLegumin(response.data))
      .then(res => setIsLoading(true))
  }, [])

  return (
    <div>
      {isLoading ? (
        <div className='all-aliments'>
          {legumin.map(alim => (
            <div className='card-ingredient'>
              <h2 className='name-ingredient'>{alim.name}</h2>
              <h3 className='title-ingredient'>{alim.title}</h3>
              <p className='description-aliment'>{alim.content}</p>
            </div>
          ))}
        </div>
      ) : (
        <div> En chargement </div>
      )}
    </div>
  )
}

export default Aliments
