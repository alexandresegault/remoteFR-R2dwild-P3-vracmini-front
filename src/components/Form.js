import React from 'react'
import { useState } from 'react'

import './Form.css'

const Form = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [objet, setObjet] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = event => {
    event.preventDefault()
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label className='formulaire'>
          <input
            className='input-contact'
            type='text'
            value={name}
            placeholder='name'
            onChange={e => setName(e.target.value)}
          />
          <input
            className='input-contact'
            type='text'
            value={email}
            placeholder='email'
            onChange={e => setEmail(e.target.value)}
          />
          <input
            className='input-contact'
            type='text'
            value={objet}
            placeholder='objet'
            onChange={e => setObjet(e.target.value)}
          />
          <textarea
            type='text'
            placeholder='message'
            value={message}
            style={{ height: 100 }}
            onChange={e => setMessage(e.target.value)}
          />
        </label>
        <input
          className='button-send'
          type='submit'
          value='Envoyer'
          onClick={handleSubmit}
        />
      </form>
    </div>
  )
}

export default Form
