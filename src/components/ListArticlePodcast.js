import React, { useState, useEffect } from 'react'
import './ListArticlePodcast.css'
import axios from 'axios'
import { NavLink } from 'react-router-dom'

export default function ListArticlePodcast() {
  const [categories, setCategorie] = useState([])
  const [showMediaType, setShowMediaType] = useState(false)
  const [activeIndex, setActiveIndex] = useState(-1)
  const [activeCategorie, setActiveCategorie] = useState('none')
  useEffect(() => {
    axios
      .get('http://localhost:4242/api/categorie_podcast_article')
      .then(res => setCategorie(res.data))
  }, [])
  const getCategories = () => {
    const mediaTypes = ['podcast', 'article et chroniques']
    return mediaTypes.map((mediaType, index) => {
      return (
        <li key={(mediaType, index)}>
          <p
            className='displayButton'
            onClick={() => {
              setShowMediaType(!showMediaType)
            }}
          >
            <strong>{mediaType}</strong>
          </p>
          <ul
            className={
              showMediaType === true ? 'visibleListCat' : 'invisibleListCat'
            }
          >
            {categories.map((cat, index) => {
              const currentCategorie = mediaType
              return (
                <NavLink
                  to={`/${currentCategorie}/:id`}
                  key={index}
                  className={`cat-${
                    currentCategorie + index === activeCategorie + activeIndex
                      ? 'active'
                      : 'inactive'
                  }`}
                  onClick={() => {
                    setActiveIndex(index)
                    setActiveCategorie(currentCategorie)
                  }}
                >
                  <li>{cat.name}</li>
                </NavLink>
              )
            })}
          </ul>
        </li>
      )
    })
  }
  return (
    <div className='listArticlePodcast'>
      <ul className='list'>
        <li className='title'>vrac n'co</li>
        {getCategories()}
      </ul>
    </div>
  )
}
