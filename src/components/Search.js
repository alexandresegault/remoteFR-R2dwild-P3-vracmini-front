import React, { useState } from 'react'
import search from '../img/logoSearch3.png'
import './Search.css'

const Search = () => {
  const [ask, setAsk] = useState('')
  const onSearch = e => {
    setAsk(e.target.value)
    console.log(ask)
  }
  return (
    <div className='container-search'>
      <label htmlFor='site-search'></label>
      <input
        type='search'
        id='site-search'
        name='searchBar'
        placeholder='Rechercher'
        onChange={onSearch}
      ></input>
      <button id='btnSend'>
        <img src={search} alt='rechercher' className='logo-search' />
      </button>
    </div>
  )
}
export default Search
