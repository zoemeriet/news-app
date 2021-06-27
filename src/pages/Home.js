import React, { useState, useEffect } from 'react';

// Components
import { CardNews } from '../components/CardNews';

export const Home = () => {
  const [loading, setLoading] = useState(true)
  const [news, setNews] = useState()

  useEffect(() => {
    fetch("https://newsapi.org/v2/top-headlines?country=fr&apiKey=c9c13d7e677f4cd1accb20977809370b")
      .then(res => res.json())
      .then(
        (result) => {
          setLoading(false)
          setNews(result.articles)
        },
        (error) => {
          console.log(error);
        }
      )
  }, [])

  if (loading) {
    return null
  }

  return (
    <div>
      <h1>Home</h1>
      {news && news.map((item, index) => (
        <CardNews data={item} index={index} key={index} />
      ))}
    </div>
  )
}