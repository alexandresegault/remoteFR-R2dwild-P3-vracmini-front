import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import './InterfaceRecipes.css'

const InterfaceRecipes = () => {
  const [allRecipes, setAllRecipes] = useState('')
  useEffect(() => {
    axios.get('http://localhost:4242/api/aux_fourneaux/recipes').then(res => {
      setAllRecipes(res.data)
      console.log(allRecipes)
    })
  }, [])
  const updateRecipe = () => {
    console.log('updateRecipe')
  }
  const deleteRecipe = () => {
    console.log('deleteRecipe')
  }
  return (
    <div className='interface-recipes'>
      <div className='btn-container'>
        <div className='add-btn'>
          <Link to='/admin/recipes/add'>Ajouter une recette</Link>
        </div>
        <div className='add-btn'>
          <Link to='/admin/recipes/add_categorie'>
            Ajouter / Modifier / Supprimer une categorie
          </Link>
        </div>
      </div>
      <div className='recipes-container'>
        {allRecipes ? (
          allRecipes.length !== 0 ? (
            allRecipes.map((recipe, i) => (
              <div key={i} className='recipe-card'>
                <p key={i}>{recipe.name}</p>
                <button onClick={updateRecipe}>Modifier</button>
                <button onClick={deleteRecipe}>Supprimer</button>
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

export default InterfaceRecipes
