import React, { useState } from 'react'

const Search = () => {
  const [ask, setAsk] = useState('')
  const onSearch = e => {
    setAsk(e.target.value)
  }
  return (
    <div className='container_search'>
      <label htmlFor='site-search'></label>
      <input type='search' id='site-search' name='searchBar'></input>
      <button>Send</button>
    </div>
  )
}
export default Search
