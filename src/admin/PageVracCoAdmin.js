import { useState, useEffect } from 'react'
// import { Editor } from '@tinymce/tinymce-react'
// import ApiKey from './ApiKey'

import axios from 'axios'

import './PageVracCoAdmin.css'

const PageVracCoAdmin = () => {
  const [vracCo, setVracCo] = useState('')
  const [imgUrl, setImgUrl] = useState('')
  const [content, setContent] = useState('')
  const [title, setTitle] = useState('')

  useEffect(() => {
    axios.get('http://localhost:4242/api/vracn_co').then(response => {
      setVracCo(response.data[0])
    })
  }, [])

  const handleChangeTitle = event => {
    event.preventDefault()
    const finalTitle = {
      title: title
    }
    axios.put(`http://localhost:4242/api/vracn_co/${vracCo.id}`, finalTitle)
  }
  const handleChangeContent = event => {
    event.preventDefault()
    const finalContent = {
      content: content
    }
    axios.put(`http://localhost:4242/api/vracn_co/${vracCo.id}`, finalContent)
  }
  const handleChangeImg = event => {
    event.preventDefault()
    const finalImg = {
      url_img: imgUrl
    }
    axios.put(`http://localhost:4242/api/vracn_co/${vracCo.id}`, finalImg)
  }

  return (
    <div className='content-page-vrac-co'>
      <form onSubmit={handleChangeTitle}>
        <label>Titre de la Page : </label>
        <input
          type='text'
          id='title-page-input'
          name='title'
          placeholder={vracCo.title}
          onChange={event => setTitle(event.target.value)}
        />
        <button type='submit'>Modifier</button>
      </form>
      <form onSubmit={handleChangeImg}>
        <label>Url Image : </label>
        <input
          type='text'
          id='img-url-input'
          name='url_img'
          placeholder={vracCo.url_img}
          onChange={event => setImgUrl(event.target.value)}
        />
        <button type='submit'>Modifier</button>
      </form>
      <form onSubmit={handleChangeContent}>
        <label>Bloc Introduction : </label>
        <textarea
          type='text'
          id='content-input'
          name='content'
          defaultValue={vracCo.content}
          onChange={event => setContent(event.target.value)}
        />
        <button type='submit'>Modifier</button>
      </form>
    </div>
  )
}

export default PageVracCoAdmin
