import React from 'react';

// Style
import './Profil.css';

// Images
import Zoe from '../assets/image_zoe.jpg';

// Components
import { InfoProfil } from '../components/InfoProfil';

export const Profil = () => {
  return (
    <div className="profil">
      <h1>Profil</h1>
      <div className="profil__avatar"><img src={Zoe} alt="Profil" /></div>
      <InfoProfil label="Username" text="Zoé Meriet" />
      <InfoProfil label="Email" text="zoe.meriet112@gmail.com" />
      <InfoProfil label="Téléphone" text="06 48 43 39 89" />
    </div>
  )
}