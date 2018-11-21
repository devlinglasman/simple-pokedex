// @format

import React, {Component} from 'react';
import './App.css';
import SearchResults from './components/SearchResults.jsx';
import {getPokeData} from './api_call.js';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      errorStatus: '',
      pokemonSearchResults: [],
    };
  }

  async componentDidMount() {
    getPokeData().then(pokeData =>
      this.setState({pokemonSearchResults: pokeData}),
    );
  }

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
        <SearchResults resultsPokeNames={this.state.pokemonSearchResults} />
      </div>
    );
  }
}

export default App;
