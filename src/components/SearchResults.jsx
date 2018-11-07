// @format

import React from 'react';

function PokemonListItem(props) {
  return (
    <li className="pokemon-item">
      <a href={props.hrefValue} target="_blank">
        <p>{props.name}</p>
        <img src={props.imgSrcValue} className="pokemon-item-img" />
      </a>
    </li>
  );
}

class SearchResults extends React.Component {
  renderPokemonItem(name, hrefValue, imgSrcValue) {
    return (
      <PokemonListItem
        name={name}
        hrefValue={hrefValue}
        imgSrcValue={imgSrcValue}
      />
    );
  }

  render() {
    return (
      <div className="searchBox">
        {this.renderPokemonItem(
          'Bulbasaur',
          'https://pokemondb.net/pokedex/bulbasaur',
          'images/bulbasaur.png',
        )}
        {this.renderPokemonItem(
          'Oddish',
          'https://pokemondb.net/pokedex/bulbasaur',
          'images/oddish.png',
        )}
        {this.renderPokemonItem(
          'Paras',
          'https://pokemondb.net/pokedex/bulbasaur',
          'images/paras.jpeg',
        )}
        {this.renderPokemonItem(
          'Bellsprout',
          'https://pokemondb.net/pokedex/bulbasaur',
          'images/bellsprout.png',
        )}
        {this.renderPokemonItem(
          'Exeggcute',
          'https://pokemondb.net/pokedex/bulbasaur',
          'images/exeggcute.jpeg',
        )}
        {this.renderPokemonItem(
          'Tangela',
          'https://pokemondb.net/pokedex/bulbasaur',
          'images/tangela.jpeg',
        )}
      </div>
    );
  }
}

export default SearchResults;
