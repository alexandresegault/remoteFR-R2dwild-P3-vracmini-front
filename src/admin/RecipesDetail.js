import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import './RecipesDetail.css'

const RecipesDetail = prevProps => {
  const [recipe, setRecipe] = useState('')
  const [name, setName] = useState('')
  const [step, setStep] = useState('')
  const [cookTime, setCookTime] = useState('')
  const [ingredients, setIngredients] = useState('')
  const [nbrPerson, setNbrPerson] = useState('')
  useEffect(() => {
    axios
      .get(
        `http://localhost:4242/api/aux_fourneaux/recipes/${prevProps.match.params.id}`
      )
      .then(res => setRecipe(res.data[0]))
  }, [])

  const updateName = () => {
    const finalName = {
      name: name
    }
    axios.put(
      `http://localhost:4242/api/aux_fourneaux/recipes/${prevProps.match.params.id}`,
      finalName
    )
  }
  const updateStep = () => {
    const finalStep = {
      step: step
    }
    axios.put(
      `http://localhost:4242/api/aux_fourneaux/recipes/${prevProps.match.params.id}`,
      finalStep
    )
  }
  const updateCookTime = () => {
    const finalCookTime = {
      cook_time: cookTime
    }
    axios.put(
      `http://localhost:4242/api/aux_fourneaux/recipes/${prevProps.match.params.id}`,
      finalCookTime
    )
  }
  const updateIngredients = () => {
    const finalIngredients = {
      ingredients: ingredients
    }
    axios.put(
      `http://localhost:4242/api/aux_fourneaux/recipes/${prevProps.match.params.id}`,
      finalIngredients
    )
  }
  const updateNbrPerson = () => {
    const finalNbrPerson = {
      person_nb: nbrPerson
    }
    axios.put(
      `http://localhost:4242/api/aux_fourneaux/recipes/${prevProps.match.params.id}`,
      finalNbrPerson
    )
  }
  return (
    <div className='update-recipe'>
      <form onSubmit={updateName}>
        <label>Nom de la recette : </label>
        <input
          type='text'
          id='name-recipe-input'
          name='name'
          placeholder={recipe.name}
          onChange={event => setName(event.target.value)}
        />
        <button className='update-btn' type='submit'>
          Modifier
        </button>
      </form>
      <form onSubmit={updateStep}>
        <label>Etapes : </label>
        <textarea
          type='text'
          id='step-recipe-input'
          name='step'
          defaultValue={recipe.step}
          onChange={event => setStep(event.target.value)}
        />
        <button className='update-btn' type='submit'>
          Modifier
        </button>
      </form>
      <form onSubmit={updateCookTime}>
        <label>Temps préparation : </label>
        <input
          type='text'
          id='cook-time-recipe-input'
          name='cook-time'
          placeholder={recipe.cook_time}
          onChange={event => setCookTime(event.target.value)}
        />
        <button className='update-btn' type='submit'>
          Modifier
        </button>
      </form>
      <form onSubmit={updateIngredients}>
        <label>Ingredients : </label>
        <textarea
          type='text'
          id='ingredients-recipe-input'
          name='cook-time'
          defaultValue={recipe.ingredients}
          onChange={event => setIngredients(event.target.value)}
        />
        <button className='update-btn' type='submit'>
          Modifier
        </button>
      </form>
      <form onSubmit={updateNbrPerson}>
        <label>Nbr de personnes : </label>
        <input
          type='text'
          id='ingredients-recipe-input'
          name='cook-time'
          placeholder={recipe.person_nb}
          onChange={event => setNbrPerson(event.target.value)}
        />
        <button className='update-btn' type='submit'>
          Modifier
        </button>
      </form>
      <div classNme='btn-container'>
        <button className='back-page'>
          <Link to='/admin/recipes'>Voir toute les recettes</Link>
        </button>
      </div>
    </div>
  )
}

export default RecipesDetail
