// @format

import React, {Component} from 'react';
import './App.css';
import SearchResults from './components/SearchResults.jsx';
import {generateSearchResults} from './api_call.js';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      errorStatus: '',
      pokemonSearchResults: [],
    };
  }

  async componentDidMount() {
    const searchResults = await generateSearchResults('grass');
    this.setState({pokemonSearchResults: searchResults});
  }

  render() {
    return (
      <div className="App poke-type-green">
        <link
          href="https://fonts.googleapis.com/css?family=Poor+Story"
          rel="stylesheet"
        />
        <div className="banner" />
        <h2 className="search-results-heading poke-type-green">Grass</h2>
        <SearchResults className="poke-type-green" resultsPokeNames={this.state.pokemonSearchResults} />
      </div>
    );
  }
}

export default App;
