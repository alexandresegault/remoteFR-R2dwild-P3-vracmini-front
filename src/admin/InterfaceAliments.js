import './InterfaceAliments.css'
import { Editor } from '@tinymce/tinymce-react'
import { useState } from 'react'
import ApiKey from './ApiKey'

const InterfaceAliments = () => {
  const [text, setText] = useState(null)
  const handleEditorChange = e => {
    setText(e.target.getContent())
    console.log(text)
  }

  return (
    <div className='interface-aliments'>
      <div>
        <Editor
          apiKey={ApiKey}
          onChange={handleEditorChange}
          id='thisContent'
          init={{
            height: 500,
            menubar: false,
            plugins: [
              'advlist autolink lists link image',
              'charmap print preview anchor help',
              'searchreplace visualblocks code',
              'insertdatetime media table paste wordcount'
            ],
            toolbar:
              'undo redo | formatselect | bold italic | \
              alignleft aligncenter alignright | \
              bullist numlist outdent indent | help'
          }}
        />
      </div>
      <p>{text}</p>
    </div>
  )
}

export default InterfaceAliments
