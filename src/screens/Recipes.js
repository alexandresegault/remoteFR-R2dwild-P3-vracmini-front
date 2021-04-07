/* eslint-disable react/jsx-key */
import { useState, useEffect } from 'react'
import axios from 'axios'
import './Recipes.css'

// import recettes from '../img/livre-de-recettes.png'

const Recipes = prevProps => {
  const [recipes, setRecipes] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    axios
      .get(
        `http://localhost:4242/api/aux_fourneaux/recipes?categories_recipes_id=${prevProps.match.params.id}`
      )
      .then(res => setRecipes(res.data))
      .then(() => setIsLoading(true))
  }, [])
  return (
    <div>
      {isLoading
        ? recipes.map((recipe, i) => (
            <div className='recipe-card' key={i}>
              <p>{recipe.title}</p>
            </div>
          ))
        : null}
    </div>
  )
}
export default Recipes
