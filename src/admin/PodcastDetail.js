import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import axios from 'axios'
import ApiKey from './ApiKey'
import { Editor } from '@tinymce/tinymce-react'

import './ArticlesDetail.css'

const PodcastDetail = prevProps => {
  const [content, setContent] = useState('')
  const [title, setTitle] = useState('')
  const [urlImg, setUrlImg] = useState('')
  const [podcast, setPodcast] = useState('')
  const [catPodcast, setCatPodcast] = useState('')
  const [categorieList, setCategorieList] = useState('')
  const [deleted, setDeleted] = useState(false)

  useEffect(() => {
    axios.all[
      (axios
        .get(
          `http://localhost:4242/api/podcasts_articles/${prevProps.match.params.id}`
        )
        .then(res => {
          console.log(res.data)
          setPodcast(res.data)
        }),
      axios
        .get('http://localhost:4242/api/categories_podcasts_articles/')
        .then(res => {
          console.log(res.data)
          setCategorieList(res.data)
        }))
    ]
  }, [])

  const handleEditorChangeContent = e => {
    setContent(e.target.getContent())
  }

  const deletePodcast = () => {
    const validation = window.prompt('Tapez "Oui" pour confirmer')
    if (validation == 'Oui') {
      axios
        .delete(
          `http://localhost:4242/api/podcasts_articles/${prevProps.match.params.id}`
        )
        .then(setDeleted(true))
    }
  }

  const updatePodcast = arg => {
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
      case 'btn-modify-cat':
        axios.put(
          `http://localhost:4242/api/podcasts_articles/join/${prevProps.match.params.id}`,
          {
            categories_podcasts_articles_id: catPodcast
          }
        )
        break
    }
  }

  return (
    <div className='update-podart-page'>
      <div className='update-podart-container'>
        <h1>Modifier le podcast</h1>
        <label>Title :</label>
        <input
          type='text'
          id='title-input'
          name='title'
          defaultValue={podcast.title}
          onChange={event => setTitle(event.target.value)}
        />
        <button
          id='btn-modify-title'
          className='update-podart-btn'
          onClick={() => updatePodcast('btn-modify-title')}
        >
          Modifer le titre
        </button>
        <label>Url Image :</label>
        <input
          type='text'
          id='urlimg-input'
          defaultValue={podcast.url_img}
          name='urlimg'
          onChange={event => setUrlImg(event.target.value)}
        />
        <button
          id='btn-modify-img'
          className='update-podart-btn'
          onClick={() => updatePodcast('btn-modify-img')}
        >
          Modifer l'image
        </button>
        <label>Contenu :</label>
        {podcast.content ? (
          <Editor
            apiKey={ApiKey}
            initialValue={`${podcast.content}`}
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
          className='update-podart-btn'
          onClick={() => updatePodcast('btn-modify-content')}
        >
          Modifer le contenu
        </button>
        <label>Categorie du Podcast :</label>
        <select onChange={event => setCatPodcast(Number(event.target.value))}>
          <option selected>Modifier catégorie : </option>
          {categorieList
            ? categorieList.map((cat, i) => (
                <option value={cat.id} key={i}>
                  {cat.name}
                </option>
              ))
            : null}
        </select>
        <button
          id='btn-modify-cat'
          className='update-podart-btn'
          onClick={() => updatePodcast('btn-modify-cat')}
        >
          Modifer la catégorie
        </button>
        <div className='update-podart-btn-container'>
          <button className='return-page-admin'>
            <Link to='/admin/podcasts'>Voir tout les Podcasts</Link>
          </button>
          {deleted ? (
            <Link className='delete-podart-btn' to='/admin/podcasts'>
              Supprimer le Podcast
            </Link>
          ) : (
            <button onClick={deletePodcast} className='delete-podart-btn'>
              Supprimer le Podcast
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default PodcastDetail
