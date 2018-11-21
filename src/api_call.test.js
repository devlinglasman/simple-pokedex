//@format

import {getPokeData} from './api_call.js';

it('gets 3 pokemon', async () => {
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
  const pokeData = await getPokeData();
  expect(pokeData.length).toEqual(3);
});
