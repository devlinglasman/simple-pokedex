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
  height: 11,
  weight: 300,
  abilities: [{ability: {name: 'ability-1'}}, {ability: {name: 'ability-2'}}],
  sprites: {
    front_default: spriteURL(1),
  },
  types: [{type: {name: 'grass'}}, {type: {name: 'flying'}}],
};

export const pokemon2ApiData = {
  id: 2,
  name: 'ivysaur',
  height: 11,
  weight: 300,
  abilities: [
    {ability: {name: 'ability-1'}},
    {ability: {name: 'ability-2'}},
    {ability: {name: 'ability-3'}},
  ],
  sprites: {
    front_default: spriteURL(2),
  },
  types: [
    {type: {name: 'flying'}},
    {type: {name: 'grass'}},
    {type: {name: 'poison'}},
  ],
};

export const pokemon3ApiData = {
  id: 3,
  name: 'venusaur',
  height: 11,
  weight: 300,
  abilities: [{ability: {name: 'ability-1'}}],
  sprites: {
    front_default: spriteURL(3),
  },
  types: [{type: {name: 'flying'}}],
};

export const filteredResults = [
  {
    name: pokemon1ApiData.name,
    height: pokemon1ApiData.height,
    weight: pokemon1ApiData.weight,
    abilities: [
      pokemon1ApiData.abilities[0].ability.name,
      pokemon1ApiData.abilities[1].ability.name,
    ],
    sprite: pokemon1ApiData.sprites.front_default,
    types: [
      pokemon1ApiData.types[0].type.name,
      pokemon1ApiData.types[1].type.name,
    ],
  },
  {
    name: pokemon2ApiData.name,
    height: pokemon2ApiData.height,
    weight: pokemon2ApiData.weight,
    abilities: [
      pokemon2ApiData.abilities[0].ability.name,
      pokemon2ApiData.abilities[1].ability.name,
      pokemon2ApiData.abilities[2].ability.name,
    ],
    sprite: pokemon2ApiData.sprites.front_default,
    types: [
      pokemon2ApiData.types[0].type.name,
      pokemon2ApiData.types[1].type.name,
      pokemon2ApiData.types[2].type.name,
    ],
  },
  {
    name: pokemon3ApiData.name,
    height: pokemon3ApiData.height,
    weight: pokemon3ApiData.weight,
    abilities: [pokemon3ApiData.abilities[0].ability.name],
    sprite: pokemon3ApiData.sprites.front_default,
    types: [pokemon3ApiData.types[0].type.name],
  },
];
