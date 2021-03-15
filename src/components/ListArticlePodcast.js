import React, { useState, useEffect } from 'react'
import './ListArticlePodcast.css'
import axios from 'axios'
import { NavLink } from 'react-router-dom'

export default function ListArticlePodcast() {
  const [categorie, setCategorie] = useState([])
  const [showPodcast, setShowPodcast] = useState(false)
  const [showArticle, setShowArticle] = useState(false)

  useEffect(() => {
    axios
      .get('http://localhost:4242/api/categorie_podcast_article')
      .then(res => setCategorie(res.data))
  }, [])
  return (
    <div className='listArticlePodcast'>
      <ul className='list'>
        <li className='title'>vrac n'co</li>
        <li>
          <p
            className='displayButton'
            onClick={() => {
              setShowPodcast(!showPodcast)
            }}
          >
            <strong>Podcast</strong>
          </p>
          <ul
            className={
              showPodcast === true ? 'visibleListCat' : 'invisibleListCat'
            }
          >
            {categorie.map((cat, index) => (
              <NavLink
                to='/Podcast/:id'
                activeClassName='activeCat'
                key={index}
                className='cat'
              >
                <li onClick={() => {}}>{cat.name}</li>
              </NavLink>
            ))}
          </ul>
        </li>
        <li>
          <strong>
            <p
              className='displayButton'
              onClick={() => {
                setShowArticle(!showArticle)
              }}
            >
              Articles et <br></br>
              chroniques
            </p>
          </strong>
          <ul
            className={
              showArticle === true ? 'visibleListCat' : 'invisibleListCat'
            }
          >
            {categorie.map((cat, index) => (
              <NavLink
                to='/Article/:id'
                activeClassName='activeCat'
                key={index}
                className='cat'
              >
                <li>{cat.name}</li>
              </NavLink>
            ))}
          </ul>
        </li>
      </ul>
    </div>
  )
}
