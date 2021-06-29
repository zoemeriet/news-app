import React from 'react';

// Style
import "./InfoProfil.css"

export const InfoProfil = ({ label, text }) => {
  return (
    <div className="infoProfil">
      <p className="infoProfil__label">{label}</p>
      <p className="infoProfil__text">{text}</p>
    </div>
  )
}