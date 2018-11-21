//@format

export async function getPokeData() {
  const response = await fetch('https://pokeapi.co/api/v2/type/grass/');
  const responseJson = await response.json();
  return responseJson.pokemon.slice(0, 3).map(eachResult => {
    return eachResult.pokemon.name;
  });
}
