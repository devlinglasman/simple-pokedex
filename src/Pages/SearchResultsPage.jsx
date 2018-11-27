//@format

import React, {Component} from 'react';
import SearchResults from '../Components/SearchResults';
import {generateSearchResults, generateListOfTypes} from '../api_call';
import TypesDropdown from '../Components/Types_Dropdown';

class SearchResultsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errorStatus: '',
      pokemonSearchResults: [],
      typeList: [],
    };
  }

  async componentDidMount() {
    const typeList = await generateListOfTypes();
    this.setState({typeList: typeList});
    const searchResults = await generateSearchResults(this.props.typeSearched);
    this.setState({pokemonSearchResults: searchResults});
  }

  render() {
    return (
      <div className="App poke-type-green">
        <div className="banner" />
        <TypesDropdown listOfTypes={this.state.typeList} />
        <h2 className="search-results-heading poke-type-green">Grass</h2>
        <SearchResults resultsPokeNames={this.state.pokemonSearchResults} />
      </div>
    );
  }
}

export default SearchResultsPage;
