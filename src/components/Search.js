import React, { useState } from 'react'
import './Search.css'

const Search = () => {
  const [ask, setAsk] = useState('')
  const onSearch = e => {
    setAsk(e.target.value)
    console.log(ask)
  }
  return (
    <div className='container_search'>
      <label htmlFor='site-search'></label>
      <input type='search' id='site-search' name='searchBar' onChange={onSearch}></input>
      <button id='btnSend'>Send</button>
      
    </div>
  )
}
export default Search
