import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
const InterfaceRecipes = () => {
  const [allRecipes, setAllRecipes] = useState('')
  useEffect(() => {
    axios.get('http://localhost:4242/api/aux_fourneaux/recipes').then(res => {
      setAllRecipes(res.data)
      console.log(allRecipes)
    })
  }, [])

  return (
    <div className='interface-recipes'>
      <div className='add-btn'>
        <Link to='/admin/recipes/add'>Ajouter une recette</Link>
      </div>
    </div>
  )
}

export default InterfaceRecipes
