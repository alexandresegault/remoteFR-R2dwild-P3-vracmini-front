import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import './InterfaceArticles.css'

const InterfaceArticles = () => {
  const [listPodart, setListPodart] = useState([])
  const [categoriePodart, setCategoriePodart] = useState([])

  useEffect(() => {
    axios.get('http://localhost:4242/api/podcasts_articles').then(res => {
      setListPodart(res.data)
      console.log('premier' + res.data)
    })
  }, [])
  useEffect(() => {
    axios
      .get('http://localhost:4242/api/categories_podcasts_articles')
      .then(res => {
        console.log('deuxieme' + res.data)
        setCategoriePodart(res.data)
      })
  }, [])
  return (
    <div className='interface-articles'>
      <div></div>
    </div>
  )
}

export default InterfaceArticles
