// @format

import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import React from 'react';
import './SearchResults.css';
import GLOBALS from '../globals.js';

function SearchResults(props) {
  return (
    <div className="SearchResults">
      {props.resultsPokeNames.map((poke, index) => {
        const path = `/pokemon/${poke.name}`;
        return (
          <div>
            <Router>
              <Link to={path}>
                <div className="SearchResultsItem" key={index}>
                  <p>{GLOBALS.capitalise(poke.name)}</p>
                  <img src={poke.sprite} />
                </div>
              </Link>
            </Router>
          </div>
        );
      })}
    </div>
  );
}

export default SearchResults;
