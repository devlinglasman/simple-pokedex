// @format

import React from 'react';

function capitalize(word) {
return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()}

function SearchResults(props) {
  return (
    <div className="searchBox">
      <ul>
        {props.testResults.map((element, index) => {
          return (
            <li className="pokemonListItem" key={index}>
            {capitalize(element.name)};
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default SearchResults;
