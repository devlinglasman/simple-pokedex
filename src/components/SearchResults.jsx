// @format

import React from 'react';

function SearchResults(props) {
  return (
    <div className="searchBox">
      <ul>
        {props.testResults.map((element, index) => {
          return <li key={index}>{element.name}</li>;
        })}
      </ul>
    </div>
  );
}

export default SearchResults;
