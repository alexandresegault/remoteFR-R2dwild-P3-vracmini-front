import { useState, useEffect } from "react";
import "./AuxFourneaux.css"
import { Link } from "react-router-dom";
import axios from 'axios'

const AuxFourneaux = () => {
  const [showAliments, setShowAliments] = useState(false)
  const [auxFourneaux, setAuxFourneaux] = useState([])
  
// gi
return(
  <div>
    <h1>{}</h1>
    <div className="Menu_fourneaux">
      <p onClick={() => setShowAliments(!showAliments)}>Les curieux aliments </p>
      <div className={showAliments === true ? 'visible-aliments' : 'invisible-aliments'}>
        <Link>Les légumineuses</Link>
        <Link>Les céréales</Link>
        <Link>Les oléagineux</Link>
        <Link>Les graines</Link>
        <Link>Les huiles</Link>
        <Link>Les vinaigres</Link>
        <Link>Les fruits secs</Link>
        <Link>Les farines</Link>
        <Link>Les sucres</Link>
      </div>
      <Link>Recettes en vrac</Link>
      <Link>Guide des quantités</Link>
      <Link>Guide des conversions</Link>
    </div>
  </div>
)
}

export default AuxFourneaux