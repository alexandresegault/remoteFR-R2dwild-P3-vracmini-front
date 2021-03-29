import { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import './InterfaceAddRecipes.css'

const InterfaceAddRecipes = () => {
  const [name, setName] = useState('')
  const [step, setStep] = useState('')
  const [cookTime, setCookTime] = useState('')
  const [ingredients, setIngredients] = useState('')
  const [nbrPerson, setNbrPerson] = useState('')
  const [categorie, setCategorie] = useState('')

  const addRecipe = () => {
    const finalRecipe = {
      name: name,
      step: step,
      cook_time: cookTime,
      ingredients: ingredients,
      person_nb: nbrPerson,
      categorie_recipes_id: 1
    }
    axios.post('http://localhost:4242/api/aux_fourneaux/recipes', finalRecipe)
  }

  return (
    <div>
      <form onSubmit={addRecipe} id='add-recipes'>
        <label>Nom de la recette : </label>
        <input
          type='text'
          id='name-recipe-input'
          name='name'
          onChange={event => setName(event.target.value)}
        />
        <label>Etapes : </label>
        <textarea
          type='text'
          id='step-recipe-input'
          name='step'
          onChange={event => setStep(event.target.value)}
        />
        <label>Temps préparation : </label>
        <input
          type='text'
          id='cook-time-recipe-input'
          name='cook-time'
          onChange={event => setCookTime(event.target.value)}
        />
        <label>Ingredients : </label>
        <textarea
          type='text'
          id='ingredients-recipe-input'
          name='cook-time'
          onChange={event => setIngredients(event.target.value)}
        />
        <label>Nbr de personnes : </label>
        <input
          type='text'
          id='ingredients-recipe-input'
          name='cook-time'
          onChange={event => setNbrPerson(event.target.value)}
        />
        <label>Categorie de la recette : </label>
        <select>
          <option>Ok</option>
          <option>Bpu</option>
        </select>
        <div classNme='btn-container'>
          <button type='submit'>Ajouter la recette</button>
          <button>
            <Link to='/admin/recipes'>Voir toute les recettes</Link>
          </button>
        </div>
      </form>
    </div>
  )
}

export default InterfaceAddRecipes
