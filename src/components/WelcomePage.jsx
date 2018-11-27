//@format

import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import SearchResultsPage from './SearchResultsPage';

class WelcomePage extends Component {
  render() {
    return (
      <div>
        <div className="banner" />
        <h1>Welcome to your Pokedex!</h1>
        <Link to="/search/">
          <h2>Search</h2>
        </Link>
      </div>
    );
  }
}

export default WelcomePage;
