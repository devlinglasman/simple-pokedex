//@format

import React, {Component} from 'react';
import GLOBALS from '../globals.js';
import {generateIndividualPoke} from '../api_call';
import PokemonInfoBox from '../Components/PokemonInfo';
import LoadingScreen from '../Components/LoadingScreen';

class PokemonInfoPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: GLOBALS.removeFirstPathPart(`${this.props.location.pathname}`),
      characteristics: null,
    };
  }

  async componentDidMount() {
    const characteristics = await generateIndividualPoke(this.state.name);
    this.setState({characteristics: characteristics});
  }

  render() {
    if (this.state.characteristics === null) {
      return <LoadingScreen />;
    } else {
      return (
        <div className="PokeInfo">
          <div className="banner" />
          <PokemonInfoBox characteristics={this.state.characteristics} />
        </div>
      );
    }
  }
}

export default PokemonInfoPage;
