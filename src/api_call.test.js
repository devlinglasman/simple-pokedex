//@format

import {
  filterCharacteristics,
  filterPokeIds,
  filterTypeList,
  generateListOfTypes,
  generateSearchResults,
  generateIndividualPoke,
} from './api_call.js';
import {
  filteredTypeList,
  filteredResults,
  grassPokemonList,
  listOfTypes,
  pokemon1ApiData,
  pokemon2ApiData,
  pokemon3ApiData,
  resolvedJsonFetch,
} from './__fixtures__/api_call_fixtures.js';
import {spriteURL} from './__fixtures__/searchResultsFixtures.js';

it('generates filtered individual pokemon characteristics', async () => {
  window.fetch = jest
    .fn()
    .mockResolvedValueOnce({json: () => Promise.resolve(pokemon1ApiData)});

  const actualResults = await generateIndividualPoke(pokemon1ApiData.name);
  expect(actualResults).toEqual(filteredResults[0]);
});

it('generates filtered list of types', async () => {
  window.fetch = jest
    .fn()
    .mockResolvedValueOnce({json: () => Promise.resolve(listOfTypes)});

  const actualResults = await generateListOfTypes();
  expect(actualResults).toEqual(filteredTypeList);
});

it('generates list of filtered search results', async () => {
  window.fetch = jest
    .fn()
    .mockResolvedValueOnce({json: () => Promise.resolve(grassPokemonList)})
    .mockResolvedValueOnce({json: () => Promise.resolve(pokemon1ApiData)})
    .mockResolvedValueOnce({json: () => Promise.resolve(pokemon2ApiData)})
    .mockResolvedValueOnce({json: () => Promise.resolve(pokemon3ApiData)});

  const actualResults = await generateSearchResults('grass');
  expect(actualResults).toEqual(filteredResults);
});

it('filters the list of types to a list of type names only', () => {
  expect(filterTypeList(listOfTypes)).toEqual(filteredTypeList);
});

it('filters the list to just pokemon Ids', () => {
  const filteredGrassPokemon = [
    grassPokemonList.pokemon[0].pokemon.name,
    grassPokemonList.pokemon[1].pokemon.name,
    grassPokemonList.pokemon[2].pokemon.name,
  ];

  expect(filterPokeIds(grassPokemonList)).toEqual(filteredGrassPokemon);
});

it('extracts required characteristics from a set of Pokemon data', () => {
  expect(filterCharacteristics(pokemon1ApiData)).toEqual(filteredResults[0]);
});
