// @format

import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import {generateListOfTypes} from '../api_call';
import LoadingScreen from '../Components/LoadingScreen';

class TypesDropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errorStatus: '',
      typeList: null,
      value: 'grass',
    };
  }

  async componentDidMount() {
    const typeList = await generateListOfTypes();
    this.setState({typeList: typeList});
  }

  handleChange = event => {
    this.props.history.push({
      pathname: `/type/${event.target.value}`,
      state: {typeSearched: event.target.value},
    });
  };

  render() {
    if (this.state.typeList === null) {
      return <LoadingScreen />;
    } else {
      return (
        <label>
          Pick a Pokemon type!
          <select value={this.state.value} onChange={this.handleChange}>
            {this.state.typeList.map((eachType, index) => {
              return (
                <option value={eachType} key={index}>
                  {eachType}
                </option>
              );
            })}
          </select>
        </label>
      );
    }
  }
}

export default TypesDropdown;
