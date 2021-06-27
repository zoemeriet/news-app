import React from 'react';
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
  return (
    <main>
      <Router>
        <Navbar />
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
      </Router>
    </main>
  )
}

export default App;
