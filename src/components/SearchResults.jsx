// @format

import React from 'react';
import './SearchResults.css';
import GLOBALS from '../globals.js';

function SearchResults(props) {
  const pokeList = props.resultsPokeNames;
  return (
    <div className="SearchResults">
      {pokeList.map((element, index) => {
        return (
          <div className="SearchResultsItem" key={index}>
            <p>{GLOBALS.capitalise(element.name)}</p>
            <img src={element.sprite} />
          </div>
        );
      })}
    </div>
  );
}

export default SearchResults;
