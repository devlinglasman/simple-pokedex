// @format

import React from 'react';

function TypesDropdown(props) {
  const listOfTypes = props.listOfTypes;
  return (
    <select className="TypesDropdown">
      {listOfTypes.map(eachType => {
        return <option value={eachType}>{eachType}</option>;
      })}
    </select>
  );
}

export default TypesDropdown;
