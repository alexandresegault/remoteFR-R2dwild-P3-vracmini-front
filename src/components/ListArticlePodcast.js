import React, { useState, useEffect } from 'react'
import './ListArticlePodcast.css'
import axios from 'axios'
import { NavLink } from 'react-router-dom'

export default function ListArticlePodcast() {
  const [categories, setCategories] = useState([])
  const [list, setList] = useState([])
  const [activeCategorie, setActiveCategorie] = useState('none')
  const [activeMediaType, setActiveMediaType] = useState('none')
  const [activeIndex, setActiveIndex] = useState(-1)
  useEffect(() => {
    axios
      .get('http://localhost:4242/api/categorie_podcast_article')
      .then(res => setCategories(res.data))
  }, [])
  // useEffect(() => {
  //   axios.get('').then(res => setList(res.data))
  // })
  const activePodcast = () => {
    setActiveMediaType('podcast')
  }
  const activeArticle = () => {
    setActiveMediaType('article')
  }
  const getCategories = () => {
    return categories.map((categorie, index) => (
      <NavLink
        onClick={() => {
          console.log(index)
          setActiveIndex(index)
          setActiveCategorie(categorie.name)
        }}
        to={`/${activeCategorie}/:id`}
        key={index}
        className={activeIndex === index ? 'active-categorie' : 'categorie'}
      >
        {categorie.name}
      </NavLink>
    ))
  }
  // const getArticlePodcast = () => {
  //   return list.map((e, index) => (
  //     <Link className key={index}>
  //       <img>{e.url_img}</img>
  //       <h1>{e.name}</h1>
  //     </Link>
  //   ))
  // }

  return (
    <div className='listArticlePodcast'>
      <div className='accueil'>
        <div className='title'>
          Montre moi ton assiette, je te dirais qui tu es
        </div>
        <img
          className='img-accueil'
          src='https://drive.google.com/uc?id=1jBYA77oYe_5inl3JzpNXHDMtD1KQS3hQ'
        ></img>
        <div className='texte-a'>
          Le vrac, oui, c'est un mode de consommation, mais pas que <br></br>
          Le vrac va au delà, impliquant une certaine philosophie de
          vie:bien-être simplicité,santé,<br></br>
          essentiel... <br></br>
          Cela vous parle ? <br></br>
          Comme tous sujets qui tiennent à coeur, nous voulons la meilleur
          information, qui est souvent la plus sumple et la plus efficace,sans
          fioriture, sans poudre au yeux
        </div>
        <div className='texte-b'>
          Des gestes simples à adopter, des conseils pour un quotidien plus
          doux, par ici!<br></br>
          Nous avons solicité des experts autour de différentes thématiques,
          telles que la <br></br>
          nutrition, le bien être ou encore le <br></br>
          jardiange.<br></br>
          Podcast, articles, venez découvrir les conseils de nos coach
        </div>
      </div>
      <div className='mediatype'>
        <div
          onClick={activePodcast}
          className={
            activeMediaType === 'podcast' ? 'active-podcast' : 'podcast'
          }
        >
          Podcasts
        </div>
        <div className='separate'></div>
        <div
          onClick={activeArticle}
          className={
            activeMediaType === 'article' ? 'active-article' : 'article'
          }
        >
          Articles
        </div>
      </div>
      <div className='categories'>{getCategories()}</div>
      <div className='list'></div>
    </div>
  )
}
