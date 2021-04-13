import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import './InterfacePodcasts.css'

const InterfacePodcasts = () => {
  const [listPodcasts, setListPodcasts] = useState([])

  useEffect(() => {
    axios
      .get('http://localhost:4242/api/podcasts_articles/podcast')
      .then(res => {
        setListPodcasts(res.data)
      })
  }, [])

  return (
    <div className='interface-podcasts'>
      <div className='interface-podcasts-container'>
        <div className='interface-podcasts-btn-container'>
          <div className='add-article-btn'>
            <Link to='/admin/podcasts/add'>Ajouter un podcast</Link>
          </div>
          <div>
            <Link to='/admin/podcasts/categorie'>
              Modifier / Voir les categories
            </Link>
          </div>
        </div>
        {listPodcasts ? (
          listPodcasts.map((art, i) => {
            return (
              <div key={i} className='art-card'>
                <h1>{art.title}</h1>
                <Link to={`/admin/podcasts/${art.id}`}>
                  <button>En savoir plus</button>
                </Link>
              </div>
            )
          })
        ) : (
          <p>Aucun podcast trouvé</p>
        )}
      </div>
    </div>
  )
}

export default InterfacePodcasts
