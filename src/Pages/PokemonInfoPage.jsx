//@format

import React, {Component} from 'react';
import GLOBALS from '../globals.js';

class PokemonInfoPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.location.state.name,
    };
  }

  render() {
    return (
      <div className="PokeInfo">
        <div className="banner" />
        <h2 className="search-results-heading">
          {GLOBALS.capitalise(this.props.location.state.typeSearched)}
        </h2>
        <SearchResults resultsPokeNames={this.state.pokemonSearchResults} />
      </div>
    );
  }
}

export default PokemonInfoPage;
