// @format

import React from 'react';
import SearchResults from './SearchResults';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({adapter: new Adapter()});

it('should render an <li> element for every pokemon in props', () => {
  const fakeResults = [
    {
      url: 'http://pokeapi.salestock.net/api/v2/pokemon/1/',
      name: 'bulbasaur',
    },
    {
      url: 'http://pokeapi.salestock.net/api/v2/pokemon/2/',
      name: 'ivysaur',
    },
    {
      url: 'http://pokeapi.salestock.net/api/v2/pokemon/3/',
      name: 'venusaur',
    },
    {
      url: 'http://pokeapi.salestock.net/api/v2/pokemon/4/',
      name: 'charmander',
    },
  ];
  const wrapper = Enzyme.shallow(<SearchResults testResults={fakeResults} />);
  expect(wrapper.find('li').length).toEqual(fakeResults.length);
  4;
});
