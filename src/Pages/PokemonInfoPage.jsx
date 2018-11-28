//@format

import React, {Component} from 'react';
import GLOBALS from '../globals.js';
import {generateIndividualPoke} from '../api_call';
import SearchResults from '../Components/SearchResults';

class PokemonInfoPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: `${this.props.location.pathname}`.replace('/pokemon/', ''),
      characteristics: {},
    };
  }

  async componentDidMount() {
    const characteristics = await generateIndividualPoke(this.state.name);
    this.setState({characteristics: characteristics});
    console.log(this.state.characteristics);
  }

  render() {
    return (
      <div className="PokeInfo">
        <div className="banner" />
        <h1>{GLOBALS.capitalise(this.state.name)}</h1>
        <div className="pokeCharas">
          <img src={this.state.characteristics.sprite} />
          <p>Height: {this.state.characteristics.height}</p>
          <p>Weight: {this.state.characteristics.weight}</p>
          <p>Ability: {this.state.characteristics.abilities}</p>
          <p>Type: {this.state.characteristics.type}</p>
        </div>
      </div>
    );
  }
}

export default PokemonInfoPage;
