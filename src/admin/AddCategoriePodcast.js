import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import './AddCategorieArticle.css'

const AddCategoriePodcast = () => {
  const [listCategorie, setListCategorie] = useState('')
  const [newCategorie, setNewCategorie] = useState('')
  const [id, setId] = useState('')
  const [newName, setNewName] = useState('')

  useEffect(() => {
    axios
      .get('http://localhost:4242/api/categories_podcasts_articles')
      .then(res => setListCategorie(res.data))
  }, [])

  return (
    <div classsName='categorie-article-admin-page'>
      <div className='categorie-article-form-container'>
        <button>
          <Link to='/admin/articles'>Voir tout les articles</Link>
        </button>
        <form
          onSubmit={() => {
            axios.post(
              'http://localhost:4242/api/categories_podcasts_articles',
              { name: newCategorie }
            )
          }}
        >
          <input
            type='text'
            className='add-categorie-article'
            onChange={e => setNewCategorie(e.target.value)}
          />
          <button type='submit'>Ajouter Categorie</button>
        </form>
      </div>
      {listCategorie.length !== 0 ? (
        listCategorie.map((cat, i) => (
          <div className='categorie-card' key={i}>
            <p>{cat.id}</p>
            <input
              defaultValue={cat.name}
              key={i}
              onMouseEnter={() => {
                setId(cat.id)
              }}
              onChange={e => setNewName(e.target.value)}
            />
            <button
              onClick={() => {
                let finalName = {
                  name: newName
                }
                axios.put(
                  `http://localhost:4242/api/categories_podcasts_articles/${id}`,
                  finalName
                )
              }}
            >
              Modifier
            </button>
          </div>
        ))
      ) : (
        <p>Categories not found</p>
      )}
    </div>
  )
}

export default AddCategoriePodcast
