import React from 'react'

import HomeRight from '../components/HomeRight'
import HomeLeft from '../components/HomeLeft'
import Woman from '../components/Woman'

import './Home.css'

const Home = () => {
  return (
    <div className='home-page'>
      <HomeLeft />
      <Woman />
      <HomeRight />
    </div>
  )
}

export default Home
