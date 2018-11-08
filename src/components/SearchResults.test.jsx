// @format

import React from 'react';
import SearchResults from './SearchResults';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({adapter: new Adapter()});

let searchResultsNames;

beforeEach(() => {
  searchResultsNames = [
    'bulbasaur',
    'ivysaur',
    'venusaur',
    'oddish',
    'gloom',
    'vileplume',
  ];
});

it('should render an <li> element for every pokemon in props', () => {
  const wrapper = Enzyme.shallow(
    <SearchResults resultsPokeNames={searchResultsNames} />,
  );
  expect(wrapper.find('li').length).toBe(searchResultsNames.length);
});

it('should display the Pokemon name for each <li> element, capitalised', () => {
  const wrapper = Enzyme.shallow(
    <SearchResults resultsPokeNames={searchResultsNames} />,
  );
  const firstElement = wrapper.find('li').first();
  expect(firstElement.contains('Bulbasaur')).toEqual(true);
});
