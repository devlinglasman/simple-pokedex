//@format

const apiPath = 'https://pokeapi.co/api/v2/';

export async function generateSearchResults(pokeType) {
  const filteredTypeSet = filterPokeIds(await getTypeSet(pokeType));
  const resolvedPokeStats = await Promise.all(
    filteredTypeSet.map(getPokemonStats),
  );
  return resolvedPokeStats.map(filterCharacteristics);
}

async function getTypeSet(pokeType) {
  return await (await fetch(apiPath + 'type/' + pokeType + '/')).json();
}

async function getPokemonStats(pokeId) {
  return await (await fetch(apiPath + 'pokemon/' + pokeId + '/')).json();
}

export function filterPokeIds(pokeList) {
  return pokeList.pokemon.slice(0, 6).map(eachResult => {
    return eachResult.pokemon.name;
  });
}

export function filterCharacteristics(pokemonData) {
  return {
    name: pokemonData.name,
    sprite: pokemonData.sprites.front_default,
  };
}
