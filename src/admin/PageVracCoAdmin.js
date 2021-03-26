import { useState, useEffect } from 'react'
// import { Editor } from '@tinymce/tinymce-react'
// import ApiKey from './ApiKey'

import axios from 'axios'

import './PageVracCoAdmin.css'

const PageVracCoAdmin = () => {
  const [vracCo, setVracCo] = useState('')
  const [imgUrl, setImgUrl] = useState('')
  const [content, setContent] = useState('')
  // const [contentVracCo, setContentVracCo] = useState('')
  const [title, setTitle] = useState('')

  useEffect(() => {
    axios.get('http://localhost:4242/api/vracn_co').then(response => {
      setVracCo(response.data[0])
    })
  }, [])

  const handleChangeTitle = event => {
    event.preventDefault()
    const finalTitle = {
      name: title
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
      img_url: imgUrl
    }
    axios.put(`http://localhost:4242/api/vracn_co/${vracCo.id}`, finalImg)
  }

  // ***FONCTION TINY NICO***

  // const handleEditorChange = e => {
  //   setContentVracCo(e.target.getContent())
  //   console.log(contentVracCo)
  // }
  return (
    <div className='content-page-vrac-co'>
      <form onSubmit={handleChangeTitle}>
        <label>Titre de la Page : </label>
        <input
          type='text'
          id='title-page-input'
          name='title'
          placeholder={vracCo.name}
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
          placeholder={vracCo.img_url}
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

{
  /* <Editor
  apiKey={ApiKey}
  onChange={handleEditorChange}
  id='thisContent'
  init={{
    height: 500,
    placeholder: `${vracCo.content}`,
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
/> */
}
