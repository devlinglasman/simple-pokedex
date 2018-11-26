// @format

import React from 'react';
import SearchResults from './SearchResults';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({adapter: new Adapter()});
import {searchResultsFixture} from '../__fixtures__/searchResultsFixtures.js';

it('should render a <div> element for every searchResultsItem in props', () => {
  const wrapper = Enzyme.shallow(
    <SearchResults resultsPokeNames={searchResultsFixture} />,
  );

  expect(wrapper.find('.searchResultsItem')).toHaveLength(
    searchResultsFixture.length,
  );
});

it('should display the Pokemon name for searchResults elements, capitalised', () => {
  const wrapper = Enzyme.shallow(
    <SearchResults resultsPokeNames={searchResultsFixture} />,
  );
  const firstElement = wrapper.find('.searchResultsItem').first();

  expect(firstElement.html()).toContain('Bulbasaur');
});

it('should display the sprite for searchResults elements', () => {
  const firstElementSprite = searchResultsFixture[0].sprite;

  const wrapper = Enzyme.render(
    <SearchResults resultsPokeNames={searchResultsFixture} />,
  );
  const firstElement = wrapper.find('.searchResultsItem').first();
  const firstElementImage = firstElement.find('.img').first();

  expect(firstElement.html()).toContain(firstElementSprite);
});
