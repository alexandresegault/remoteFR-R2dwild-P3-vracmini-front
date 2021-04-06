import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import axios from 'axios'
import ApiKey from './ApiKey'
import { Editor } from '@tinymce/tinymce-react'

import './RecipesDetail.css'

const RecipesDetail = prevProps => {
  const [recipe, setRecipe] = useState('')
  const [name, setName] = useState('')
  const [step, setStep] = useState('')
  const [cookTime, setCookTime] = useState('')
  const [ingredients, setIngredients] = useState('')
  const [nbrPerson, setNbrPerson] = useState('')

  // Function Tiny ///
  const handleEditorChangeStep = e => {
    setStep(e.target.getContent())
  }
  const handleEditorChangeIngredients = e => {
    setIngredients(e.target.getContent())
  }

  useEffect(() => {
    axios
      .get(
        `http://localhost:4242/api/aux_fourneaux/recipes/${prevProps.match.params.id}`
      )
      .then(res => setRecipe(res.data[0]))
  }, [])

  const updateName = () => {
    const finalName = {
      title: name
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
          placeholder={recipe.title}
          onChange={event => setName(event.target.value)}
        />
        <button className='update-btn' type='submit'>
          Modifier
        </button>
      </form>
      <form onSubmit={updateStep}>
        <label>Etapes : </label>
        <Editor
          apiKey={ApiKey}
          onChange={handleEditorChangeStep}
          id='tinyStep'
          init={{
            height: 200,
            initialValue: `${recipe.step}`,
            menubar: true,
            quickbars_image_toolbar:
              'alignleft aligncenter alignright | rotateleft rotateright | imageoptions',
            plugins: [
              'advlist autolink lists link image',
              'charmap print preview anchor help',
              'searchreplace visualblocks code',
              'a_tinymce_plugin',
              'insertdatetime media table paste wordcount'
            ],
            toolbar:
              'undo redo | formatselect | bold italic | \
              alignleft aligncenter alignright | \
              bullist numlist outdent indent | help'
          }}
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
        <div className='editor'>
          <Editor
            apiKey={ApiKey}
            onChange={handleEditorChangeIngredients}
            value={recipe.ingredients}
            initialValue={recipe.ingredients}
            id='tinyContent'
            init={{
              height: 200,
              menubar: true,
              quickbars_image_toolbar:
                'alignleft aligncenter alignright | rotateleft rotateright | imageoptions',
              plugins: [
                'advlist autolink lists link image',
                'charmap print preview anchor help',
                'searchreplace visualblocks code',
                'a_tinymce_plugin',
                'insertdatetime media table paste wordcount'
              ],
              toolbar:
                'undo redo | formatselect | bold italic | \
              alignleft aligncenter alignright | \
              bullist numlist outdent indent | help'
            }}
          />
        </div>
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
