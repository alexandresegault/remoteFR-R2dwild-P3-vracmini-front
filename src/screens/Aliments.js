import { useState, useEffect } from 'react'
import axios from 'axios'
import './Aliments.css'

const Aliments = prevProps => {
  const [categoryAlim, setCategoryAlim] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    axios
      .get(
        `http://localhost:4242/api/aux_fourneaux/aliments/?categories_aliments_id=${prevProps.match.params.id}`
      )
      .then(response => setCategoryAlim(response.data))
      .then(() => setIsLoading(true))
  }, [])

  return (
    <div>
      {isLoading ? (
        <div className='all-aliments'>
          {categoryAlim.map((alim, i) => (
            <div key={i} className='card-ingredient'>
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
