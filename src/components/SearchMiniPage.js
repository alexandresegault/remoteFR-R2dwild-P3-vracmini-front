import search from '../img/logoSearch3.png'

import './SearchMiniPage.css'

const SearchMiniPage = prevProps => {
  return (
    <div id='search-page' className={prevProps.searchPage}>
      <div id='search-page-content'>
        <div id='close-search-page' onClick={prevProps.handleClickSearchMini}>
          <div className='close-bar1'></div>
          <div className='close-bar2'></div>
        </div>
        <div className='search-bar-container'>
          <input
            type='search'
            id='site-search'
            name='search-bar'
            placeholder='Rechercher'
          ></input>
          <button id='btn-send'>
            <img src={search} alt='rechercher' className='logo-search' />
          </button>
        </div>
      </div>
    </div>
  )
}

export default SearchMiniPage
