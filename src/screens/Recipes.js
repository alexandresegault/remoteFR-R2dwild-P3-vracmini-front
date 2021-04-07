/* eslint-disable react/jsx-key */
import { useState, useEffect } from 'react'
import axios from 'axios'
import './Recipes.css'

import recettes from '../img/livre-de-recettes.png'

const Recipes = () => {
  const [recipes, setRecipes] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    axios
      .get(`http://localhost:4242/api/aux_fourneaux/recipes`)
      .then(response => setRecipes(response.data))
      .then(res => setIsLoading(true))
  }, [])

  return (
    <div>
      {isLoading ? (
        <div className='card-recipes'>
          {recipes.map(recipe => (
            <div className='card-container'>
              <div className='card-header'>
                <div className='container-title'>
                  <h1 className='title-recipe'>{recipe.title}</h1>
                  <div className='caracteristics'>
                    <p>
                      <img className='symbol' src={recettes} alt={name} />
                      {`${recipe.person_nb} pers`}
                    </p>
                    <p>
                      <img className='symbol' src={recettes} alt={name} />
                      {recipe.cook_time}
                    </p>
                    <p>
                      <img className='symbol' src={recettes} alt={name} />
                      {recipe.cook_time}
                    </p>
                  </div>
                </div>
                <div>
                  <img className='img-recipe' src={recipe.url_img} />
                </div>
              </div>
              <div className='container-recipes'>
                <div className='ingredients-recipes'>
                  <h3>Il vous faut</h3>
                  <p>{recipe.ingredients}</p>
                </div>
                <div className='tips'>
                  <h3>Trucs et astuces</h3>
                  <p>{recipe.tips}</p>
                </div>
              </div>
              <h3>Marche à suivre</h3>
              <p className='step-recipes'>{recipe.step}</p>
              <p>Bon ap'</p>
              <div className='container-tips'></div>
            </div>
          ))}
        </div>
      ) : (
        <div> En chargement </div>
      )}
    </div>
  )
}

export default Recipes
