import React from 'react';

// Style
import './Button.css';

export const Button = ({ text, link }) => {
  return (
    <a href={link} target="_blank" rel="noreferrer" className="button">{text}</a>
  )
}