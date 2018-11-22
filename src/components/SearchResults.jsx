// @format

import React from 'react';

function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}

function SearchResults(props) {
  const pokeList = props.resultsPokeNames;
  return (
    <div className="searchBox">
      <ul>
        {pokeList.map((element, index) => {
          return (
            <li className="pokemonListPokemon" key={index}>
              <p>{capitalize(element.name)}</p>
              <p>
                <img src={element.sprite} />
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default SearchResults;
