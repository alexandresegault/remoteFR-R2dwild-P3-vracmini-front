import { useState, useEffect } from 'react'
import { Editor } from '@tinymce/tinymce-react'
import ApiKey from './ApiKey'

import axios from 'axios'

import './PageVracCoAdmin.css'

const PageVracCoAdmin = () => {
  const [vracCo, setVracCo] = useState('')
  const [contentVracCo, setContentVracCo] = useState('')
  useEffect(() => {
    axios
      .get('http://localhost:4242/api/vracn_co')
      .then(response => setVracCo(response.data))
  }, [])
  const handleEditorChange = e => {
    setContentVracCo(e.target.getContent())
  }
  const { content } = vracCo
  return (
    <div className='page-vrac-co-admin'>
      <div className='content-page-vrac-co'>
        <div className='title-page'>
          <form>
            <label>Titre de la Page : </label>
            <input
              type='text'
              id='title-page-input'
              name='title'
              placeholder={vracCo.name}
            />
          </form>
        </div>
        <div className='img-page'>
          <form>
            <label>Url Image : </label>
            <input
              type='text'
              id='img-url-input'
              name='title'
              placeholder={vracCo.img_url}
            />
          </form>
        </div>
        <Editor
          apiKey={ApiKey}
          onChange={handleEditorChange}
          id='thisContent'
          init={{
            height: 500,
            placeholder: { content },
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
      </div>
    </div>
  )
}

export default PageVracCoAdmin
