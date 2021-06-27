import React from 'react';
import { Link } from "react-router-dom";

// Style
import "./CardNews.css"

export const CardNews = ({ data, index }) => {
  return (
    <Link to={`/news/${index}`} className="cardNews">
      <div className="cardNews__content">
        <h2 className="cardNews__title">{data.title}</h2>
        {data.author && 
          <p className="cardNews__author">Proposé par : {data.author}</p>
        }
      </div>
      {data.urlToImage &&
        <img src={data.urlToImage} alt={data.title} />
      }
    </Link>
  )
}