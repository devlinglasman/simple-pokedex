// @format

import React, {Component} from 'react';
import './App.css';
import SearchResults from './components/SearchResults.jsx';

function capitalize(word) {
return word.charAt(0).toUpperCase() + word.name.slice(1).toLowerCase()}

class App extends React.Component {
  render() {
    const apiCall = {
      count: 811,
      previous: null,
      results: [
        {
          url: 'http://pokeapi.salestock.net/api/v2/pokemon/1/',
          name: 'bulbasaur',
        },
        {
          url: 'http://pokeapi.salestock.net/api/v2/pokemon/2/',
          name: 'ivysaur',
        },
        {
          url: 'http://pokeapi.salestock.net/api/v2/pokemon/3/',
          name: 'venusaur',
        },
        {
          url: 'http://pokeapi.salestock.net/api/v2/pokemon/4/',
          name: 'charmander',
        },
      ],
    };

    const {results} = apiCall;

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
        <SearchResults testResults={results} />
      </div>
    );
  }
}

export default App;
