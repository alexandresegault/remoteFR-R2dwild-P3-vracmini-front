import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import './InterfaceArticles.css'

const InterfaceArticles = () => {
  const [listArticles, setListArticles] = useState([])

  useEffect(() => {
    axios
      .get('http://localhost:4242/api/podcasts_articles/article')
      .then(res => {
        setListArticles(res.data)
        console.log('premier' + res.data)
      })
  }, [])

  return (
    <div className='interface-articles'>
      <div className='interface-articles-container'>
        <div className='interface-articles-btn-container'>
          <div className='add-article-btn'>
            <Link to='/admin/articles/add'>Ajouter un article</Link>
          </div>
          <div>
            <Link to='/admin/articles/categorie'>
              Modifier / Voir les categories
            </Link>
          </div>
        </div>
        {listArticles ? (
          listArticles.map((art, i) => {
            return (
              <div key={i} className='art-card'>
                <h1>{art.title}</h1>
                <Link to={`/admin/articles/${art.id}`}>
                  <button>En savoir plus</button>
                </Link>
              </div>
            )
          })
        ) : (
          <p>Aucun article trouvé</p>
        )}
      </div>
    </div>
  )
}

export default InterfaceArticles
