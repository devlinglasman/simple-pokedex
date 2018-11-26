//@format

import {
  filterCharacteristics,
  filterPokeIds,
  generateSearchResults,
} from './api_call.js';
import {
  filteredResults,
  grassPokemonList,
  pokemon1ApiData,
  pokemon2ApiData,
  pokemon3ApiData,
  resolvedJsonFetch,
} from './__fixtures__/api_call_fixtures.js';
import {spriteURL} from './__fixtures__/searchResultsFixtures.js';

it('filters the list to just pokemon Ids', () => {
  const filteredTypeList = [
    grassPokemonList.pokemon[0].pokemon.name,
    grassPokemonList.pokemon[1].pokemon.name,
    grassPokemonList.pokemon[2].pokemon.name,
  ];

  expect(filterPokeIds(grassPokemonList)).toEqual(filteredTypeList);
});

it('filters out all but name and sprite', () => {
  expect(filterCharacteristics(pokemon1ApiData)).toEqual(filteredResults[0]);
});

it('generates list of filtered search results', async () => {
  window.fetch = jest
    .fn()
    .mockImplementationOnce(() => resolvedJsonFetch(grassPokemonList))
    .mockImplementationOnce(() => resolvedJsonFetch(pokemon1ApiData))
    .mockImplementationOnce(() => resolvedJsonFetch(pokemon2ApiData))
    .mockImplementationOnce(() => resolvedJsonFetch(pokemon3ApiData));

  const actualResults = await generateSearchResults('grass');
  expect(actualResults).toEqual(filteredResults);
});
