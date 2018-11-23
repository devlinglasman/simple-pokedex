//@format

import {generateSearchResults} from './api_call.js';
import {filterPokeIds} from './api_call.js';
import {filterCharacteristics} from './api_call.js';

it('generates list of Search Results', async () => {
  const typeData = {
    id: 5,
    pokemon: [
      {
        pokemon: {
          name: 'bulbasaur',
        },
      },
      {
        pokemon: {
          name: 'ivysaur',
        },
      },
      {
        pokemon: {
          name: 'venusaur',
        },
      },
      {
        pokemon: {
          name: 'bulbasaur',
        },
      },
      {
        pokemon: {
          name: 'ivysaur',
        },
      },
      {
        pokemon: {
          name: 'venusaur',
        },
      },
    ],
  };
  const pokemon1 = {
    id: 1,
    name: 'bulbasaur',
    sprites: {
      front_default:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
    },
  };
  const pokemon2 = {
    id: 2,
    name: 'ivysaur',
    sprites: {
      front_default:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png',
    },
  };
  const pokemon3 = {
    id: 3,
    name: 'venusaur',
    sprites: {
      front_default:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png',
    },
  };
  const filteredResults = [
    {
      name: 'bulbasaur',
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
    },
    {
      name: 'ivysaur',
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png',
    },
    {
      name: 'venusaur',
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png',
    },
    {
      name: 'bulbasaur',
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
    },
    {
      name: 'ivysaur',
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png',
    },
    {
      name: 'venusaur',
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png',
    },
  ];
  window.fetch = jest
    .fn()
    .mockImplementationOnce(() =>
      Promise.resolve({
        json: () => Promise.resolve(typeData),
      }),
    )
    .mockImplementationOnce(() =>
      Promise.resolve({
        json: () => Promise.resolve(pokemon1),
      }),
    )
    .mockImplementationOnce(() =>
      Promise.resolve({
        json: () => Promise.resolve(pokemon2),
      }),
    )
    .mockImplementationOnce(() =>
      Promise.resolve({
        json: () => Promise.resolve(pokemon3),
      }),
    )
    .mockImplementationOnce(() =>
      Promise.resolve({
        json: () => Promise.resolve(pokemon1),
      }),
    )
    .mockImplementationOnce(() =>
      Promise.resolve({
        json: () => Promise.resolve(pokemon2),
      }),
    )
    .mockImplementationOnce(() =>
      Promise.resolve({
        json: () => Promise.resolve(pokemon3),
      }),
    );
  const actualResults = await generateSearchResults('grass');
  expect(actualResults).toEqual(filteredResults);
});

it('filters the list to just pokemon Ids', () => {
  const pokeData = {
    id: 5,
    pokemon: [
      {
        pokemon: {
          name: 'poke-1',
          id: 1,
        },
      },
      {
        pokemon: {
          name: 'poke-2',
          id: 2,
        },
      },
      {
        pokemon: {
          name: 'poke-3',
          id: 3,
        },
      },
    ],
  };
  const filteredData = ['poke-1', 'poke-2', 'poke-3'];
  expect(filterPokeIds(pokeData)).toEqual(filteredData);
});

it('filters out all but name and sprite', () => {
  const pokeCharacteristics = {
    name: 'butterfree',
    sprite:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/female/12.png',
  };
  const pokeData = {
    id: 12,
    name: pokeCharacteristics.name,
    sprites: {
      front_default: pokeCharacteristics.sprite,
    },
  };
  expect(filterCharacteristics(pokeData)).toEqual(pokeCharacteristics);
});
