// @format

import React, {Component} from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import {browserHistory} from 'react-router';
import SearchResultsPage from './SearchResultsPage';
import WelcomePage from './WelcomePage';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <link
            href="https://fonts.googleapis.com/css?family=Poor+Story"
            rel="stylesheet"
          />
          <Route name="welcome" exact path="/" component={WelcomePage} />
          <Route
            name="searchResults"
            exact
            path="/search/"
            component={SearchResultsPage}
          />
        </div>
      </Router>
    );
  }
}

export default App;
