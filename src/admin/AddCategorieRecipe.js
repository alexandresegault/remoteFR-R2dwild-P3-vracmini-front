import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import './AddCategorieRecipe.css'

const AddCategorieRecipe = () => {
  const [categorie, setCategorie] = useState('')
  const [id, setId] = useState('')
  const [name, setName] = useState('')
  const [newName, setNewName] = useState('')

  const addCategorie = () => {
    const finalCategorie = {
      name: name
    }
    axios.post(
      'http://localhost:4242/api/aux_fourneaux/categories_recipes',
      finalCategorie
    )
  }

  useEffect(() => {
    axios
      .get('http://localhost:4242/api/aux_fourneaux/categories_recipes')
      .then(res => setCategorie(res.data))
  }, [])
  return (
    <div className='categorie-recipes'>
      <button>
        <Link to='/admin/recipes'>Voir toute les recettes</Link>
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
                    `http://localhost:4242/api/aux_fourneaux/categories_recipes/${id}`,
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

export default AddCategorieRecipe
