import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import axios from 'axios'

import './AuxFourneaux.css'

const AuxFourneaux = () => {
  const [showAliments, setShowAliments] = useState(false)
  const [auxFourneaux, setAuxFourneaux] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [img] = useState(
    'https://drive.google.com/file/d/1bXOU75Kts--c-LiIFLANeDrAsIoBwg5O/view?usp=sharing'
  )

  useEffect(() => {
    axios
      .get('http://localhost:4242/api/aux_fourneaux/')
      .then(response => setAuxFourneaux(response.data))
      .then(res => setIsLoading(true))
  }, [])

  return (
    <div>
      {isLoading ? (
        <div className='all-fourneaux'>
          <div className='left-side-menu'>
            <h1 className='title-fourneaux'>{auxFourneaux[0].title}</h1>
            <div className='categories-fourneaux'>
              <div className='curieux-aliments'>
                <span className={showAliments ? 'arrow-down' : 'arrow-right'}>
                  &gt;
                </span>
                <p onClick={() => setShowAliments(!showAliments)}>
                  Les curieux aliments
                </p>
              </div>
              <div
                className={
                  showAliments ? 'visible-aliments' : 'invisible-aliments'
                }
              >
                <Link to='/aux_fourneaux/curieux_aliments/1'>Les légumineuses</Link>
                <Link>Les céréales</Link>
                <Link>Les oléagineux</Link>
                <Link>Les graines</Link>
                <Link to='/aux_fourneaux/curieux_aliments/6'>Les huiles</Link>
                <Link>Les vinaigres</Link>
                <Link>Les fruits secs</Link>
                <Link>Les farines</Link>
                <Link>Les sucres</Link>
              </div>
              <div className='curieux-aliments'>
                <span className='arrow-right'>&gt;</span>
                <Link>Recettes en vrac</Link>
              </div>
              <div className='curieux-aliments'>
                <span className='arrow-right'>&gt;</span>
                <Link>Guide des quantités</Link>
              </div>
              <div className='curieux-aliments'>
                <span className='arrow-right'>&gt;</span>
                <Link>Guide des conversions</Link>
              </div>
            </div>
          </div>
          <div className='right-side-content'>
            <img
              className='img-fourneaux'
              src='https://drive.google.com/uc?id=1EzICHn4SvPastfOLNuuO5Ww0LtexjAwF'
              alt='coupe de légumes'
            />
            <p className='content-fourneaux'>{auxFourneaux[0].content}</p>
          </div>
        </div>
      ) : (
        <div> En chargement </div>
      )}
    </div>
  )
}

export default AuxFourneaux
