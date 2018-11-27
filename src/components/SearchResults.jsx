// @format

import React from 'react';
import './SearchResults.css';

function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}

function SearchResults(props) {
  const pokeList = props.resultsPokeNames;
  return (
    <div className="SearchResults">
      {pokeList.map((element, index) => {
        return (
          <div className="SearchResultsItem" key={index}>
            <p>{capitalize(element.name)}</p>
            <img src={element.sprite} />
          </div>
        );
      })}
    </div>
  );
}

export default SearchResults;
