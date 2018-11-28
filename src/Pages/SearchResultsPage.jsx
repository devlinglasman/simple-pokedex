//@format

import React, {Component} from 'react';
import SearchResults from '../Components/SearchResults';
import {generateSearchResults, generateListOfTypes} from '../api_call';
import TypesDropdown from '../Components/Types_Dropdown';
import GLOBALS from '../globals.js';

class SearchResultsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errorStatus: '',
      pokemonSearchResults: [],
    };
  }

  async componentDidMount() {
    const searchResults = await generateSearchResults(
      this.props.location.state.typeSearched,
    );
    this.setState({pokemonSearchResults: searchResults});
  }

  render() {
    return (
      <div className="App poke-type-green">
        <div className="banner" />
        <h2 className="search-results-heading poke-type-green">
          {GLOBALS.capitalise(this.props.location.state.typeSearched)}
        </h2>
        <SearchResults resultsPokeNames={this.state.pokemonSearchResults} />
      </div>
    );
  }
}

export default SearchResultsPage;
