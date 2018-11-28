// @format

import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import {generateListOfTypes} from '../api_call';

class TypesDropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errorStatus: '',
      typeList: [],
      value: 'grass',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  async componentDidMount() {
    const typeList = await generateListOfTypes();
    this.setState({typeList: typeList});
  }

  handleChange = event => {
    this.props.history.push({
      pathname: '/searchResults',
      state: {typeSearched: event.target.value},
    });
  };

  render() {
    return (
      <label>
        Pick a Pokemon type!
        <select value={this.state.value} onChange={this.handleChange}>
          {this.state.typeList.map(eachType => {
            return <option value={eachType}>{eachType}</option>;
          })}
        </select>
      </label>
    );
  }
}

export default TypesDropdown;
