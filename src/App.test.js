// @format

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({adapter: new Adapter()});

describe('App', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('sets the state componentDidMount', async () => {
    window.fetch = jest.fn().mockImplementation(() => ({
      status: 200,
      json: () =>
        new Promise((resolve, reject) => {
          resolve({
            id: 5,
            pokemon: [
              {
                pokemon: {
                  name: 'poke-1',
                },
              },
              {
                pokemon: {
                  name: 'poke-2',
                },
              },
              {
                pokemon: {
                  name: 'poke-3',
                },
              },
              {
                pokemon: {
                  name: 'poke-4',
                },
              },
              {
                pokemon: {
                  name: 'poke-5',
                },
              },
              {
                pokemon: {
                  name: 'poke-6',
                },
              },
              {
                pokemon: {
                  name: 'poke-7',
                },
              },
            ],
          });
        }),
    }));
    const renderedComponent = await Enzyme.shallow(<App />);
    await renderedComponent.update();
    expect(renderedComponent.state('pokemonSearchResults').length).toEqual(6);
  });

  it('sets the state componentDidMount on error', async () => {
    window.fetch = jest.fn().mockImplementation(() => ({
      status: 500,
    }));
    const renderedComponent = await Enzyme.shallow(<App />);
    await renderedComponent.update();
    expect(renderedComponent.state('errorStatus')).toEqual(
      'Error fetching pokemon',
    );
  });
});
