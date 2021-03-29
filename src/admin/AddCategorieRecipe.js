import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import './AddCategorieRecipe.css'

const AddCategorieRecipe = () => {
  const [categorie, setCategorie] = useState('')
  const [id, setId] = useState('')
  const [name, setName] = useState('')
  const addCategorie = () => {
    const finalCategorie = {
      name: name
    }
    axios.post(
      'http://localhost:4242/api/aux_fourneaux/categorie_recipes',
      finalCategorie
    )
  }

  useEffect(() => {
    axios
      .get('http://localhost:4242/api/aux_fourneaux/categorie_recipes')
      .then(res => setCategorie(res.data))
  }, [])
  return (
    <div className='categorie-recipes'>
      <div className='add-categorie-recipes'>
        <form onSubmit={addCategorie}>
          <label>Nom de la categorie : </label>
          <input
            type='text'
            id='name-categorie-input'
            name='name'
            onChange={event => setName(event.target.value)}
          />
          <div className='btn-recipes'>
            <button type='submit'>Ajouter la recette</button>
            <button>
              <Link to='/admin/recipes'>Voir toute les recettes</Link>
            </button>
          </div>
        </form>
      </div>
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
              />
              <div className='cat-card-btn'>
                <button>Modifier</button>
                <button>Supprimer</button>
              </div>
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
