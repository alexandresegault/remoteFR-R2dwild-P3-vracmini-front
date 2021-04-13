/* eslint-disable react/no-unescaped-entities */
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import axios from 'axios'
import ApiKey from './ApiKey'
import { Editor } from '@tinymce/tinymce-react'

import './ArticlesDetail.css'
const ArticlesDetail = prevProps => {
  const [content, setContent] = useState('')
  const [title, setTitle] = useState('')
  const [urlImg, setUrlImg] = useState('')
  const [article, setArticle] = useState('')
  const [catArticle, setCatArticle] = useState('')
  const [categorieList, setCategorieList] = useState('')

  useEffect(() => {
    axios.all[
      (axios
        .get(
          `http://localhost:4242/api/podcasts_articles/${prevProps.match.params.id}`
        )
        .then(res => {
          console.log(res.data)
          setArticle(res.data)
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
  const updateArticle = arg => {
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
            categories_podcasts_articles_id: catArticle
          }
        )
        break
    }
  }
  return (
    <div className='add-articles-container'>
      <label>Title :</label>
      <input
        type='text'
        id='title-input'
        name='title'
        defaultValue={article.title}
        onChange={event => setTitle(event.target.value)}
      />
      <button
        id='btn-modify-title'
        onClick={() => updateArticle('btn-modify-title')}
      >
        Modifer le titre
      </button>
      <label>Url Image :</label>
      <input
        type='text'
        id='urlimg-input'
        defaultValue={article.url_img}
        name='urlimg'
        onChange={event => setUrlImg(event.target.value)}
      />
      <button
        id='btn-modify-img'
        onClick={() => updateArticle('btn-modify-img')}
      >
        Modifer l'image
      </button>
      <label>Contenu :</label>
      {article.content ? (
        <Editor
          apiKey={ApiKey}
          initialValue={`${article.content}`}
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
        onClick={() => updateArticle('btn-modify-content')}
      >
        Modifer le contenu
      </button>
      <label>Categorie de l'article :</label>
      <select onChange={event => setCatArticle(Number(event.target.value))}>
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
        onClick={() => updateArticle('btn-modify-cat')}
      >
        Modifer la catégorie
      </button>
      <button>
        <Link to='/admin/articles'>Voir tout les articles</Link>
      </button>
    </div>
  )
}

export default ArticlesDetail
