// @format

import React, {Component} from 'react';
import './App.css';
import SearchResults from './components/SearchResults.jsx';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      pokemonSearchResults: [],
    };
  }

  componentDidMount() {
    fetch('https://pokeapi.co/api/v2/type/grass/')
      .then(response => response.json())
      .then(results => {
        let resultsPokeNames = results.pokemon.slice(0, 6).map(eachResult => {
          return eachResult.pokemon.name;
        });
        this.setState({pokemonSearchResults: resultsPokeNames});
      });
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
