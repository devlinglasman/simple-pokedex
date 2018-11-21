//@format

import {makePokeApiCall} from './api_call.js';

describe('Poke API call', () => {
  it('has 3 pokemon', () => {
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        json: () =>
          Promise.resolve({
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
            ],
          }),
      }),
    );
    return makePokeApiCall().then(pokeData =>
      expect(pokeData.length).toEqual(3),
    );
  });
});
