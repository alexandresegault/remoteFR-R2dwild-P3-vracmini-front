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
  useEffect(() => {
    axios
      .get('http://localhost:4242/api/categorie_podcast_article')
      .then(res => setCategories(res.data))
  }, [])
  useEffect(() => {
    axios
      .get(
        'http://localhost:4242/api/categorie_podcast_article/podcasts_article'
      )
      .then(res => setList(res.data))
  })
  const activePodcast = () => {
    setActiveMediaType(1)
    setActiveCategorie('active')
  }
  const activeArticle = () => {
    setActiveMediaType(0)
    setActiveCategorie('active')

    console.log(list[1].isPodcast)
    console.log(list)
  }
  const getCategories = () => {
    return categories.map((categorie, index) => (
      <div
        onClick={() => {
          setActiveIndex(index)
          setActiveCategorie(categorie.name)
        }}
        key={index}
        className={activeIndex === index ? 'active-categorie' : 'categorie'}
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
      {activeCategorie !== 'none' || activeMediaType !== -1 ? (
        ''
      ) : (
        <div className='accueil'>
          <div className='title'>
            Montre moi ton assiette, je te dirais qui tu es
          </div>
          <img
            className='img-accueil'
            src='https://drive.google.com/uc?id=1jBYA77oYe_5inl3JzpNXHDMtD1KQS3hQ'
          ></img>
          <div className='texte-a'>
            Le vrac, oui, {"c'est"} un mode de consommation, mais pas que Le
            vrac va au delà, impliquant une certaine philosophie de
            vie:bien-être simplicité,santé, essentiel... Cela vous parle ? Comme
            tous sujets qui tiennent à coeur, nous voulons la meilleur
            information, qui est souvent la plus sumple et la plus efficace,sans
            fioriture, sans poudre au yeux
          </div>
          <div className='texte-b'>
            Des gestes simples à adopter, des conseils pour un quotidien plus
            doux, par ici! Nous avons solicité des experts autour de différentes
            thématiques, telles que la nutrition, le bien être ou encore le
            jardiange. Podcast, articles, venez découvrir les conseils de nos
            coach
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
      <div className='categories'>{getCategories()}</div>
      {activeCategorie !== 'none' || activeMediaType !== -1 ? (
        <div className='list'>{getList()}</div>
      ) : (
        ''
      )}
    </div>
  )
}
