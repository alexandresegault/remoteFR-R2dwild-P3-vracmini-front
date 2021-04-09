/* eslint-disable react/no-unescaped-entities */
import { useState, useEffect } from 'react'
import axios from 'axios'
import './Recipes.css'

import recettes from '../img/livre-de-recettes.png'

const Recipes = prevProps => {
  const [recipes, setRecipes] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    axios
      .get(`http://localhost:4242/api/aux_fourneaux/recipes`)
      .then(response => setRecipes(response.data))
      .then(() => setIsLoading(true))
  }, [])

  return (
    <div>
      {isLoading ? (
        <div className='card-recipes'>
          {recipes.map((recipe, i) => (
            <div key={i}>
              <div className='container-title'>
                <h1 className='title-recipe'>{recipe.title}</h1>
                <img className='img-recipe' src={recipe.url_img} />
              </div>
              <div className='container-symbols'>
                <p>
                  <img className='symbol' src={recettes} alt={name} />
                  {`${recipe.person_nb} pers`}
                </p>
                <p>
                  <img className='symbol' src={recettes} alt={name} />
                  {`${recipe.cook_time} min`}
                </p>
                <img className='symbol' src={recettes} alt={name} />
              </div>
              <div className='container-recipes'>
                <h3>Il vous faut</h3>
                <p className='ingredients-recipes'>{recipe.ingredients}</p>
                <h3>Marche à suivre</h3>
                <p className='step-recipes'>{recipe.step}</p>
              </div>
              <p>Bon ap'</p>
              <div className='container-tips'>
                <div className='tips'>
                  <h3>Trucs et astuces</h3>
                  <p>{recipe.tips}</p>
                </div>
              </div>
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
