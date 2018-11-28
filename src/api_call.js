//@format

import GLOBALS from './globals.js';

export async function generateListOfTypes() {
  return filterTypeList(await getListOfTypes());
}

async function getListOfTypes() {
  return await (await fetch(`${GLOBALS.API_HOST}type/`)).json();
}

export function filterTypeList(listOfTypes) {
  return listOfTypes.results.map(eachType => eachType.name);
}

export async function generateSearchResults(pokeType) {
  const filteredTypeSet = filterPokeIds(await getTypeSet(pokeType), 6);
  const resolvedPokeStats = await Promise.all(
    filteredTypeSet.map(getPokemonStats),
  );
  return resolvedPokeStats.map(filterCharacteristics);
}

async function getTypeSet(pokeType) {
  return await (await fetch(`${GLOBALS.API_HOST}type/${pokeType}/`)).json();
}

async function getPokemonStats(pokeId) {
  return await (await fetch(`${GLOBALS.API_HOST}pokemon/${pokeId}/`)).json();
}

export function filterPokeIds(pokeList, numberResults) {
  return pokeList.pokemon
    .slice(0, numberResults)
    .map(eachResult => eachResult.pokemon.name);
}

export function filterCharacteristics(pokemonData) {
  return {
    name: pokemonData.name,
    height: pokemonData.height,
    weight: pokemonData.weight,
    abilities: pokemonData.abilities[0].ability.name,
    sprite: pokemonData.sprites.front_default,
    type: pokemonData.types[0].type.name,
  };
}
