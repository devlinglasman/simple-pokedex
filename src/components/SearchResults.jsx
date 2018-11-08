// @format

import React from 'react';

function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}

function SearchResults(props) {
  return (
    <div className="searchBox">
      <ul>
        {props.resultsPokeNames.map((element, index) => {
          return (
            <li className="pokemonListItem" key={index}>
              {capitalize(element)};
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default SearchResults;
