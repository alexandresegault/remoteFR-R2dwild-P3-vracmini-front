import { useState } from 'react'

import search from '../img/logoSearch3.png'

import './Search.css'

const Search = () => {
  const [ask, setAsk] = useState('')
  const onSearch = e => {
    setAsk(e.target.value)
  }
  return (
    <div className='container-search'>
      <input
        type='search'
        id='site-search'
        name='searchBar'
        placeholder='Rechercher'
        onChange={onSearch}
      />
      <button id='btn-send'>
        <img src={search} alt='rechercher' className='logo-search' />
      </button>
    </div>
  )
}

export default Search
