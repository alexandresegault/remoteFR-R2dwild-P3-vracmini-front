import './InterfaceAddRecipes.css'
import { useState } from 'react'

const InterfaceAddRecipes = () => {
  const [name, setName] = useState('')
  const [step, setStep] = useState('')
  const [cookTime, setCookTime] = useState('')
  const [ingredients, setIngredients] = useState('')
  const [nbrPerson, setNbrPerson] = useState('')
  const [categorie, setCategorie] = useState('')

  return (
    <div className='interface-add-recipes'>
      <div></div>
    </div>
  )
}

export default InterfaceAddRecipes
