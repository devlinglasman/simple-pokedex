// @format

import React from 'react';
import GLOBALS from '../globals.js';

function PokemonInfoBox(props) {
  return (
    <div>
      <h1>{GLOBALS.capitalise(props.characteristics.name)}</h1>
      <div className="pokeCharas">
        <img src={props.characteristics.sprite} />
        <p>Height: {props.characteristics.height}</p>
        <p>Weight: {props.characteristics.weight}</p>
        <p>Abilities:</p>
        <ul>
          {props.characteristics.abilities.map((ability, index) => {
            return <li key={index}>{GLOBALS.capitalise(ability)}</li>;
          })}
        </ul>
        <p>Type(s):</p>
        <ul>
          {props.characteristics.types.map((type, index) => {
            return <li key={index}>{GLOBALS.capitalise(type)}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default PokemonInfoBox;
