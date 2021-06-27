import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

// Style
import "./CardNews.css"

export const CardNews = ({ data, index }) => {
  return (
    <Link to={`/news/${index}`}>
      <div className="cardNews">
        <img src={data.urlToImage} alt={data.title} />
        <h2 className="cardNews__title">{data.title}</h2>
        {data.author && <p className="cardNews__author">Proposé par : {data.author}</p>}
      </div>
    </Link>
  )
}