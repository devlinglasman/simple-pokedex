//@format

import {spriteURL} from './searchResultsFixtures.js';

export const listOfTypes = {
  count: 20,
  results: [
    {
      name: 'normal',
      url: 'https://pokeapi.co/api/v2/type/1/',
    },
    {
      name: 'fighting',
      url: 'https://pokeapi.co/api/v2/type/2/',
    },
    {
      name: 'flying',
      url: 'https://pokeapi.co/api/v2/type/3/',
    },
  ],
};

export const filteredTypeList = [
    listOfTypes.results[0].name,
    listOfTypes.results[1].name,
    listOfTypes.results[2].name,
  ];

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

export const pokemon1ApiData = {
  id: 1,
  name: 'bulbasaur',
  sprites: {
    front_default: spriteURL(1),
  },
};

export const pokemon2ApiData = {
  id: 2,
  name: 'ivysaur',
  sprites: {
    front_default: spriteURL(2),
  },
};

export const pokemon3ApiData = {
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
