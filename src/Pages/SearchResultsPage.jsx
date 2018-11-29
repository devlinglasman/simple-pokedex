//@format

import React, {Component} from 'react';
import SearchResults from '../Components/SearchResults';
import {generateSearchResults, generateListOfTypes} from '../api_call';
import TypesDropdown from '../Components/Types_Dropdown';
import GLOBALS from '../globals.js';
import LoadingScreen from '../Components/LoadingScreen';

class SearchResultsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errorStatus: '',
      pokemonSearchResults: null,
      typeSearched: GLOBALS.removeFirstPathPart(
        `${this.props.location.pathname}`,
      ),
    };
  }

  async componentDidMount() {
    const filteredPokemon = await generateSearchResults(
      this.state.typeSearched,
    );
    this.setState({pokemonSearchResults: filteredPokemon});
  }

  render() {
    if (this.state.pokemonSearchResults === null) {
      return <LoadingScreen />;
    } else {
      return (
        <div className="App">
          <div className="banner" />
          <h2 className="search-results-heading">
            {GLOBALS.capitalise(this.state.typeSearched)}
          </h2>
          <SearchResults resultsPokeNames={this.state.pokemonSearchResults} />
        </div>
      );
    }
  }
}

export default SearchResultsPage;
