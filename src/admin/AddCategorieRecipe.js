import { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import './AddCategorieRecipe.css'

const AddCategorieRecipe = () => {
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
  return (
    <div className='add-categorie-recipes'>
      <form onSubmit={addCategorie}>
        <label>Nom de la categorie : </label>
        <input
          type='text'
          id='name-categorie-input'
          name='name'
          onChange={event => setName(event.target.value)}
        />
        <button type='submit'>Ajouter la recette</button>
        <button>
          <Link to='/admin/recipes'>Voir toute les recettes</Link>
        </button>
      </form>
    </div>
  )
}

export default AddCategorieRecipe
