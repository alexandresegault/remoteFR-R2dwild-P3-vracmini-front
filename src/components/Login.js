import axios from 'axios'
import { useHistory } from 'react-router-dom'
import './Login.css'

const Login = () => {
  let history = useHistory()
  const onSubmit = e => {
    e.preventDefault()
    console.log('onSubmit')
    axios
      .post('http://localhost:4242/auth/signin', {
        password: e.target.password.value,
        email: e.target.email.value
      })
      .then(res => {
        console.log(res)
        history.push('/admin')
        localStorage.setItem('token', res.headers['x-access-token'])
        console.log('token', localStorage.getItem('token'))
      })
  }

  // const protectedRoute = () => {
  //   const token = localStorage.getItem('token')
  //   axios({
  //     method: 'POST',
  //     url: 'http://localhost:3030/auth/protected',
  //     headers: {
  //       Authorization: `Bearer ${token}`
  //     }
  //   }).then(res => {
  //     console.log(res)
  //     //reste a ajouter les redirection si  token valide
  //     history.push('/admin/')
  //   })
  // }
  return (
    <div className='contentGlob'>
      <h1 className='title-connexion'>Connexion</h1>
      <div className='login'>
        <form className='form-connexion' onSubmit={onSubmit}>
          <label htmlFor='email'>Mail: </label>
          <input type='email' name='email' />
          <br />
          <label htmlFor='password'>Mot de passe: </label>
          <input type='password' name='password' />
          <br />
          <button type='submit'>Connexion</button>
        </form>
      </div>
    </div>
  )
}

export default Login
