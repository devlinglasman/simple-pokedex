// @format

import React, {Component} from 'react';
import './App.css';
import {Switch, BrowserRouter as Router, Route, Link} from 'react-router-dom';
import {browserHistory} from 'react-router';
import SearchResultsPage from '../Pages/SearchResultsPage';
import WelcomePage from '../Pages/WelcomePage';
import PokemonInfoPage from '../Pages/PokemonInfoPage';

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
              name="type"
              path="/type"
              render={props => <SearchResultsPage {...props} />}
            />
            <Route
              name="pokemon"
              path="/pokemon"
              render={props => <PokemonInfoPage {...props} />}
            />
          </div>
        </Switch>
      </Router>
    );
  }
}

export default App;
