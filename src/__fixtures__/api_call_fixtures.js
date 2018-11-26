//@format

import {spriteURL} from './searchResultsFixtures.js';

export function resolvedJsonFetch(data) {
  return Promise.resolve({
    json: () => Promise.resolve(data),
  });
}

export const grassPokemonList = {
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
  ],
};

export const pokemon1 = {
  id: 1,
  name: 'bulbasaur',
  sprites: {
    front_default: spriteURL(1),
  },
};

export const pokemon2 = {
  id: 2,
  name: 'ivysaur',
  sprites: {
    front_default: spriteURL(2),
  },
};

export const pokemon3 = {
  id: 3,
  name: 'venusaur',
  sprites: {
    front_default: spriteURL(3),
  },
};

export const filteredResults = [
  {
    name: 'bulbasaur',
    sprite: spriteURL(1),
  },
  {
    name: 'ivysaur',
    sprite: spriteURL(2),
  },
  {
    name: 'venusaur',
    sprite: spriteURL(3),
  },
];
