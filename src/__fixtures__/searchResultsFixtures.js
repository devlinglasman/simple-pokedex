// @format

function spriteURL(pokeNumber) {
  return (
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' +
    pokeNumber +
    '.png'
  );
}

const searchResultsFix = [
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

export default searchResultsFix;
