import { useState, useEffect } from 'react'
import axios from 'axios'
import './PageFourneauxAdmin.css'

const PageFourneauxAdmin = () => {
  const [fourneaux, setFourneaux] = useState('')
  const [imgUrl, setImgUrl] = useState('')
  const [content, setContent] = useState('')
  const [title, setTitle] = useState('')

  useEffect(() => {
    axios.get('http://localhost:4242/api/aux_fourneaux').then(response => {
      setFourneaux(response.data[0])
      console.log(fourneaux)
    })
  }, [])

  const handleChangeTitle = event => {
    event.preventDefault()
    const finalTitle = {
      title: title
    }
    axios.put(
      `http://localhost:4242/api/aux_fourneaux/${fourneaux.id}`,
      finalTitle
    )
  }
  const handleChangeContent = event => {
    event.preventDefault()
    const finalContent = {
      content: content
    }
    axios.put(
      `http://localhost:4242/api/aux_fourneaux/${fourneaux.id}`,
      finalContent
    )
  }
  const handleChangeImg = event => {
    event.preventDefault()
    const finalImg = {
      url_img: imgUrl
    }
    axios.put(
      `http://localhost:4242/api/aux_fourneaux/${fourneaux.id}`,
      finalImg
    )
  }
  return (
    <div className='content-page-fourneaux'>
      <form onSubmit={handleChangeTitle}>
        <label>Titre de la Page : </label>
        <input
          type='text'
          id='title-page-input'
          name='title'
          placeholder={fourneaux.title}
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
          placeholder={fourneaux.url_img}
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
          defaultValue={fourneaux.content}
          onChange={event => setContent(event.target.value)}
        />
        <button type='submit'>Modifier</button>
      </form>
    </div>
  )
}

export default PageFourneauxAdmin
