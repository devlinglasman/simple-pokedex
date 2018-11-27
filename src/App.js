// @format

import React, {Component} from 'react';
import './App.css';
import SearchResults from './components/SearchResults.jsx';
import {generateSearchResults, generateListOfTypes} from './api_call.js';
import TypesDropdown from './components/Types_Dropdown.jsx';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      errorStatus: '',
      pokemonSearchResults: [],
      typeList: [],
    };
  }

  async componentDidMount() {
    const typeList = await generateListOfTypes();
    this.setState({typeList: typeList});
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
        <TypesDropdown listOfTypes={this.state.typeList} />
        <h2 className="search-results-heading poke-type-green">Grass</h2>
        <SearchResults resultsPokeNames={this.state.pokemonSearchResults} />
      </div>
    );
  }
}

export default App;
