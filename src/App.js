// @format

import React, {Component} from 'react';
import './App.css';
import SearchResults from './components/SearchResults.jsx';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      errorStatus: '',
      pokemonSearchResults: [],
    };
  }

  async componentDidMount() {
    let resultsPokeNames = [];
    const response = await fetch('https://pokeapi.co/api/v2/type/grass/');
    if (response.status >= 400) {
      this.setState({errorStatus: 'Error fetching pokemon'});
    } else {
      response.json().then(results => {
        resultsPokeNames = results.pokemon.slice(0, 6).map(eachResult => {
          return eachResult.pokemon.name;
        });
        this.setState({pokemonSearchResults: resultsPokeNames});
      });
    }
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

function setPokemonResultsArray(pokemonResults) {
  let pokemonResultsNames = [];
  return pokemonResults.map(eachResult => {
    pokemonResultsNames.push(eachResult);
  });
}
export default App;
