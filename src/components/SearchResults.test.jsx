// @format

import React from 'react';
import SearchResults from './SearchResults';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({adapter: new Adapter()});

let searchResults;

beforeEach(() => {
  searchResults = [
    {
      name: 'bulbasaur',
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
    },
    {
      name: 'ivysaur',
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
    },
    {
      name: 'venusaur',
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
    },
  ];
});

it('should render an <li> element for every pokemon in props', () => {
  const wrapper = Enzyme.shallow(
    <SearchResults resultsPokeNames={searchResults} />,
  );
  expect(wrapper.find('li').length).toBe(searchResults.length);
});

it('should display the Pokemon name for each <li> element, capitalised', () => {
  const wrapper = Enzyme.shallow(
    <SearchResults resultsPokeNames={searchResults} />,
  );
  const firstElement = wrapper.find('li').first();
  expect(firstElement.contains('Bulbasaur')).toEqual(true);
});

it('should display the sprite of each Pokemon in the list', () => {
  const firstElementSprite = searchResults[0].sprite;
  const imageExpected = '<p><img src=' + firstElementSprite + ' /></p>';

  const wrapper = Enzyme.shallow(
    <SearchResults resultsPokeNames={searchResults} />,
  );
  const firstElement = wrapper.find('li').first();

  expect(firstElement.contains(imageExpected)).toEqual(true);
});
