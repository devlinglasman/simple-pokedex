// @format

import React, {Component} from 'react';
import './App.css';
import {Switch, BrowserRouter as Router, Route, Link} from 'react-router-dom';
import {browserHistory} from 'react-router';
import SearchResultsPage from '../Pages/SearchResultsPage';
import WelcomePage from '../Pages/WelcomePage';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <div>
            <link
              href="https://fonts.googleapis.com/css?family=Poor+Story"
              rel="stylesheet"
            />
            <Route
              name="welcome"
              exact
              path="/"
              render={props => <WelcomePage {...props} />}
            />
            <Route
              name="searchResults"
              exact
              path="/searchResults"
              render={props => <SearchResultsPage typeSearched="grass" />}
            />
          </div>
        </Switch>
      </Router>
    );
  }
}

export default App;
