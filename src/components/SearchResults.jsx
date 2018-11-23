// @format

import React from 'react';
import './SearchResults.css';

function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}

function SearchResults(props) {
  const pokeList = props.resultsPokeNames;
  return (
    <div className="searchResults">
      {pokeList.map((element, index) => {
        return (
          <div className="searchResultsItem" key={index}>
            <p>{capitalize(element.name)}</p>
            <p>
              <img src={element.sprite} />
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default SearchResults;
