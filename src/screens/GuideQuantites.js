import { useState, useEffect } from 'react'

const GuideQuantites = () => {

  const [imgIntro1] = useState(
    'https://drive.google.com/uc?id=1hxpf6JEKj1HuDwvcU8KuWcpvPIb-jIYL'
  )
  const [imgIntro2] = useState(
    'https://drive.google.com/uc?id=1ndHYw30vhjUbuP0xhd2GZIu0b9SdH5Ll'
  )
  const [imgIntro3] = useState(
    'https://drive.google.com/uc?id=1g2_pZ3qUhiIVPyG2tyOdkQwS434kLyTT'
  )
  const [imgIntro4] = useState(
    'https://drive.google.com/uc?id=1juHkrfVUmqSwLohuDg-u_5BADq94mSLh'
  )
  const [imgIntro5] = useState(
    'https://drive.google.com/uc?id=1lCPHl6VADn30TkYcbe9kQPAmUx-SGW8D'
  )
  const [imgIntro6] = useState(
    'https://drive.google.com/uc?id=1gnzqqAmrmNByyTgc8WY-bUtjq0cnZTFO'
  )

  return(
    <div>
      <div>
        <img className="pot-quantites-intro" src={imgIntro1} alt="texte intro quantités" />
        <img className="pot-quantites-intro" src={imgIntro2} alt="texte intro quantités" />
        <img className="pot-quantites-intro" src={imgIntro3} alt="texte intro quantités" />
      </div>
    </div>
  )
}

export default GuideQuantites