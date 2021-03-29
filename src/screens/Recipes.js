// import { useState, useEffect } from 'react'
// import axios from 'axios'
// import './Recipes.css'

// const Recipes = prevProps => {
//   const [recipes, setRecipes] = useState([])
//   const [isLoading, setIsLoading] = useState(false)

//   useEffect(() => {
//     axios
//       .get(
//         `http://localhost:4242/api/aux_fourneaux/categorie_recettes/recettes=${prevProps.match.params.id}`
//       )
//       .then(response => setRecipes(response.data))
//       .then(res => setIsLoading(true))
//   }, [])

//   return (
//     <div>
//       {isLoading ? (
//         <div className='all-recipes'>
//           {recipes.map(recipe => (
//             <div className='card-recipe'>
//               <h2 className='name-recipe'>{recipe.name}</h2>
//               <h3 className='title-recipe'>{recipe.title}</h3>
//               <p className='description-recipe'>{recipe.content}</p>
//             </div>
//           ))}
//         </div>
//       ) : (
//         <div> En développement </div>
//       )}
//     </div>
//   )
// }

// export default Recipes

import { useState, useEffect } from 'react'
import axios from 'axios'
import './Recipes.css'

import recettes from '../img/livre-de-recettes.png'

const Recipes = prevProps => {
  const [recipes, setRecipes] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    axios
      .get(
        `http://localhost:4242/api/aux_fourneaux/recipes=${prevProps.match.params.id}`
      )
      .then(response => setRecipes(response.data))
      .then(res => setIsLoading(true))
  }, [])

  return (
    <div>
      {isLoading ? (
        <div className='all-recipes'>
          {recipes.map(recipe => (
            <div className='card-recipe'>
              <h2 className='name-recipe'>{recipe.name}</h2>
              <div className='container-img'>
                <img src={recettes} />
                <p className='nb-person-recipes'>{recipe.person_nb}</p>
                <img src={recettes} />
                <p className='time-recipes'>{recipe.cook_time}</p>
                <img src={recettes} />
                <p className='img-vitality'>Vitalité</p>
              </div>
              <div className='container-recipes'>
                <h3>Il vous faut</h3>
                <p className='ingredients-recipes'>{recipe.ingredients}</p>
                <h3>Marche à suivre</h3>
                <p className='step-recipes'>{recipe.step}</p>
              </div>
              <p>Bon ap'</p>
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
