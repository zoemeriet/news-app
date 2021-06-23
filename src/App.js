import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetch("https://newsapi.org/v2/top-headlines?country=fr&apiKey=c9c13d7e677f4cd1accb20977809370b")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          console.log(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

  if (error) {
    return <div>Erreur : {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Chargement...</div>;
  } 

  return (
    <h1>News App</h1>
  );
  

}

export default App;
