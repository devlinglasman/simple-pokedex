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
        <h2>{GLOBALS.capitalise(this.state.name)}</h2>
        <h2>{this.state.characteristics.height}</h2>
      </div>
    );
  }
}

export default PokemonInfoPage;
