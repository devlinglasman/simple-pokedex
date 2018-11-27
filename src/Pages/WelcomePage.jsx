//@format

import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import SearchResultsPage from './SearchResultsPage';
import {generateListOfTypes} from '../api_call';
import TypesDropdown from '../Components/Types_Dropdown';

class WelcomePage extends Component {
  constructor() {
    super();
    this.state = {
      errorStatus: '',
      typeList: [],
    };
  }

  async componentDidMount() {
    const typeList = await generateListOfTypes();
    this.setState({typeList: typeList});
  }

  render() {
    return (
      <div>
        <div className="banner" />
        <h1>Welcome to your Pokedex!</h1>
        <div>
          <h2>Search</h2>
          <Link to="/search/">
            <TypesDropdown listOfTypes={this.state.typeList} />
          </Link>
        </div>
      </div>
    );
  }
}

export default WelcomePage;
