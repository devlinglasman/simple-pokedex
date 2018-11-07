// @format

import React from 'react';
import SearchResults from './SearchResults';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({adapter: new Adapter()});

it('should render an <li> element for every product in `props.`', () => {
  expect(wrapper.find('li').length).toEqual(mockProducts.length);
  3;
});
