import { useState, useEffect } from "react";
import "./AuxFourneaux.css"
import { Link } from "react-router-dom";
import axios from 'axios';


const AuxFourneaux = () => {
  const [showAliments, setShowAliments] = useState(false)
  const [auxFourneaux, setAuxFourneaux] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [img, setImg] = useState("https://drive.google.com/file/d/1bXOU75Kts--c-LiIFLANeDrAsIoBwg5O/view?usp=sharing")
  
  useEffect(() => {
    axios
      .get("http://localhost:4242/api/aux_fourneaux/")
      .then(response => setAuxFourneaux(response.data))
      .then(res => setIsLoading(true))
  }, []);

return(
  <div>
  {isLoading ? 
    <div className="all_fourneaux">
    <div className="left_side_menu">
      <div className="Menu_fourneaux">
      <h1 className="title_fourneaux">{auxFourneaux[0].title}</h1>
        <div className="categories_fourneaux">
        <p className='aliments-curieux' onClick={() => setShowAliments(!showAliments)}><span className={showAliments ? 'arrow-right' : 'arrow-down'}>v</span>Les curieux aliments </p>
        <div className={showAliments ? 'visible-aliments' : 'invisible-aliments'}>
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
    </div>
    <div className="right_side_content">
      <img className="img_fourneaux" src="https://drive.google.com/uc?id=1bXOU75Kts--c-LiIFLANeDrAsIoBwg5O" />
      <p>{auxFourneaux[0].content}</p>
    </div>
  </div>
   : <div> En chargement </div>}
   </div>
)
}

export default AuxFourneaux