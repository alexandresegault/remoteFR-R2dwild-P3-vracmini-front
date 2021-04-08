/* eslint-disable react/jsx-key */
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import './Recipes.css'

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
    <div className='recipe-list'>
      {isLoading
        ? recipes.map((recipe, i) => (
            <div className='recipe-object' key={i}>
              <p>{recipe.title}</p>
              <img src={recipe.url_img} alt={`recette ${recipe.title}`} />
              <Link
                key={i}
                to={{
                  pathname: `/aux_fourneaux/recipes/detail/${recipe.id}`
                }}
              >
                En Savoir Plus
              </Link>
            </div>
          ))
        : null}
    </div>
  )
}
export default Recipes
