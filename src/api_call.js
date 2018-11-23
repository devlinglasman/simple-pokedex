//@format

export async function generateSearchResults(pokeType) {
  const typeSet = await getTypeSet(pokeType);
  const filteredTypeSet = filterPokeIds(typeSet);
  const pokeStatsPromises = filteredTypeSet.map(eachId => {
    return getPokemonStats(eachId);
  });
  const resolvedPokeStats = await Promise.all(pokeStatsPromises);
  return resolvedPokeStats.map(eachPoke => {
    return filterCharacteristics(eachPoke);
  });
}

async function getTypeSet(pokeType) {
  const response = await fetch(
    'https://pokeapi.co/api/v2/type/' + pokeType + '/',
  );
  return response.json();
}

async function getPokemonStats(pokeId) {
  const response = await fetch(
    'https://pokeapi.co/api/v2/pokemon/' + pokeId + '/',
  );
  return response.json();
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
