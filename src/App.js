// @format

import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import SearchResults from './components/SearchResults.jsx';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <link
          href="https://fonts.googleapis.com/css?family=Poor+Story"
          rel="stylesheet"
        />
        <img
          src="images/welcome-poke-image.jpg"
          alt="pokemon-search"
          className="poke-search"
        />
        <h2 className="search-results-title" id="grass">
          Grass
        </h2>
        <SearchResults />
      </div>
    );
  }
}

export default App;
