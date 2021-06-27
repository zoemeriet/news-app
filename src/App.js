import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Style
import './App.css';

// Pages
import { Home } from "./pages/Home";
import { News } from './pages/News';
import { Profil } from "./pages/Profil";

// Components
import { Navbar } from "./components/Navbar";


const App = () => {

  // const [error, setError] = useState(null);
  // const [isLoaded, setIsLoaded] = useState(false);
  // useEffect(() => {
  //   fetch("https://newsapi.org/v2/top-headlines?country=fr&apiKey=c9c13d7e677f4cd1accb20977809370b")
  //     .then(res => res.json())
  //     .then(
  //       (result) => {
  //         setIsLoaded(true);
  //         console.log(result);
  //       },
  //       (error) => {
  //         setIsLoaded(true);
  //         setError(error);
  //       }
  //     )
  // }, [])

  return (
    <main>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/news/:id">
            <News />
          </Route>
          <Route path="/profil">
            <Profil />
          </Route>
        </Switch>
        <Navbar />
      </Router>
    </main>
  );
  

}

export default App;
