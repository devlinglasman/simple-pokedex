//@format

export default {
  API_HOST: 'https://pokeapi.co/api/v2/',
  SPRITE_URL:
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/',
  capitalise: word =>
    word.charAt(0).toUpperCase() + word.slice(1).toLowerCase(),
  removeFirstPathPart: path => path.replace('/type/', ''),
};
