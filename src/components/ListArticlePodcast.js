import React, { useState, useEffect } from 'react'
import './ListArticlePodcast.css'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default function ListArticlePodcast() {
  const [categories, setCategories] = useState([])
  const [list, setList] = useState([])
  const [activeCategorie, setActiveCategorie] = useState('none')
  const [activeMediaType, setActiveMediaType] = useState(-1)
  const [activeIndex, setActiveIndex] = useState(-1)
  const [vracnCo, setVracnCo] = useState([])

  useEffect(() => {
    axios
      .get('http://localhost:4242/api/vracn_co')
      .then(res => setVracnCo(res.data))
  }, [])
  console.log(vracnCo)
  useEffect(() => {
    axios
      .get('http://localhost:4242/api/categories_podcasts_articles')
      .then(res => setCategories(res.data))
  }, [])
  useEffect(() => {
    axios
      .get(
        `http://localhost:4242/api/podcasts_articles/`
      )
      .then(res => setList(res.data))
  }, [])
  const activePodcast = () => {
    setActiveMediaType(1)
  }
  const activeArticle = () => {
    setActiveMediaType(0)
  }
  const getCategories = () => {
    return categories.map((categorie, index) => (
      <div
        onClick={() => {
          setActiveIndex(index)
          setActiveCategorie(categorie.id)
        }}
        key={index}
        className={activeIndex === index ? 'active-categorie-vracnco' : 'categorie-vracnco'}
      >
        {categorie.name}
      </div>
    ))
  }
  const getList = () => {
    return list
      .filter(e => e.isPodcast === activeMediaType)
      .map((e, index) => (
        <Link
          className='list-element'
          to={`/articles_podcasts/:${e.id}`}
          key={index}
        >
          <div>
            <img className='elem-image'>{e.url_img}</img>
            <h1>{e.name}</h1>
            <p>{e.content}</p>
          </div>
        </Link>
      ))
  }

  return (
    <div className='listArticlePodcast'>
      {activeMediaType !== -1 ? (
        ''
      ) : (
        <div className='accueil-vracnco'>
          <div className='title-vracnco'>
            {vracnCo[0].title}
          </div>
          <img
            className='img-accueil'
            src={vracnCo[0].url_img}
          ></img>
          <div className='texte-a'>
           {vracnCo[0].content}
          </div>
        </div>
      )}
      <div className='mediatype'>
        <div
          onClick={activePodcast}
          className={activeMediaType === 1 ? 'active-podcast' : 'podcast'}
        >
          Podcasts
        </div>
        <div className='separate'></div>
        <div
          onClick={activeArticle}
          className={activeMediaType === 0 ? 'active-article' : 'article'}
        >
          Articles
        </div>
      </div>
      <div className={activeMediaType === -1 ? 'inactive-categories-vracno':'categories-vracnco'}>{getCategories()}</div>
      {activeCategorie !== 'none' || activeMediaType !== -1 ? (
        <div className='list'>{getList()}</div>
      ) : (
        ''
      )}
    </div>
  )
}
