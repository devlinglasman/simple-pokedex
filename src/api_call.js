//@format

export function makePokeApiCall() {
  return fetch('https://pokeapi.co/api/v2/type/grass/')
    .then(response => response.json())
    .then(results => {
      return results.pokemon.slice(0, 3).map(eachResult => {
        return eachResult.pokemon.name;
      });
    });
}
