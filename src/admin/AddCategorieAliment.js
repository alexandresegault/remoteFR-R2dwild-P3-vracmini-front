import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import './AddCategorieAliment.css'

const AddCategorieAliment = () => {
  const [categorie, setCategorie] = useState('')
  const [id, setId] = useState('')
  const [newName, setNewName] = useState('')

  useEffect(() => {
    axios
      .get('http://localhost:4242/api/aux_fourneaux/categories_aliments')
      .then(res => setCategorie(res.data))
  }, [])
  return (
    <div className='categorie-aliments'>
      <button>
        <Link to='/admin/aliments'>Voir tout les aliments</Link>
      </button>
      <div className='all-categories'>
        {categorie.length !== 0 ? (
          categorie.map((cat, i) => (
            <div className='categorie-card' key={i}>
              <p>{cat.id}</p>
              <input
                defaultValue={cat.name}
                key={i}
                onMouseEnter={() => {
                  setId(cat.id)
                  console.log(id)
                }}
                onChange={e => setNewName(e.target.value)}
              />
              <button
                onClick={() => {
                  let finalName = {
                    name: newName
                  }
                  axios.put(
                    `http://localhost:4242/api/aux_fourneaux/categories_aliments/${id}`,
                    finalName
                  )
                }}
              >
                Modifier
              </button>
            </div>
          ))
        ) : (
          <p>Categories not found</p>
        )}
      </div>
    </div>
  )
}

export default AddCategorieAliment
