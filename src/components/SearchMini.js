import search from '../img/logoSearch3.png'

import './SearchMini.css'

const SearchMini = () => {
  return (
    <div className='search-mini'>
      <button id='btnSendMini'>
        <img src={search} alt='rechercher' className='logo-search' />
      </button>
    </div>
  )
}

export default SearchMini
