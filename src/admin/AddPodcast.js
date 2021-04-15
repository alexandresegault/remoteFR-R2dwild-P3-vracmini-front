import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import { Editor } from '@tinymce/tinymce-react'

import ApiKey from './ApiKey'
import './AddArticles.css'

const AddPodcast = () => {
  const [title, setTitle] = useState('')
  const [urlImg, setUrlImg] = useState('')
  const [content, setContent] = useState('')
  const [categorieList, setCategorieList] = useState('')
  const [catPodcast, setCatPodcast] = useState('')

  useEffect(() => {
    axios
      .get('http://localhost:4242/api/categories_podcasts_articles')
      .then(res => setCategorieList(res.data))
  }, [])

  const addPodcast = () => {
    let finalArticle = {
      title: title,
      url_img: urlImg,
      content: content,
      isPodcast: 1,
      categories_podcasts_articles_id: catPodcast
    }
    axios.post('http://localhost:4242/api/podcasts_articles', finalArticle)
  }

  const handleEditorChangeContent = e => {
    setContent(e.target.getContent())
  }

  return (
    <div className='add-podart-page'>
      <div className='add-podart-container'>
        <h1>Ajouter un Podcast</h1>
        <form onSubmit={addPodcast}>
          <label>Title :</label>
          <input
            type='text'
            id='title-input'
            name='title'
            onChange={event => setTitle(event.target.value)}
          />
          <label>Url Image :</label>
          <input
            type='text'
            id='urlimg-input'
            placeholder='http..'
            name='urlimg'
            onChange={event => setUrlImg(event.target.value)}
          />
          <label>Contenu :</label>
          <Editor
            apiKey={ApiKey}
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
          <label>Categorie du podcast : </label>
          <select onChange={event => setCatPodcast(Number(event.target.value))}>
            <option selected>Choisir une catégorie : </option>
            {categorieList
              ? categorieList.map((cat, i) => (
                  <option value={cat.id} key={i}>
                    {cat.name}
                  </option>
                ))
              : null}
          </select>
          <div className='podart-add-btn-container'>
            <button type='submit'>Ajouter Podcast</button>
            <button>
              <Link to='/admin/podcasts'>Voir tout les podcasts</Link>
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddPodcast
