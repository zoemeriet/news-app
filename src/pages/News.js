import React, { useState, useEffect } from 'react';
import { useParams, Link } from "react-router-dom";

// Style
import './News.css';

// Components
import { Button } from '../components/Button';

export const News = () => {
  const { id } = useParams()
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState()

  useEffect(() => {
    fetch("https://newsapi.org/v2/top-headlines?country=fr&apiKey=c9c13d7e677f4cd1accb20977809370b")
      .then(res => res.json())
      .then(
        (result) => {
          setLoading(false)
          setData(result.articles[id])
          console.log(result.articles[id]);
        },
        (error) => {
          console.log(error);
        }
      )
  }, [id])

  if (loading) {
    return null
  }

  return (
    <div className="news"> 
      <Link to="/" className="goBack">
        Retour
      </Link>
      {data && 
        <div>
          <img src={data.urlToImage} alt={data.title} />
          <h1>{data.title}</h1>

          {data.author && 
            <p className="cardNews__author">Proposé par : {data.author} le {new Date(data.publishedAt).toLocaleDateString()}</p>
          }
          
          {data.description &&
            <h2>{data.description}</h2>
          }

          {data.content &&
            <p>{data.content}</p>
          }

          {data.url &&
            <Button text="Voir l'article" link={data.url} />
          }
        </div>
      }
    </div>
  )
}