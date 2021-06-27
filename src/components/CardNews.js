import React, { useState, useEffect } from 'react';

// Style
import "./CardNews.css"

export const CardNews = ({ data }) => {
  return (
    <div className="cardNews">
      <img src={data.urlToImage} alt={data.title} />
      <h2 className="cardNews__title">{data.title}</h2>
      {data.author && <p className="cardNews__author">Proposé par : {data.author}</p>}
    </div>
  )
}