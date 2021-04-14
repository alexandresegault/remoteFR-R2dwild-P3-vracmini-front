import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import axios from 'axios'
import ApiKey from './ApiKey'
import { Editor } from '@tinymce/tinymce-react'

import './PodcastDetail.css'

const PodcastDetail = prevProps => {
  const [content, setContent] = useState('')
  const [title, setTitle] = useState('')
  const [urlImg, setUrlImg] = useState('')
  const [podcasts, setPodcasts] = useState('')
  const [podCategories, setPodCategories] = useState('')
  const [categorieList, setCategorieList] = useState('')
  const [deleted, setDeleted] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    axios.all[
      (axios
        .get(
          `http://localhost:4242/api/podcasts_articles/${prevProps.match.params.id}`
        )
        .then(res => {
          console.log(res.data)
          setPodcasts(res.data)
        }),
      axios
        .get('http://localhost:4242/api/categories_podcasts_articles/')
        .then(res => {
          console.log(res.data)
          setCategorieList(res.data)
        }),
      axios
        .get(
          `http://localhost:4242/api/podcasts_articles/join/${prevProps.match.params.id}`
        )
        .then(res => {
          setPodCategories(res.data)
        })
        .then(() => setIsLoading(false)))
    ]
  }, [])
  const handleEditorChangeContent = e => {
    setContent(e.target.getContent())
  }
  const deletePodcasts = () => {
    const validation = window.prompt('Tapez "Oui" pour confirmer')
    if (validation == 'Oui') {
      axios
        .delete(
          `http://localhost:4242/api/podcasts_articles/${prevProps.match.params.id}`
        )
        .then(setDeleted(true))
    }
  }
  const updatePodcasts = arg => {
    switch (arg) {
      case 'btn-modify-title':
        axios.put(
          `http://localhost:4242/api/podcasts_articles/${prevProps.match.params.id}`,
          { title: title }
        )
        break
      case 'btn-modify-content':
        axios.put(
          `http://localhost:4242/api/podcasts_articles/${prevProps.match.params.id}`,
          { content: content }
        )
        break
      case 'btn-modify-img':
        axios.put(
          `http://localhost:4242/api/podcasts_articles/${prevProps.match.params.id}`,
          { url_img: urlImg }
        )
        break
    }
  }
  return (
    <div className='modify-podcast-container'>
      <label>Title :</label>
      <input
        type='text'
        id='title-input'
        name='title'
        defaultValue={podcasts.title}
        onChange={event => setTitle(event.target.value)}
      />
      <button
        id='btn-modify-title'
        onClick={() => updatePodcasts('btn-modify-title')}
      >
        Modifer le titre
      </button>
      <label>Url Image :</label>
      <input
        type='text'
        id='urlimg-input'
        defaultValue={podcasts.url_img}
        name='urlimg'
        onChange={event => setUrlImg(event.target.value)}
      />
      <button
        id='btn-modify-img'
        onClick={() => updatePodcasts('btn-modify-img')}
      >
        Modifer l'image
      </button>
      <label>Contenu :</label>
      {podcasts.content ? (
        <Editor
          apiKey={ApiKey}
          initialValue={`${podcasts.content}`}
          onChange={handleEditorChangeContent}
          id='tinyContent'
          init={{
            height: 200,
            menubar: true,
            quickbars_image_toolbar:
              'alignleft aligncenter alignright | rotateleft rotateright | imageoptions',
            plugins: [
              'advlist autolink lists link image',
              'charmap print preview anchor help',
              'searchreplace visualblocks code',
              'a_tinymce_plugin',
              'insertdatetime media table paste wordcount'
            ],
            toolbar:
              'undo redo | formatselect | bold italic | \
              alignleft aligncenter alignright | \
              bullist numlist outdent indent | help'
          }}
        />
      ) : null}
      <button
        id='btn-modify-content'
        onClick={() => updatePodcasts('btn-modify-content')}
      >
        Modifer le contenu
      </button>
      <label>Categorie du podcasts :</label>
      <div className='check-categories'>
        {isLoading ? (
          <div> ...loading </div>
        ) : (
          categorieList.map((cat, i) => {
            return (
              <div key={i}>
                <input
                  id={cat.name}
                  defaultChecked={
                    podCategories.some(
                      elem => elem.categories_podcasts_articles_id === cat.id
                    )
                      ? true
                      : false
                  }
                  className='categorie-checkbox'
                  type='checkbox'
                  onChange={e => {
                    e.target.checked
                      ? axios.post(
                          'http://localhost:4242/api/podcasts_articles/join',
                          {
                            categories_podcasts_articles_id: cat.id,
                            podcasts_articles_id: prevProps.match.params.id
                          }
                        )
                      : axios.delete(
                          `http://localhost:4242/api/podcasts_articles/join/${prevProps.match.params.id}/${cat.id}`
                        )
                  }}
                />
                <label htmlFor={cat.name}>{cat.name}</label>
              </div>
            )
          })
        )}
      </div>
      <button>
        <Link to='/admin/podcasts'>Voir tout les podcasts</Link>
      </button>
      {deleted ? (
        <Link className='delete-btn' to='/admin/podcasts'>
          Supprimer l'podcasts
        </Link>
      ) : (
        <button onClick={deletePodcasts} className='delete-btn'>
          Supprimer l'podcasts
        </button>
      )}
    </div>
  )
}

export default PodcastDetail
